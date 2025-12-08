import { Profile, TimelineEntry } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Siddharth',
  lastName: 'Mehta',
  position: 'AI/ML Engineer | Research Assistant @ UB',
  summary: [
    'AI/ML Engineer | Research Assistant @ UB (SPECT Imaging) | Ex-Data Scientist @ Walmart & ZS | Full-Stack Developer | Building Intelligent, Scalable Systems',
  ],
  avatar: {
    srcPath: 'profile/avataar_fullxfull.jpeg',
    caption: 'Siddharth Mehta',
  },
  location: {
    name: 'Buffalo, New York • from 🇮🇳',
  },
  tags: [
    { name: 'AI / ML' },
    { name: 'Data Science' },
    { name: 'ML System Optimization' },
    { name: 'Computer Vision' },
    { name: 'MLOps' },
    { name: 'Full-Stack Systems' },
  ],
  socialLinks,
};

export const timelineEntries: TimelineEntry[] = [
  {
    companyName: 'University at Buffalo',
    title: 'Research Assistant',
    duration: 'Aug 2025 - Dec 2025',
    description:
      'Developed quantitative sampling-coverage metrics and optimized physics-based imaging systems through 3D simulation, vectorized PyTorch ray-tracing (85% speedup), and Bayesian optimization for large configuration search, enabling scalable experimental workflows and contributing to publications at SPIE Imaging, UNYAPM, and IEEE TMI.',
    link: 'https://www.buffalo.edu/',
    linkTxt: 'Visit',
    image: '/static-assets/logos/ub.png',
  },
  {
    companyName: 'Walmart Global Tech',
    title: 'Data Science Intern',
    duration: 'Jun 2025 - Aug 2025',
    description:
      'Built and deployed large-scale ML/LLM systems for content understanding, distribution-shift monitoring, automated evaluation, and personalized feature ranking, extracting high-signal insights from thousands of artifacts while reducing manual effort by 95% and delivering autoscaled real-time performance on GCP.',
    link: 'https://www.walmart.com',
    linkTxt: 'Visit',
    image: '/static-assets/logos/walmart.png',
  },
  {
    companyName: 'ZS Associates',
    title: 'Data Science Associate',
    duration: 'Jun 2022 - Jul 2024',
    description:
      'Developed large-scale PySpark/Hadoop pipelines and XGBoost-based prioritization models to power product analytics and next-best-engagement decisions, reducing rep workload by 20%, improving targeting accuracy, and driving $100K+ incremental revenue through data-driven customer-level actions.',
    link: 'https://www.zs.com',
    linkTxt: 'visit',
    image: '/static-assets/logos/zs.png',
  },
  {
    companyName: 'Lakebrains Technologies',
    title: 'Machine Learning Intern',
    duration: 'May 2020 - Jul 2020',
    description:
      'Engineered real-time edge-compute systems combining face recognition with motion-detection–based activity recognition, optimized and deployed on Raspberry Pi and Jetson Nano for efficient, low-latency performance.',
    link: undefined,
    image: '/static-assets/logos/lakebrains.jpeg',
  },
  {
    companyName: 'National Institute of Technology Hamirpur',
    title: 'Research Assistant — Biometric Signal Analysis',
    duration: 'Aug 2020 - Jun 2022',
    description:
      'Conducted research on ECG and PPG signal processing for non-invasive blood pressure estimation, implementing hybrid neural network models and validating performance on the MIMIC-II dataset.',
    link: 'https://nith.ac.in',
    linkTxt: 'Visit',
    image: '/static-assets/logos/nith.png',
  },
  {
    companyName: 'National Institute of Technology Hamirpur',
    title: 'Training & Placement Representative',
    duration: 'Aug 2021 - Jun 2022',
    description:
      'Coordinated with companies and students to streamline the on-campus recruitment process, managed data for candidate shortlisting, and supported logistics for placement drives.',
    link: 'https://nith.ac.in',
    linkTxt: 'Visit',
    image: '/static-assets/logos/nith.png',
  },
  {
    companyName: 'Rhythmeecz dance club - National Institute of Technology Hamirpur',
    title: 'Dance Club Secretary',
    duration: 'Aug 2021 - Jun 2022',
    description:
      'Led the official dance club, organized cultural events and performances, managed team operations, and represented the institute in inter-college competitions.',
    link: 'https://nith.ac.in',
    linkTxt: 'Visit',
    image: '/static-assets/logos/rdc.png',
  },

];
