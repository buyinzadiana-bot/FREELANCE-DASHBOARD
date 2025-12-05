import type { Project, Payment } from "../models";

export const filterProjectsByStatus = (projects: Project[], status: Project["status"]) =>
  projects.filter(p => p.status === status);

export const filterProjectsByPayment = (projects: Project[], payments: Payment[], paymentStatus: Payment["status"]) =>
  projects.filter(project =>
    payments.some(payment => payment.projectId === project.id && payment.status === paymentStatus)
  );
