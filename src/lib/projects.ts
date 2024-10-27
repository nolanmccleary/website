import { Projects } from '@/types';

export const loadProjects = async (): Promise<Projects> => {
  const file = await import('@/content/projects.json');
  return file.default;
};
