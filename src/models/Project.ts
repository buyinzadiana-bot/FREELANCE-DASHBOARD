export interface Project {
  id: string;
  clientId: string;
  name: string;
  status: 'active' | 'completed' | 'pending';
  dueDate: string;

}