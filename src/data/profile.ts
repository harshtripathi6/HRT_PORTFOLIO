import { Profile, TimelineEntry } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Siddharth',
  lastName: 'Mehta',
  position: "M.S. Computer Science Fall'26 Student @ UB",
  summary: ['Software Developer | Artificial Intelligence Enthusiast'],
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
    companyName: 'State University of New York, Buffalo',
    title: 'M.S. in Computer Science',
    duration: 'Aug 2024 - Jan 2026',
    description:
      'Pursuing advanced coursework in machine learning, deep learning, and data-intensive computing.',
    link: 'https://www.buffalo.edu',
    linkTxt: 'Visit',
    image:
      'https://www.buffalo.edu/content/www/brand/TrademarksLicensing/creating-promotional-products/design-ordering/jcr:content/par/image_836581544.img.150.auto.jpg/1626190851210.jpg',
  },
  {
    companyName: 'ZS Associates',
    title: 'Data Science Associate',
    duration: 'Jun 2022 - Jul 2024',
    description:
      'Developed ML models for customer prioritization, built scalable data pipelines, and automated workflows to improve efficiency.',
    // link: "https://www.zs.com",
    // linkTxt:"visit",
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
      'https://media.licdn.com/dms/image/v2/C560BAQFxFmtoq8j4wg/company-logo_200_200/company-logo_200_200/0/1630658258867/lakebrains_technologies_logo?e=1745452800&v=beta&t=nxM5Zl4flgXZtTsrtVFAQf_bCJpAaZTwRoB0_fI3mSY',
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
