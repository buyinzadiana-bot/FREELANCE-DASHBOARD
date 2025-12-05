export interface Payment {
  id: string;
  projectId: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
  
}
