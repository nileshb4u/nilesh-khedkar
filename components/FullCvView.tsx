import React from 'react';
import type { CVData } from '../types';
import { Header } from './Header';
import { About } from './About';
import { Awards } from './Awards';
import { Experience } from './Experience';
import { EducationCerts } from './EducationCerts';

interface FullCvViewProps {
  data: CVData;
  onBackToChat: () => void;
}

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);

export const FullCvView: React.FC<FullCvViewProps> = ({ data, onBackToChat }) => {
  return (
    <div className="flex-grow w-full">
      <div className="sticky top-0 bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-sm z-10 py-3 px-4 md:px-6 border-b border-light-bg-tertiary dark:border-dark-bg-tertiary">
         <div className="max-w-4xl mx-auto">
            <button 
                onClick={onBackToChat} 
                className="flex items-center px-4 py-2 text-sm font-medium text-brand-primary bg-orange-50 dark:bg-dark-bg-secondary dark:text-dark-text-primary border border-transparent hover:border-orange-200 rounded-lg hover:bg-orange-100 dark:hover:bg-dark-bg-tertiary transition-colors"
            >
                <BackIcon />
                Back to Home
            </button>
         </div>
      </div>
      <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-12">
        <Header data={data.header} />
        <About content={data.aboutMe} />
        <Awards awards={data.recognitions} />
        <Experience experiences={data.experience} />
        <EducationCerts education={data.education} certifications={data.certifications} />
      </main>
       <footer className="text-center p-4 text-light-text-secondary dark:text-dark-text-secondary text-sm border-t border-light-bg-tertiary dark:border-dark-bg-tertiary">
            <p>&copy; {new Date().getFullYear()} Nilesh S. Khedkar. All rights reserved.</p>
        </footer>
    </div>
  );
};