interface Props {
  totalClients: number;
  totalProjects: number;
  totalPayments: number;
}

export const DashboardStats = ({ totalClients, totalProjects, totalPayments }: Props) => (
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div className="bg-blue-100 p-4 rounded text-center">
      <h2 className="text-xl font-bold">{totalClients}</h2>
      <p>Clients</p>
    </div>
    <div className="bg-green-100 p-4 rounded text-center">
      <h2 className="text-xl font-bold">{totalProjects}</h2>
      <p>Projects</p>
    </div>
    <div className="bg-yellow-100 p-4 rounded text-center">
      <h2 className="text-xl font-bold">${totalPayments}</h2>
      <p>Total Payments</p>
    </div>
  </div>
);