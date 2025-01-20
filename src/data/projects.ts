import { Projects } from '../types/Project';

export const projects: Projects = {
  'micrograd-cpp': {
    id: 'micrograd-cpp',
    name: '🤖 Micrograd Cpp',
    srcURL: { url: 'https://github.com/siddharthm10/micrograd-cpp' },
    demoURL: undefined,
    cover: { srcPath: 'projects/micrograd-ts/04-cover.png' },
    startDate: '2025-01-20',
    summary: [
      'A tiny scalar-valued autograd engine and a neural net on top of it. A C++ version of the karpathy/micrograd repo.',
    ],
    tags: [
      { name: 'AI' },
      { name: 'ML' },
      { name: 'Machine Learning' },
      { name: 'C++' },
    ],
    gitHubRepo: {
      owner: 'siddharthm10',
      repo: 'micrograd-cpp',
    },
    achievements: [],
  },
};
