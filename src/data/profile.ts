import { Profile, TimelineEntry } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Harsh',
  lastName: 'Tripathi',
  position: 'AI/ML Engineer | Research @ SUNY RF',
  summary: [
    'AI/ML Engineer | Research @ SUNY RF | MS CS @ UB | Prev. AI/ML @ Piramal Capital | BITS Alum',
  ],
  avatar: {
    srcPath: 'profile/avataar_fullxfull.jpg',
    caption: 'Harsh Tripathi',
  },
  location: {
    name: 'Buffalo, New York • from 🇮🇳',
  },
  tags: [
    { name: 'AI / ML' },
    { name: 'Data Science' },
    { name: 'ML System Optimization' },
    { name: 'Computer Vision' },
    { name: 'AI Agents' },
    { name: 'Computational Biology' },
  ],
  socialLinks,
};

export const timelineEntries: TimelineEntry[] = [
  {
    milestoneText:
      'Graduated from the University at Buffalo — M.S. in Computer Science (Jan 2026)',
  },
  {
    companyName: 'University at Buffalo',
    title: 'ML Research Engineer',
    duration: 'Sep 2024 - Dec 2025',
    description:
      'Engineered a custom ray-tracing analytical model using Projection Probability Density Functions (PPDFs) to form system-response matrices for tomographic reconstruction, devised a convex-hull geometric filter to prune redundant calculations and cut computation by ~70% without accuracy loss, re-implemented attenuation integrals using PyTorch vectorization and multi-CPU threading to achieve ~60× speedups, and scaled billion-ray simulations across the UB CCR HPC cluster using MPI and SLURM for distributed processing. Additionally optimized numerical kernels to approach hardware limits of CPU parallelism and memory bandwidth, and co-authored research publications at SNMMI 2025 and IEEE MIC 2025 advancing applied mathematical methods for imaging.',
    link: 'https://medicine.buffalo.edu/departments/radiology/research/nuclear-emission-imaging-technology.html',
    linkTxt: 'Visit',
    image: '/static-assets/logos/ub.png',
  },
  {
    companyName: 'UCSF Center for Intelligent Imaging',
    title: 'AI Engineer',
    duration: 'Jun 2025 - Aug 2025',
    description:
      'Developed LLM-driven Agentic AI pipelines for unstructured medical and financial-style reports, creating robust structuring and extraction workflows supported by feedback loops and monitoring systems across 100+ input formats; designed real-time, reproducible inference services using FastAPI and Docker for enterprise-scale deployment; and collaborated closely with research and product teams to ensure ML solutions aligned with domain-specific requirements and operational constraints.',
    link: 'https://intelligentimaging.ucsf.edu/news/ucsf-ci2-students-present-research-symposium',
    linkTxt: 'Visit',
    image: '/static-assets/logos/ci2.jpeg',
  },
  {
    companyName: 'Piramal Capital',
    title: 'Machine Learning Engineer',
    duration: 'Jul 2022 - Aug 2024',
    description:
      'Built machine learning pipelines for financial risk modeling and fraud detection, applying ranking algorithms to millions of daily transactions; developed targeting and recommendation models that increased campaign ROI by 18% and strengthened customer acquisition; deployed cloud-native ML services on AWS using Docker and Kubernetes to support real-time, production-grade workloads; and collaborated with quantitative and business teams to translate financial objectives into ML solutions with measurable impact.',
    link: 'https://www.piramalfinance.com/',
    linkTxt: 'visit',
    image: '/static-assets/logos/piramal.jpeg',
  },
  {
    companyName: 'Ahmedabad University',
    title: 'AI Researcher - NLP and Computer Vision',
    duration: 'May 2022 - Oct 2023',
    description:
      'Person Retrieval Using Soft Biometrics leverages NLP and deep learning to identify individuals of interest in surveillance footage based on descriptive textual queries. I developed the end-to-end language pipeline that ingests free-form English descriptions, extracts and standardizes soft-biometric attributes, filters for relevant features, and maps them to the AVSS benchmark schema. The framework is highly scalable, adaptable to varied writing styles, and extendable to broader vocabularies, enabling the vision module to reliably detect matching individuals in video streams. Project completed in collaboration with Dr. Mehul Raval and Dr. Hiren Galiyawala.',
    link: 'https://ahduni.edu.in/',
    linkTxt: 'Visit',
    image: '/static-assets/logos/au.png',
  },
  {
    milestoneText: 'Graduated from NITH — B.Tech in Computer Engineering (Class of 2022)',
  },
  {
    companyName: 'Birla Institute of Technology and Science, Pilani',
    title: 'Teaching Assistant - Statistical Inference and Applications',
    duration: 'Aug 2021 - Dec 2021',
    description:
      'Teaching Assistant for the Statistical Inference and Applications MATH F353 course.',
    link: 'https://www.bits-pilani.ac.in/goa/',
    linkTxt: 'Visit',
    image: '/static-assets/logos/bits.png',
  },
  {
    companyName: 'Birla Institute of Technology and Science, Pilani',
    title: 'Teaching Assistant - Optimization',
    duration: 'Aug 2020 - Dec 2020',
    description:
      'Teaching Assistant for the course: MATH F212 Optimisation. Helped out in assignment evaluations and doubt solving for a class of roughly 200 students.',
    link: 'https://www.bits-pilani.ac.in/goa/',
    linkTxt: 'Visit',
    image: '/static-assets/logos/bits.png',
  },
  {
    companyName: 'Pass Consulting',
    title: 'Data Science Intern',
    duration: 'May 2020 - Jul 2020',
    description:
      'Developed a pilot election-forecasting model that links historical constituency-level electoral outcomes with demographic parameters to predict assembly-level results. The system enables PASS Consulting to analyze constituency profiles, quantify demographic influence, and generate early, data-driven forecasts for upcoming assembly elections, supporting strategic planning and decision-making.',
    link: undefined,
    image: '/static-assets/logos/pass_consulting.png',
  },
];
