
import React from 'react';

interface AboutProps {
  content: {
    title: string;
    content: string;
    points: string[];
    note: string;
  };
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary border-b-2 border-brand-primary pb-2 mb-4 font-heading">{children}</h2>
);


export const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section>
      <SectionTitle>{content.title}</SectionTitle>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">{content.content}</p>
      <ul className="space-y-3">
        {content.points.map((point, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-brand-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-light-text-secondary dark:text-dark-text-secondary"><span className="font-semibold text-light-text-primary dark:text-dark-text-primary">{point.split(':')[0]}:</span>{point.split(':')[1]}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm italic">{content.note}</p>
    </section>
  );
};