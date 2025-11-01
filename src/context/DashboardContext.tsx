import { createContext, useReducer, ReactNode } from 'react';
import { dashboardReducer, DashboardState } from './dashboardReducer';
import { clients, projects, payments } from '../data/sampleData';

const initialState: DashboardState = { clients, projects, payments };

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext<{
  state: DashboardState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};