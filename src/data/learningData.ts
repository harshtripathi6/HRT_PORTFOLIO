import { Book, Certificate, Coursework } from '../types/Learnings';

export const certificationsData: Certificate[] = [
  {
    title: 'Machine Learning Associate',
    platform: 'Amazon Web Services(AWS)',
    date: 'Jul 2025',
    link: 'https://www.credly.com/badges/1d58821d-291b-47b3-8ef8-9d6974ba6c47/linked_in_profile',
    icon: '/static-assets/logos/aws.png',
  },
  {
    title: 'Data Scientist\'s Toolbox',
    platform: 'Coursera',
    date: 'Apr 2020',
    link: 'https://coursera.org/share/84b34391ba7f51d98368a70022ba75c8',
    icon: 'https://coursera.org/favicon.ico',
  },
  {
    title: 'R Programming',
    platform: 'Coursera',
    date: 'Apr 2020',
    link: 'https://www.coursera.org/account/accomplishments/verify/8UXWEUWKA8RN?utm_source=link&utm_campaign=copybutton_certificate',
    icon: 'https://coursera.org/favicon.ico',
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
