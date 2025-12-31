import React from 'react';
import LearningScreen from '../components/screens/LearningScreen';
import { certificationsData } from '../data/learningData';

const Learning = (): React.ReactElement => {
  return <LearningScreen certifications={certificationsData} />;
};

export default Learning;
