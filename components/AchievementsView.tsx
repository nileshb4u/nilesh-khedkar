
import React, { useState, useEffect } from 'react';
import type { Achievement } from '../types';
import { cvData } from '../constants';

interface AchievementsViewProps {
    achievements: Achievement[];
    onBackToHome: () => void;
    ThemeToggle: React.FC;
    LanguageSelector: React.FC;
}

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const FallbackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export const AchievementsView: React.FC<AchievementsViewProps> = ({ 
    achievements, 
    onBackToHome, 
    ThemeToggle,
    LanguageSelector
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 left, 1 right
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        setImageError(false);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    };

    return (
        <main className="flex flex-col h-screen w-full bg-light-bg dark:bg-dark-bg">
            {/* Minimalist 2-Row Header (Consistent with Chat View) */}
            <div className="flex-shrink-0 bg-white dark:bg-dark-bg-secondary border-b border-light-bg-tertiary dark:border-dark-bg-tertiary shadow-sm z-10">
                {/* Row 1: Navigation & Name & Theme Toggle */}
                <div className="flex items-center justify-between px-3 py-2 md:px-6">
                    <button 
                        onClick={onBackToHome}
                        className="p-2 -ml-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors rounded-full hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary"
                        aria-label="Back to home"
                    >
                        <BackIcon />
                    </button>
                    
                    <h1 className="text-base md:text-lg font-bold text-light-text-primary dark:text-dark-text-primary truncate font-heading flex-1 text-center px-2">
                        Achievements
                    </h1>

                    <ThemeToggle />
                </div>

                 {/* Row 2: Language Selector & Social Contacts */}
                <div className="flex items-center justify-center gap-4 pb-2.5 pt-0.5 text-light-text-secondary dark:text-dark-text-secondary px-4 overflow-x-auto">
                    <LanguageSelector />
                    <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-1"></div>
                    <div className="flex gap-6 flex-shrink-0">
                        <a href={`mailto:${cvData.header.email}`} className="hover:text-brand-primary transition-colors"><MailIcon /></a>
                        <a href={cvData.header.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><LinkedInIcon /></a>
                        <a href={cvData.header.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><GitHubIcon /></a>
                        <a href={cvData.header.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><TwitterIcon /></a>
                    </div>
                </div>
            </div>

            {/* Gallery Content */}
            <div className="flex-grow flex flex-col items-center justify-center p-4 overflow-hidden relative">
                
                <div className="relative w-full max-w-3xl h-[70vh] flex flex-col bg-white dark:bg-dark-bg-tertiary rounded-2xl shadow-xl overflow-hidden border border-light-bg-tertiary dark:border-dark-bg-secondary">
                    
                    {/* Image Container */}
                    <div className="flex-grow relative bg-black/5 dark:bg-black/20 overflow-hidden group flex items-center justify-center">
                         {/* Navigation Overlay Buttons (Desktop) */}
                        <button 
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 text-brand-primary hover:bg-white dark:hover:bg-black/70 transition-all z-10 backdrop-blur-sm shadow-lg"
                        >
                            <ChevronLeftIcon />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 text-brand-primary hover:bg-white dark:hover:bg-black/70 transition-all z-10 backdrop-blur-sm shadow-lg"
                        >
                            <ChevronRightIcon />
                        </button>

                        {!imageError ? (
                            <img 
                                key={currentIndex}
                                src={achievements[currentIndex].imageUrl} 
                                alt={achievements[currentIndex].title} 
                                className="w-full h-full object-contain animate-fade-in"
                                onError={() => setImageError(true)}
                                referrerPolicy="no-referrer"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                                <FallbackIcon />
                                <p className="mt-4 text-lg font-semibold text-light-text-secondary dark:text-dark-text-secondary">
                                    Image not available
                                </p>
                                <p className="text-xs text-gray-400 mt-1 max-w-xs">
                                    Ensure assets are uploaded to GitHub.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Text Content */}
                    <div className="p-6 bg-white dark:bg-dark-bg-tertiary">
                         <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold tracking-wider uppercase text-brand-primary">
                                {currentIndex + 1} / {achievements.length}
                            </span>
                         </div>
                        <h2 className="text-xl md:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2 font-heading">
                            {achievements[currentIndex].title}
                        </h2>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm md:text-base leading-relaxed">
                            {achievements[currentIndex].description}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
