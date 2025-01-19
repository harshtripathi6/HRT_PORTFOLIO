import React from 'react';
import { certificationsData } from '../../data/learningData';

const Certifications = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {certificationsData.map((cert) => (
        <div
          key={cert.title}
          className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
        >
          <div className="flex items-center mb-4">
            {cert.icon ? (
              <img
                src={cert.icon}
                alt={`${cert.title} icon`}
                className="w-8 h-8 mr-4"
              />
            ) : (
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-4" />
            )}
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500">{cert.platform}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              View Certificate
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Certifications;
