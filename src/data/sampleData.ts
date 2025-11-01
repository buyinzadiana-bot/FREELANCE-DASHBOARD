import { Client, Project, Payment } from '../models';

export const clients: Client[] = [
  { id: 'c1', name: 'Acme Corp', email: 'acme@example.com' },
  { id: 'c2', name: 'Globex Ltd', email: 'globex@example.com' },
];

export const projects: Project[] = [
  { id: 'p1', clientId: 'c1', name: 'Website Redesign', status: 'active', dueDate: '2025-12-01' },
  { id: 'p2', clientId: 'c2', name: 'Mobile App', status: 'pending', dueDate: '2025-12-15' },
];

export const payments: Payment[] = [
  { id: 'pay1', projectId: 'p1', amount: 1200, date: '2025-10-01', status: 'paid' },
  { id: 'pay2', projectId: 'p2', amount: 800, date: '2025-10-15', status: 'pending' },
];