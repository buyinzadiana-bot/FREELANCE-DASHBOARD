import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import { DashboardStats } from '../components/DashboardStats';
import { ClientCard } from '../components/ClientCard';
import { ProjectList } from '../components/ProjectList';
import { PaymentsView } from '../components/PaymentsView';

export const Dashboard = () => {
  const { state } = useContext(DashboardContext);

  const totalPayments = state.payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <DashboardStats
        totalClients={state.clients.length}
        totalProjects={state.projects.length}
        totalPayments={totalPayments}
      />

      <section className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-lg font-bold mb-2">Clients</h2>
          {state.clients.map(client => <ClientCard key={client.id} client={client} />)}
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Projects</h2>
          <ProjectList projects={state.projects} />
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Payments</h2>
          <PaymentsView payments={state.payments} />
        </div>
      </section>
    </div>
  );
};