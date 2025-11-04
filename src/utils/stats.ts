import { Project } from "../models";

export const countPaidProjects = (projects: Project[]) =>
  projects.filter(p => p.paymentStatus === "paid").length;

export const countUnpaidProjects = (projects: Project[]) =>
  projects.filter(p => p.paymentStatus === "unpaid").length;