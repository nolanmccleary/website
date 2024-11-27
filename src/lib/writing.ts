import { Writing } from '@/types';

export const loadWriting = async (): Promise<Writing> => {
  const file = await import('@/content/writing.json');
  return file.default;
};