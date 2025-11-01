import { DashboardProvider } from './context/DashboardContext';
import { Dashboard } from './pages/Dashboard';

export const App = () => (
  <DashboardProvider>
    <Dashboard />
  </DashboardProvider>
);

export default App;
