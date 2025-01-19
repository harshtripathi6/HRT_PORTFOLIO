import { Book, Certificate, Coursework } from '../types/Learnings';

export const certificationsData: Certificate[] = [
  {
    title: 'Computer Vision Basics',
    platform: 'Coursera',
    date: 'Aug 2021',
    link: 'https://www.coursera.org/account/accomplishments/certificate/QHUSYRBJMQX4',
    icon: 'https://coursera.org/favicon.ico',
  },
  {
    title: 'Javascript Algorithms & Data Structures',
    platform: 'freeCodeCamp',
    date: 'May 2021',
    link: 'https://www.freecodecamp.org/certification/siddharthm10/javascript-algorithms-and-data-structures',
    icon: 'https://freecodecamp.org/favicon-32x32.png?v=6cba562cbd10e31af925a976f3db73f7',
  },
  {
    title: 'Algorithmic Toolbox',
    platform: 'Coursera',
    date: 'Oct 2020',
    link: 'https://www.coursera.org/account/accomplishments/verify/DGLRM9M85D6B',
    icon: 'https://coursera.org/favicon.ico',
  },
  {
    title: 'Convolutional Neural Network',
    platform: 'Coursera',
    date: 'Oct 2020',
    link: 'https://www.coursera.org/account/accomplishments/verify/XP8PG7NN8N34',
    icon: 'https://coursera.org/favicon.ico',
  },
  {
    title: 'Python Programming',
    platform: 'Udemy',
    date: 'Oct 2022',
    link: 'https://www.udemy.com/certificate/UC-01414403-6486-43d1-8d7a-7e671d38fa6a/',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-udemy-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-7-pack-logos-icons-2945277.png?f=webp',
  },
  {
    title: 'C++ Programming',
    platform: 'Udemy',
    date: 'Jun 2022',
    link: 'https://www.udemy.com/certificate/UC-6b2b55d3-1b4b-42de-8579-264796d9bf2c/',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-udemy-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-7-pack-logos-icons-2945277.png?f=webp',
  },
];

export const courseworkData: Coursework[] = [
  {
    title: 'Deep Learning',
    description: 'Neural networks, CNNs, RNNs, and transformers.',
    icon: 'https://example.com/deep-learning-icon.png', // Optional
  },
  {
    title: 'Data Structures',
    description: 'Covered trees, graphs, heaps, and algorithms.',
    icon: null, // Optional
  },
  {
    title: 'Cloud Computing',
    description: 'Learned AWS, Docker, and Kubernetes.',
    icon: 'https://example.com/cloud-computing-icon.png', // Optional
  },
];

export const booksData: Book[] = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'read',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
    link: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    status: 'read',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg',
    link: 'https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad',
  },
  {
    title: 'The Object-Oriented Thought Process (3rd Edition)',
    author: 'Matt Weisfeld',
    status: 'read',
    cover: 'https://m.media-amazon.com/images/I/41FS+-iUXiL._SX342_SY445_.jpg',
    link: 'https://www.goodreads.com/book/show/4109674-the-object-oriented-thought-process',
  },
  {
    title: 'Understanding Deep Learning',
    author: 'Vincent Cheung',
    status: 'reading', // Ongoing
    cover: 'https://m.media-amazon.com/images/I/41EZCiktvSL._SX342_SY445_.jpg', // Replace with the actual cover if different
    link: 'https://www.goodreads.com/book/show/51386468-understanding-deep-learning',
  },
  {
    title:
      'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (O’Reilly)',
    author: 'Aurélien Géron',
    status: 'read',
    cover: 'https://m.media-amazon.com/images/I/51GcXOrWROL._SY445_SX342_.jpg',
    link: 'https://www.goodreads.com/book/show/40363621-hands-on-machine-learning-with-scikit-learn-keras-and-tensorflow',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'read',
    cover: 'https://m.media-amazon.com/images/I/514xvNk9rTL._SY445_SX342_.jpg',
    link: 'https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications',
  },
];
