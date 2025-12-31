import React from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import ErrorBoundary from '../shared/ErrorBoundary';
import SEO from '../shared/SEO';
import PageLayout from '../layouts/PageLayout';
import { socialLinks } from '../../data/socialLinks';

const ContactScreen = (): React.ReactElement => {
  const renderContactLink = (
    icon: React.ReactNode,
    label: string,
    link?: string,
  ): React.ReactElement => {
    return link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center p-2 text-gray-700 hover:text-blue-500 transition"
      >
        {icon}
        <span className="mt-2 text-sm">{label}</span>
      </a>
    ) : (
      <div className="flex flex-col items-center p-2 text-gray-400 cursor-not-allowed">
        {icon}
        <span className="mt-2 text-sm">{label}</span>
      </div>
    );
  };

  const socialLinksFiltered = socialLinks.filter((link) => link.type !== 'Leetcode');

  return (
    <PageLayout>
      <SEO
        title="Contact Harsh"
        description="This page contains contact information to reach out Harsh via various platforms."
      />
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <div className="max-w-3xl w-full bg-white p-6 rounded-md shadow-sm">
            {/* Header */}
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Get in Touch
            </h1>
            <p className="text-gray-600 mb-6 text-center text-sm">
              Feel free to reach out to me through the links below.
            </p>

            {/* Contact Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {socialLinksFiltered.map((link) => {
                const iconMap: { [key: string]: React.ReactNode } = {
                  LinkedIn: <FaLinkedin className="text-2xl" />,
                  GitHub: <FaGithub className="text-2xl" />,
                  Twitter: <FaTwitter className="text-2xl" />,
                  Instagram: <FaInstagram className="text-2xl" />,
                };

                const icon = link.type && iconMap[link.type] ? iconMap[link.type] : <FaEnvelope className="text-2xl" />;
                const href = link.url ?? undefined;
                return renderContactLink(icon, link.type || 'Unknown', href);
              })}
              {renderContactLink(
                <FaEnvelope className="text-2xl" />,
                'Email',
                'mailto:htripathi6@gmail.com',
              )}
              {renderContactLink(
                <FaPhoneAlt className="text-2xl" />,
                'Phone',
                'tel:+1-(740)-409-3232',
              )}
            </div>

            {/* Book a Call */}
            <div className="text-center mb-4">
              <a
                href="https://app.simplymeet.me/htripathi6/htripathi6-30-1767206900564?day=2025-12-31#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-black transition"
              >
                Book time on Calendar
              </a>
            </div>
          </div>

          {/* Resume Section */}
          <div className="w-full max-w-4xl mt-8 bg-white rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 p-4 bg-gray-100 text-center">
              My Resume
            </h2>
            <div className="w-full h-[500px] sm:h-[700px]">
              <iframe
                src="/static-assets/HRT_ML_Resume.pdf"
                title="Resume"
                className="w-full h-full border-none"
              />
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              If the resume is not visible, kindly{' '}
              use the download button below to view it.
            </div>
            <div className="text-center my-4">
              <a
                href="/static-assets/resume_ml.pdf"
                download
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-black transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </PageLayout>
  );
};

export default ContactScreen;
