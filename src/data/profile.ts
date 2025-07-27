import { Profile, TimelineEntry } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Siddharth',
  lastName: 'Mehta',
  position: 'Data Science Intern @ Walmart | Research Assistant @ UB',
  summary: [
    "M.S. Computer Science @ UB | Ex-ZS | NITH '22 | Agentic AI Enthusiast | Building Intelligent, Scalable AI Systems",
  ],
  avatar: {
    srcPath: 'profile/avataar_fullxfull.jpeg',
    caption: 'Siddharth Mehta',
  },
  location: {
    name: 'Buffalo, New York • from 🇮🇳',
  },
  tags: [
    { name: 'Full Stack' },
    { name: 'Machine Learning' },
    { name: 'React' },
    { name: 'Type Script' },
    { name: 'JavaScript' },
    { name: 'C++' },
  ],
  socialLinks,
};

export const timelineEntries: TimelineEntry[] = [
  {
    companyName: 'Walmart Global Tech',
    title: 'Data Science Intern',
    duration: 'Jun 2025 - Aug 2025',
    description:
      'Built an LLM‑powered feedback‑mining platform processing 5k+ artifacts/month that doubled query‑to‑FAQ match accuracy and reduced manual review by 90%.',
    link: 'https://www.walmart.com',
    linkTxt: 'Visit',
    image:
      'https://media.licdn.com/dms/image/v2/D560BAQHZkPdlecGssw/company-logo_400_400/company-logo_400_400/0/1736779000209/walmart_logo?e=1755129600&v=beta&t=x5F1LuCBtyOGnSvRuUlUFn6vu94RGMejFY9pZBmCxaE',
  },
  {
    companyName: 'ZS Associates',
    title: 'Data Science Associate',
    duration: 'Jun 2022 - Jul 2024',
    description:
      'Worked with engineering team for Next‑Best‑Engagement platform integrating 15+ data sources and processing 1M+ weekly records, cutting data defects 30% and delivering XGBoost‑based HCP prioritization (R²=0.70) that helped secure a $100K account expansion.',
    link: 'https://www.zs.com',
    linkTxt: 'visit',
    image:
      'https://qtxasset.com/quartz/qcloud5/media/image/ZS%20Logo_0.png?VersionId=63iF4R15IaPBB2mPwGvGrsV8Vdpi1vg4',
  },
  {
    companyName: 'Lakebrains Technologies',
    title: 'Machine Learning Intern',
    duration: 'May 2020 - Jul 2020',
    description:
      'Implemented face recognition algorithms and integrated real-time systems on Raspberry Pi and Jetson Nano.',
    link: undefined,
    image:
      'https://media.licdn.com/dms/image/v2/C560BAQFxFmtoq8j4wg/company-logo_200_200/company-logo_200_200/0/1630658258867/lakebrains_technologies_logo?e=2147483647&v=beta&t=HlEFi2l7gad2Y6guJj_xMqHdh8QlbmVL95Qv7Y0zzZw',
  },
  {
    companyName: 'Verzeo',
    title: 'Machine Learning Intern',
    duration: 'Jan 2021 - Apr 2021',
    description:
      'Completed training and implemented machine learning algorithms to solve practical problems.',
    image:
      'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/79524d2ca29a9c334aea7906219c642f',
  },
  {
    companyName: 'National Institute of Technology Hamirpur',
    title: 'B.Tech in Electrical Engineering',
    duration: 'Jul 2018 - Jun 2022',
    description:
      'Focused on neural networks, statistics, and signal processing; served as placement coordinator and dance crew secretary.',
    link: 'https://nith.ac.in',
    linkTxt: 'Visit',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/National_Institute_of_Technology%2C_Hamirpur_Logo.png/220px-National_Institute_of_Technology%2C_Hamirpur_Logo.png',
  },
];
