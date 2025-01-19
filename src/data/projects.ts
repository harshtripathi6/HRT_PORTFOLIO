import { Projects } from '../types/Project';

export const projects: Projects = {
  'micrograd-ts': {
    id: 'micrograd-ts',
    name: '🤖 Micrograd TS',
    srcURL: { url: 'https://github.com/trekhleb/micrograd-ts' },
    demoURL: { url: 'https://trekhleb.dev/micrograd-ts' },
    cover: { srcPath: 'projects/micrograd-ts/04-cover.png' },
    startDate: '2023-08-06',
    summary: [
      'A tiny scalar-valued autograd engine and a neural net on top of it. A TypeScript version of the karpathy/micrograd repo.',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'TypeScript' },
    ],
    gitHubRepo: {
      owner: 'trekhleb',
      repo: 'micrograd-ts',
    },
    achievements: [],
  },
};
