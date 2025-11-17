
import React from 'react';
import type { Recognition } from '../types';

interface AwardsProps {
  awards: Recognition[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary border-b-2 border-brand-primary pb-2 mb-4 font-heading">{children}</h2>
);

const AwardIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5.121l3.15-1.575a1 1 0 011.36.42l1.36 2.72a1 1 0 01-.42 1.36L14.12 12l2.72 1.36a1 1 0 01.42 1.36l-1.36 2.72a1 1 0 01-1.36.42L12 14.879V20a1 1 0 01-1.3.954l-3.32-1.106a1 1 0 01-.68-.954V13.88l-3.15 1.575a1 1 0 01-1.36-.42L1 12.315a1 1 0 01.42-1.36L4.88 10 2.16 8.64a1 1 0 01-.42-1.36l1.36-2.72a1 1 0 011.36-.42L8 5.719V2a1 1 0 011.3-.954l2- .667z" clipRule="evenodd" />
    </svg>
);


export const Awards: React.FC<AwardsProps> = ({ awards }) => {
  return (
    <section>
      <SectionTitle>Key Recognitions</SectionTitle>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-12 text-center">
              <span className="text-brand-primary font-bold text-lg">{award.year}</span>
            </div>
            <div className="flex-shrink-0 mx-4">
              <AwardIcon />
            </div>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};