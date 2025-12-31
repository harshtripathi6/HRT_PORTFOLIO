import { Projects } from '../types/Project';

export const projects: Projects = {
  'CAFA Protein Prediction': {
    id: 'cafa-protein-prediction',
    name: 'CAFA 6 Protein Prediction',
    srcURL: { url: 'https://github.com/harshtripathi6/cafa6' },
    demoURL: undefined,
    cover: { srcPath: 'projects/micrograd-ts/image.png' },
    startDate: '2025-12-20',
    summary: [
      'Implemented a protein function prediction model using deep learning techniques. Used ESM2 model as backbone and finetuned it on CAFA 6 dataset.',
    ],
    tags: [
      { name: 'AI' },
      { name: 'Machine Learning' },
      { name: 'Computational Biology' }
    ],
    gitHubRepo: {
      owner: 'harshtripathi6',
      repo: 'cafa6',
    },
    achievements: [],
    highlight: true,
  },
};
