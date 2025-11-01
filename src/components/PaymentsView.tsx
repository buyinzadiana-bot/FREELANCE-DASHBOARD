import { Payment } from '../models';

interface Props {
  payments: Payment[];
}

export const PaymentsView = ({ payments }: Props) => (
  <div className="space-y-2">
    {payments.map(payment => (
      <div key={payment.id} className="flex justify-between p-2 border rounded">
        <span>{payment.projectId}</span>
        <span>${payment.amount}</span>
        <span className={payment.status === 'paid' ? 'text-green-500' : 'text-yellow-500'}>
          {payment.status}
        </span>
      </div>
    ))}
  </div>
);