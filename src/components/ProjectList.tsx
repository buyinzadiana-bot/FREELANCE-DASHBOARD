import type { Project } from '../models';

interface Props {
  projects: Project[];
}

export const ProjectList = ({ projects }: Props) => (
  <div className="space-y-3">
    {projects.map(project => (
      <div key={project.id} className="p-3 border rounded shadow-sm flex justify-between items-center">
        <span>{project.name}</span>
        <span className="text-sm text-gray-500">{project.status}</span>
      </div>
    ))}
  </div>
);
