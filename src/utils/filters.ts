import { Project, ProjectStatus, PaymentStatus } from "../models";

export const filterProjectsByStatus = (projects: Project[], status: ProjectStatus) =>
  projects.filter(p => p.status === status);

export const filterProjectsByPayment = (projects: Project[], paymentStatus: PaymentStatus) =>
  projects.filter(p => p.paymentStatus === paymentStatus);