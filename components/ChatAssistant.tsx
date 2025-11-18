import React, { useState, useRef, useEffect, useCallback } from 'react';
import { initializeChat, getChatResponse } from '../services/geminiService';
import { getGreeting, cvData } from '../constants';
import type { ChatMessage } from '../types';

interface ChatAssistantProps {
    language: string;
    onShowCv: () => void;
}

const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

const AssistantIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-.293-.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
    </svg>
);

const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

// Renders text with simple markdown (bold and unordered lists)
const renderFormattedText = (text: string): React.ReactElement => {
    const lines = text.split('\n');
    const elements: React.ReactElement[] = [];
    let listItems: string[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            elements.push(
                <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-1 mt-2">
                    {listItems.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line) => {
        const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        if (formattedLine.trim().startsWith('* ')) {
            listItems.push(formattedLine.trim().substring(2));
        } else {
            flushList();
            if (line.trim()) {
                 elements.push(
                    <p 
                        key={`p-${elements.length}`} 
                        className={elements.length > 0 ? 'mt-2' : ''} 
                        dangerouslySetInnerHTML={{ __html: formattedLine }} 
                    />
                );
            }
        }
    });

    flushList();

    return <>{elements}</>;
};


export const ChatAssistant: React.FC<ChatAssistantProps> = ({ language, onShowCv }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const chatService = useRef<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScroll = (direction: 'up' | 'down') => {
        if(scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientHeight * 0.8;
            scrollContainerRef.current.scrollBy({
                top: direction === 'down' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        setTimeout(scrollToBottom, 100);
    }, [messages, isLoading]);

    // Re-initialize chat when language changes
    useEffect(() => {
        const initialize = () => {
            setIsLoading(true);
            setError(null);

            if (!process.env.API_KEY) {
                setError("The AI assistant is not configured. An API key is required to enable chat functionality.");
                setIsLoading(false);
                setMessages([]);
                return;
            }

            try {
                // Initialize synchronously
                chatService.current = initializeChat(language);
                // Set static greeting
                setMessages([{ role: 'model', text: getGreeting(language) }]);
            } catch (err) {
                setError("Failed to initialize AI assistant. Please check your API key and refresh.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        initialize();
    }, [language]);

    const sendMessage = useCallback(async (messageText: string) => {
        if (!messageText.trim() || isLoading || !chatService.current) return;
        
        setIsLoading(true);
        setError(null);
        setMessages(prev => [...prev, { role: 'user', text: messageText }]);
        
        try {
            const responseText = await getChatResponse(chatService.current, messageText);
            setMessages(prev => [...prev, { role: 'model', text: responseText }]);
        } catch (err) {
            const errorMessage = "Sorry, I encountered an error. It's possible the API key is invalid or the request was blocked. Please try again.";
            setError(errorMessage);
            setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
        setInput('');
    };

    const handleSuggestionClick = (suggestion: string) => {
      setInput(suggestion);
      sendMessage(suggestion);
      setInput('');
    };

    const suggestions = [
      "What is your key expertise?",
      "Tell me about the MAHER project.",
      "What is your experience with GenAI?",
      "Summarize your role at Saudi Aramco."
    ];
    
    // Simplified container that takes full height/width of parent
    const containerClasses = "flex flex-col h-full w-full bg-light-bg dark:bg-dark-bg transition-colors duration-300";

    return (
        <div className={containerClasses}>
            <div className="flex-1 flex flex-col min-h-0 relative">
                <div ref={scrollContainerRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth no-scrollbar">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'model' && (
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center border border-blue-200 dark:border-blue-900">
                                   <AssistantIcon />
                                </div>
                            )}
                            <div className={`max-w-[85%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-brand-secondary text-white rounded-br-none' : 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-bl-none'}`}>
                                <div className="text-sm">
                                  {msg.role === 'user' ? msg.text : renderFormattedText(msg.text)}
                                </div>
                            </div>
                             {msg.role === 'user' && (
                                <div className="flex-shrink-0 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                                   <UserIcon />
                                </div>
                            )}
                        </div>
                    ))}

                    {messages.length === 1 && !isLoading && (
                       <div className="flex items-start gap-3 w-full justify-start">
                         <div className="flex-shrink-0 w-8 h-8"></div>
                         <div className="flex flex-col sm:flex-row gap-2 mt-2">
                            <button
                                onClick={onShowCv}
                                className="px-4 py-2 text-sm font-medium text-brand-primary bg-blue-100 dark:bg-dark-bg-tertiary dark:text-dark-text-primary border border-transparent rounded-lg hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                View Full CV
                            </button>
                            <a
                                href={cvData.header.cvPdfUrl}
                                download="Nilesh_Khedkar_CV.pdf"
                                className="px-4 py-2 text-sm font-medium text-brand-primary bg-blue-100 dark:bg-dark-bg-tertiary dark:text-dark-text-primary border border-transparent rounded-lg hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors text-center"
                            >
                                Download PDF
                            </a>
                         </div>
                       </div>
                    )}

                    {isLoading && (
                         <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center border border-blue-200 dark:border-blue-900">
                                <AssistantIcon />
                            </div>
                            <div className="max-w-[85%] p-3 rounded-2xl bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-primary dark:text-dark-text-primary rounded-bl-none">
                               <div className="flex items-center space-x-1 h-5">
                                    <span className="w-2 h-2 bg-light-text-secondary dark:bg-dark-text-secondary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                    <span className="w-2 h-2 bg-light-text-secondary dark:bg-dark-text-secondary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                    <span className="w-2 h-2 bg-light-text-secondary dark:bg-dark-text-secondary rounded-full animate-pulse"></span>
                               </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                {/* Scroll buttons */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
                    <button onClick={() => handleScroll('up')} className="p-2 rounded-full bg-black bg-opacity-20 text-light-text-primary dark:text-dark-text-primary hover:bg-opacity-40 transition-all" aria-label="Scroll up">
                        <ChevronUpIcon />
                    </button>
                    <button onClick={() => handleScroll('down')} className="p-2 rounded-full bg-black bg-opacity-20 text-light-text-primary dark:text-dark-text-primary hover:bg-opacity-40 transition-all" aria-label="Scroll down">
                        <ChevronDownIcon />
                    </button>
                </div>
            </div>
            
            <div className="p-4 md:p-6 border-t border-light-bg-tertiary dark:border-dark-bg-tertiary bg-light-bg-secondary dark:bg-dark-bg-secondary">
                 {messages.length <= 1 && !isLoading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {suggestions.map(s => (
                        <button key={s} onClick={() => handleSuggestionClick(s)} className="text-left text-xs md:text-sm bg-light-bg-tertiary dark:bg-dark-bg-tertiary hover:bg-gray-200 dark:hover:bg-gray-600 p-2 md:p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-light">
                          <p className="font-medium text-light-text-primary dark:text-dark-text-primary truncate">{s}</p>
                        </button>
                      ))}
                    </div>
                )}
                {error && <p className="mb-2 text-sm text-red-600 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={error ? "Chat is disabled." : "Ask about my experience..."}
                        className="w-full pl-4 pr-12 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary text-light-text-primary dark:text-dark-text-primary disabled:cursor-not-allowed disabled:opacity-60 shadow-inner"
                        disabled={isLoading || !!error}
                        aria-label="Chat input"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim() || !!error}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-brand-primary text-white p-2 rounded-full disabled:bg-gray-400 hover:bg-brand-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                        aria-label="Send message"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};