// hint: no-explicit-any
import { DashboardProvider } from './context/DashboardContext';
import { Dashboard } from './pages/Dashboard';
import './index.css'

export const App = () => (
  <DashboardProvider>
    <Dashboard />
  </DashboardProvider>
);

export default App;
