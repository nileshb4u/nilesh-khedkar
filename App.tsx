import React, { useState, useEffect } from 'react';
import { ChatAssistant } from './components/ChatAssistant';
import { FullCvView } from './components/FullCvView';
import { AchievementsView } from './components/AchievementsView';
import { cvData } from './constants';


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

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2.586l-1.707 1.707A.996.996 0 0016 10v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6c0-.266.105-.52.293-.707L2.586 7.586A2 2 0 012 5z" />
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState('English');
  const [viewMode, setViewMode] = useState<'landing' | 'chat' | 'cv' | 'achievements'>('landing');
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const languages = ['English', 'Spanish', 'French', 'German', 'Hindi', 'Arabic', 'Japanese', 'Mandarin'];

  const ThemeToggle = () => (
    <button onClick={toggleTheme} className="p-1.5 rounded-full hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-light-text-primary dark:text-dark-text-primary" aria-label="Toggle theme">
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );

  const LanguageSelector = () => (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-bg-tertiary dark:border-dark-bg-tertiary rounded-md p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-light-text-primary dark:text-dark-text-primary cursor-pointer"
      aria-label="Select language"
    >
      {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
    </select>
  );

  const LandingView = () => (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Header Controls for Landing: Theme Toggle Only */}
        <header className="absolute top-0 right-0 p-4 md:p-6 z-20">
            <ThemeToggle />
        </header>

        <div className="max-w-md w-full flex flex-col items-center text-center space-y-6 md:space-y-8 z-10 mt-[-20px]">
            {/* Profile Section */}
            <div className="space-y-3 md:space-y-4">
                <div className="relative mx-auto inline-block">
                    <img 
                        src={cvData.header.imageUrl} 
                        alt="Nilesh S. Khedkar" 
                        className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white dark:border-dark-bg-secondary shadow-xl object-cover" 
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-white dark:border-dark-bg rounded-full"></div>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary font-heading leading-tight tracking-tight">{cvData.header.name}</h1>
                    <h2 className="text-lg md:text-2xl text-brand-primary font-semibold mt-1 font-heading">{cvData.header.title}</h2>
                </div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm md:text-base max-w-xs md:max-w-lg mx-auto leading-relaxed px-4">
                    Architecting AI-powered digital transformations for enterprise operations.
                </p>
            </div>

            {/* Language Selector & Social Icons - Grouped together */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-light-text-secondary dark:text-dark-text-secondary py-2">
                <LanguageSelector />
                <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
                <div className="flex gap-6">
                    <a href={`mailto:${cvData.header.email}`} className="hover:text-brand-primary transition-colors transform hover:scale-110"><MailIcon /></a>
                    <a href={cvData.header.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors transform hover:scale-110"><LinkedInIcon /></a>
                    <a href={cvData.header.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors transform hover:scale-110"><GitHubIcon /></a>
                    <a href={cvData.header.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors transform hover:scale-110"><TwitterIcon /></a>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col w-full gap-3 px-4">
                <button 
                    onClick={() => setViewMode('chat')}
                    className="w-full flex items-center justify-center px-6 py-4 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-bold text-lg"
                >
                    <ChatIcon />
                    Talk to my AI Assistant
                </button>
                
                <button 
                    onClick={() => setViewMode('achievements')}
                    className="w-full flex items-center justify-center px-4 py-3 bg-white dark:bg-dark-bg-secondary border border-brand-light/50 dark:border-brand-secondary/50 text-brand-secondary dark:text-brand-light rounded-xl hover:bg-orange-50 dark:hover:bg-dark-bg-tertiary transition-colors font-bold shadow-sm text-base md:text-lg"
                >
                    <TrophyIcon />
                    View Achievements
                </button>

                <div className="grid grid-cols-2 gap-3">
                    <button 
                        onClick={() => setViewMode('cv')}
                        className="flex items-center justify-center px-4 py-3 bg-white dark:bg-dark-bg-secondary border border-light-bg-tertiary dark:border-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-xl hover:bg-orange-50 dark:hover:bg-dark-bg-tertiary transition-colors font-medium shadow-sm text-sm md:text-base"
                    >
                        <DocumentIcon />
                        View Full CV
                    </button>
                    <a 
                        href={cvData.header.cvPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-3 bg-white dark:bg-dark-bg-secondary border border-light-bg-tertiary dark:border-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-xl hover:bg-orange-50 dark:hover:bg-dark-bg-tertiary transition-colors font-medium shadow-sm text-sm md:text-base"
                    >
                        <DownloadIcon />
                        Download PDF
                    </a>
                </div>
            </div>
        </div>

        <footer className="absolute bottom-4 text-center text-xs text-light-text-secondary dark:text-dark-text-secondary opacity-60">
            <p>&copy; {new Date().getFullYear()} Nilesh S. Khedkar.</p>
        </footer>
    </main>
  );

  const ChatView = () => (
    <main className="flex flex-col h-screen w-full bg-light-bg dark:bg-dark-bg">
        {/* Minimalist 2-Row Header */}
        <div className="flex-shrink-0 bg-white dark:bg-dark-bg-secondary border-b border-light-bg-tertiary dark:border-dark-bg-tertiary shadow-sm z-10">
            {/* Row 1: Navigation & Name & Theme Toggle */}
            <div className="flex items-center justify-between px-3 py-2 md:px-6">
                <button 
                    onClick={() => setViewMode('landing')}
                    className="p-2 -ml-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors rounded-full hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary"
                    aria-label="Back to home"
                >
                    <BackIcon />
                </button>
                
                <h1 className="text-base md:text-lg font-bold text-light-text-primary dark:text-dark-text-primary truncate font-heading flex-1 text-center px-2">
                    {cvData.header.name}
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

        {/* Full Page Chat */}
        <div className="flex-grow overflow-hidden relative">
             <ChatAssistant 
              language={language} 
              onShowCv={() => setViewMode('cv')}
            />
        </div>
    </main>
  );

  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen font-sans text-light-text-primary dark:text-dark-text-primary transition-colors duration-300 overflow-hidden">
      {viewMode === 'landing' && <LandingView />}
      {viewMode === 'chat' && <ChatView />}
      {viewMode === 'achievements' && (
          <AchievementsView 
            achievements={cvData.achievements} 
            onBackToHome={() => setViewMode('landing')}
            ThemeToggle={ThemeToggle}
            LanguageSelector={LanguageSelector}
          />
      )}
      {viewMode === 'cv' && (
        <div className="h-screen overflow-y-auto">
             <div className="absolute top-4 right-4 z-50 flex gap-2">
                 <LanguageSelector />
                 <ThemeToggle />
            </div>
            <FullCvView data={cvData} onBackToChat={() => setViewMode('landing')} />
        </div>
      )}
    </div>
  );
};

export default App;