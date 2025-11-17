import React, { useState, useEffect } from 'react';
import { ChatAssistant } from './components/ChatAssistant';
import { FullCvView } from './components/FullCvView';
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

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState('English');
  const [isChatFullScreen, setIsChatFullScreen] = useState(false);
  const [viewMode, setViewMode] = useState<'chat' | 'cv'>('chat');
  
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

  const ChatView = () => (
    <>
      <main className="flex-grow flex flex-col items-center justify-start w-full p-4 md:p-6">
        {!isChatFullScreen && (
            <div className="text-center my-6 md:my-8">
             <img 
                src={cvData.header.imageUrl} 
                alt="Nilesh S. Khedkar" 
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-light-bg-secondary dark:border-dark-bg-secondary shadow-md object-cover" 
             />
            <h1 className="text-4xl md:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary font-heading">{cvData.header.name}</h1>
            <h2 className="text-xl md:text-2xl text-brand-primary font-semibold mt-2 font-heading">{cvData.header.title}</h2>
            <p className="max-w-3xl mx-auto mt-4 text-light-text-secondary dark:text-dark-text-secondary">
                I help organizations architect and execute AI-powered digital transformations that drive operational excellence and sustainable growth. Feel free to ask my AI assistant how my expertise in industrial AI and strategic leadership can deliver value for your team.
            </p>
            <div className="mt-6 flex justify-center gap-x-6 text-light-text-secondary dark:text-dark-text-secondary">
                <a href={`mailto:${cvData.header.email}`} className="hover:text-brand-primary transition-colors" aria-label="Email">
                <MailIcon />
                </a>
                <a href={cvData.header.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
                </a>
                <a href={cvData.header.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors" aria-label="GitHub">
                <GitHubIcon />
                </a>
                <a href={cvData.header.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors" aria-label="Twitter">
                 <TwitterIcon />
                </a>
            </div>
            </div>
        )}
        
        <div className={isChatFullScreen ? "fixed inset-0 z-50 bg-light-bg dark:bg-dark-bg" : "w-full flex-grow flex justify-center items-start pb-8"}>
            <ChatAssistant 
              language={language} 
              isFullScreen={isChatFullScreen} 
              setIsFullScreen={setIsChatFullScreen}
              onShowCv={() => setViewMode('cv')}
            />
        </div>

      </main>
      {!isChatFullScreen && (
        <footer className="text-center p-4 text-light-text-secondary dark:text-dark-text-secondary text-sm">
            <p>&copy; {new Date().getFullYear()} Nilesh S. Khedkar. All rights reserved.</p>
        </footer>
      )}
    </>
  );

  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen font-sans text-light-text-primary dark:text-dark-text-primary flex flex-col transition-colors duration-300">
      
      <header className="absolute top-0 right-0 p-4 md:p-6 flex items-center gap-4 z-20">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-bg-tertiary dark:border-dark-bg-tertiary rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
          aria-label="Select language"
        >
          {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
        </select>
        
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors" aria-label="Toggle theme">
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </header>
        
      {viewMode === 'chat' ? (
        <ChatView />
      ) : (
        <FullCvView data={cvData} onBackToChat={() => setViewMode('chat')} />
      )}
    </div>
  );
};

export default App;