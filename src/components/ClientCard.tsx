import type { Client } from '../models';

interface Props {
  client: Client;
}

export const ClientCard = ({ client }: Props) => (
  <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
    <h3 className="text-lg font-bold">{client.name}</h3>
    <p className="text-sm text-gray-500">{client.email}</p>
  </div>
);
