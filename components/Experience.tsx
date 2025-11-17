
import React from 'react';
import type { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary border-b-2 border-brand-primary pb-2 mb-4 font-heading">{children}</h2>
);


export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section>
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">{exp.title} {exp.role && `- ${exp.role}`}</h3>
            <div className="flex flex-wrap justify-between items-baseline text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">
                <p className="font-semibold">{exp.company}{exp.location && ` - ${exp.location}`}</p>
                {exp.period && <p className="italic">{exp.period}</p>}
            </div>
            <ul className="mt-3 space-y-2 list-disc list-inside text-light-text-secondary dark:text-dark-text-secondary">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};