import type { Client, Project } from "../models";

export const findClientById = (clients: Client[], id: string): Client | undefined =>
  clients.find(c => c.id === id);

export const searchProjectsByTitle = (projects: Project[], keyword: string): Project[] =>
  projects.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));