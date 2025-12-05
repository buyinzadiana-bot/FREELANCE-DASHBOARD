// import type { Project } from "../models";

// export const countPaidProjects = (projects: Project[]) =>
//   projects.filter(p => p.paymentStatus === "paid").length;

// export const countUnpaidProjects = (projects: Project[]) =>
//   projects.filter(p => p.paymentStatus === "unpaid").length;

import type { Project, Payment } from "../models";

export const countPaidProjects = (projects: Project[], payments: Payment[]) =>
  projects.filter(project =>
    payments.some(payment => payment.projectId === project.id && payment.status === "paid")
  ).length;

export const countUnpaidProjects = (projects: Project[], payments: Payment[]) =>
  projects.filter(project =>
    payments.some(payment => payment.projectId === project.id && payment.status === "pending")
  ).length;
