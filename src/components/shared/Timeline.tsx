import React from 'react';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import { FiBriefcase } from '@react-icons/all-files/fi/FiBriefcase';
import { TimelineEntry } from '../../types/Profile';

type TimelineProps = {
  entries: TimelineEntry[];
};

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  let contentIndex = 0;
  const milestoneCounts: Record<string, number> = {};
  const entryCounts: Record<string, number> = {};

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 md:block hidden" />

      {/* Present Label */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-gray-500 font-medium md:block hidden">
        Present
      </div>

      {/* Timeline Entries */}
      {entries.map((entry) => {
        if (entry.milestoneText) {
          const milestoneLabel = entry.milestoneText.trim();
          milestoneCounts[milestoneLabel] = (milestoneCounts[milestoneLabel] || 0) + 1;
          const milestoneKey = `milestone-${milestoneLabel}-${milestoneCounts[milestoneLabel]}`;
          return (
            <div
              key={milestoneKey}
              className="relative flex justify-center my-16"
            >
              <span className="w-full border-t border-gray-300" />
              <span className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 inline-flex items-center justify-center px-6 bg-white text-xs uppercase tracking-widest text-gray-500 text-center whitespace-pre-line">
                {entry.milestoneText}
              </span>
            </div>
          );
        }

        const isRightSide = contentIndex % 2 === 0; // Alternate sides for larger screens
        contentIndex += 1;
        const entryKeyBase = [entry.companyName, entry.title, entry.duration, entry.description].filter(Boolean).join('|') || 'timeline-entry';
        entryCounts[entryKeyBase] = (entryCounts[entryKeyBase] || 0) + 1;
        const entryKey = `${entryKeyBase}-${entryCounts[entryKeyBase]}`;

        return (
          <div
            key={entryKey}
            className={`flex items-center w-full mb-8 ${
              isRightSide ? 'md:justify-start' : 'md:justify-end'
            } justify-start text-justify`} // On small screens, all entries are aligned to the left
          >
            {/* Content Block */}
            <div
              className={`relative w-full md:w-5/12 p-4 bg-white shadow-md rounded-lg ${
                isRightSide ? 'md:mr-8' : 'md:ml-8'
              }`}
            >
              {/* Image or Icon */}
              <div className="flex items-center mb-3">
                {entry.image ? (
                  <span className="w-14 h-14 mr-3 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={entry.image}
                      alt={entry.companyName || 'Timeline logo'}
                      className="w-12 h-12 object-contain"
                    />
                  </span>
                ) : (
                  <FiBriefcase className="w-14 h-14 text-gray-500 mr-3" />
                )}
                <div>
                  {entry.companyName && (
                    <h3 className="font-semibold text-lg">{entry.companyName}</h3>
                  )}
                  {entry.title && (
                    <p className="text-sm text-gray-500">{entry.title}</p>
                  )}
                  {entry.duration && (
                    <p className="text-sm text-gray-400">{entry.duration}</p>
                  )}
                </div>
              </div>
              {entry.description && (
                <p className="text-sm">{entry.description}</p>
              )}
              {entry.link && (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-blue-500 hover:underline"
                >
                  <FiExternalLink className="mr-1" />
                  {entry.linkTxt ? entry.linkTxt : 'View More'}
                </a>
              )}
            </div>

            {/* Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full md:block hidden" />
          </div>
        );
      })}

      {/* 2018 Label */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] text-gray-500 font-medium md:block hidden">
        2018
      </div>
    </div>
  );
};

export default Timeline;
