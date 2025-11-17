
import React from 'react';
import type { EducationItem, Certification } from '../types';

interface EducationCertsProps {
  education: EducationItem[];
  certifications: Certification[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary border-b-2 border-brand-primary pb-2 mb-4 font-heading">{children}</h2>
);

export const EducationCerts: React.FC<EducationCertsProps> = ({ education, certifications }) => {
  return (
    <section>
      <SectionTitle>Education & Certifications</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">Education</h3>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index}>
                <p className="font-medium text-light-text-primary dark:text-dark-text-primary">{edu.degree}</p>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">Certifications</h3>
          <ul className="space-y-2 list-disc list-inside text-light-text-secondary dark:text-dark-text-secondary">
            {certifications.map((cert, index) => (
              <li key={index}>{cert.name} - <span className="italic">{cert.date}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};