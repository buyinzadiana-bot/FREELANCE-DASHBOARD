interface Props {
  totalClients: number;
  totalProjects: number;
  totalPayments: number;
}

export const DashboardStats = ({ totalClients, totalProjects, totalPayments }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl shadow-sm text-center">
      <h2 className="text-2xl font-bold text-blue-700">{totalClients}</h2>
      <p className="text-gray-700">Clients</p>
    </div>
    <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-xl shadow-sm text-center">
      <h2 className="text-2xl font-bold text-green-700">{totalProjects}</h2>
      <p className="text-gray-700">Projects</p>
    </div>
    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-5 rounded-xl shadow-sm text-center">
      <h2 className="text-2xl font-bold text-yellow-700">${totalPayments}</h2>
      <p className="text-gray-700">Total Payments</p>
    </div>
  </div>
);
