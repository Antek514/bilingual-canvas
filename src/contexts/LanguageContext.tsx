import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
    
    // Home page
    hero_title: 'Modern Developer Portfolio',
    hero_subtitle: 'Creating innovative solutions with cutting-edge technologies',
    hero_description: 'I\'m a passionate developer focused on building exceptional digital experiences. With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.',
    my_projects: 'My Projects',
    
    // Projects page
    projects_title: 'Featured Projects',
    projects_subtitle: 'Explore my latest work and technical achievements',
    discord_server: 'Discord Server Management',
    web_application: 'Web Application Dashboard',
    mobile_app: 'Mobile Portfolio App',
    
    // Contact page
    contact_title: 'Get In Touch',
    contact_subtitle: 'Let\'s discuss your next project',
    email_me: 'Email Me',
    call_me: 'Call Me',
    add_me: 'Add Me',
    
    // UI elements
    close: 'Close',
    view_project: 'View Project',
    
    // Theme toggle
    dark_mode: 'Dark Mode',
    light_mode: 'Light Mode',
  },
  pl: {
    // Navigation
    home: 'Strona główna',
    projects: 'Projekty',
    contact: 'Kontakt',
    
    // Home page
    hero_title: 'Nowoczesne Portfolio Developera',
    hero_subtitle: 'Tworzę innowacyjne rozwiązania z najnowszymi technologiami',
    hero_description: 'Jestem pasjonatem programowania skupionym na budowaniu wyjątkowych doświadczeń cyfrowych. Dzięki ekspertyzie w nowoczesnych technologiach webowych, wcielam pomysły w życie poprzez czysty kod i intuicyjny design.',
    my_projects: 'Moje Projekty',
    
    // Projects page
    projects_title: 'Wybrane Projekty',
    projects_subtitle: 'Poznaj moje najnowsze prace i osiągnięcia techniczne',
    discord_server: 'Zarządzanie Serwerem Discord',
    web_application: 'Dashboard Aplikacji Webowej',
    mobile_app: 'Mobilna Aplikacja Portfolio',
    
    // Contact page
    contact_title: 'Skontaktuj się',
    contact_subtitle: 'Porozmawiajmy o Twoim następnym projekcie',
    email_me: 'Napisz do mnie',
    call_me: 'Zadzwoń',
    add_me: 'Dodaj mnie',
    
    // UI elements
    close: 'Zamknij',
    view_project: 'Zobacz projekt',
    
    // Theme toggle
    dark_mode: 'Tryb ciemny',
    light_mode: 'Tryb jasny',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};