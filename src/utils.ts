import { readFileSync } from 'fs';

export const readJSON = (path: string) => {
  try {
    const data = readFileSync(path, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    throw new Error('Error reading JSON file');
  }
};