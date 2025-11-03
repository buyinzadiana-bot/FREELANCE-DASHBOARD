import type { Client, Project, Payment } from '../models';

export interface DashboardState {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
}

export type DashboardAction =
  | { type: 'ADD_CLIENT'; payload: Client }
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'ADD_PAYMENT'; payload: Payment };

export const dashboardReducer = (state: DashboardState, action: DashboardAction): DashboardState => {
  switch (action.type) {
    case 'ADD_CLIENT':
      return { ...state, clients: [...state.clients, action.payload] };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'ADD_PAYMENT':
      return { ...state, payments: [...state.payments, action.payload] };
    default:
      return state;
  }
};
