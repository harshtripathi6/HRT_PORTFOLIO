import React from 'react';
import Certifications from '../elements/Certifications';
import Bookshelf from '../elements/Bookshelf';
import ErrorBoundary from '../shared/ErrorBoundary';
import SEO from '../shared/SEO';
import PageLayout from '../layouts/PageLayout';

const LearningScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO
        title={"Siddharth's Learning Journey"}
        description="This page captures all the certifications, books, and coursework that Siddharth has covered on his learning journey."
      />
      <ErrorBoundary>
        <div className="px-6">
          {/* Certifications Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Certifications
            </h2>
            <Certifications />
          </section>

          {/* Coursework Section */}
          {/* <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Coursework
            </h2>
            <Coursework />
          </section> */}
          {/* Bookshelf Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              My Bookshelf
            </h2>
            <p className="text-gray-600 mb-8 text-sm">
              Explore books I&apos;ve read and the one I&apos;m currently reading.
            </p>
            <Bookshelf />
          </section>
        </div>
      </ErrorBoundary>
    </PageLayout>
  );
};

export default LearningScreen;
