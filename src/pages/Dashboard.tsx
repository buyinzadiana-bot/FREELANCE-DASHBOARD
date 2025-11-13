import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import { DashboardStats } from '../components/DashboardStats';
import { ClientCard } from '../components/ClientCard';
import { ProjectList } from '../components/ProjectList';
import { PaymentsView } from '../components/PaymentsView';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Dashboard = () => {
  const { state } = useContext(DashboardContext);
  const totalPayments = state.payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-20 px-6 max-w-7xl mx-auto w-full">
        <DashboardStats
          totalClients={state.clients.length}
          totalProjects={state.projects.length}
          totalPayments={totalPayments}
        />

        <section className="grid md:grid-cols-3 gap-6 mt-8">
          <div>
            <h2 className="text-lg font-bold mb-3 text-gray-700">Clients</h2>
            <div className="space-y-3">
              {state.clients.map(client => (
                <div
                  key={client.id}
                  className="transform transition hover:scale-[1.02]"
                >
                  <ClientCard client={client} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 text-gray-700">Projects</h2>
            <ProjectList projects={state.projects} />
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 text-gray-700">Payments</h2>
            <PaymentsView payments={state.payments} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
