import React from 'react';
import Certifications from '../elements/Certifications';
import ErrorBoundary from '../shared/ErrorBoundary';
import SEO from '../shared/SEO';
import PageLayout from '../layouts/PageLayout';
import { Certificate } from '../../types/Learnings';

type LearningScreenProps = {
  certifications: Certificate[];
}

const LearningScreen = (props: LearningScreenProps): React.ReactElement => {
  const { certifications } = props;
  return (
    <PageLayout>
      <SEO
        title="Harsh's Learning Journey"
        description="This page captures the certifications and milestones from Harsh's learning journey."
      />
      <ErrorBoundary>
        {/* Certifications Section */}
        <Certifications certifications={certifications} />

        {/* Coursework Section */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Coursework
          </h2>
          <Coursework />
        </section> */}
      </ErrorBoundary>
    </PageLayout>
  );
};

export default LearningScreen;
