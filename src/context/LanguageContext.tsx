import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Expert Legal Counsel for Decarbonization & German Business Expansion',
    'home.hero.subtitle': 'Specialized legal services for small companies and startups navigating the decarbonization transition and German companies expanding into the US market.',
    'home.hero.cta': 'Schedule Consultation',
    'home.services.title': 'Legal Services',
    'home.services.decarb.title': 'Decarbonization Law',
    'home.services.decarb.desc': 'Navigate complex environmental regulations and sustainability compliance requirements.',
    'home.services.german.title': 'German Business Expansion',
    'home.services.german.desc': 'Expert guidance for German companies establishing US operations and market entry.',
    'home.services.startup.title': 'Startup Legal Services',
    'home.services.startup.desc': 'Comprehensive legal support for emerging companies in the clean energy sector.',
    
    // About Page
    'about.title': 'About Brett E. Marston',
    'about.subtitle': 'Experienced Legal Counsel in Environmental Law and International Business',
    'about.bio': 'Brett E. Marston brings extensive experience in environmental law, corporate governance, and international business transactions. Based in Bethesda, Maryland, our practice specializes in supporting small companies and startups as they navigate the complex landscape of decarbonization initiatives and regulatory compliance.',
    'about.expertise.title': 'Areas of Expertise',
    'about.expertise.env': 'Environmental Compliance & Regulatory Affairs',
    'about.expertise.corp': 'Corporate Law & Business Formation',
    'about.expertise.intl': 'International Business Transactions',
    'about.expertise.clean': 'Clean Energy & Sustainability Law',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to discuss your legal needs? Get in touch today.',
    'contact.office': 'Office Information',
    'contact.attorney': 'Brett E. Marston, Esq.',
    'contact.address': 'Bethesda, Maryland',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    // Home Page
    'home.hero.title': 'Experte Rechtsberatung für Dekarbonisierung & Deutsche Geschäftserweiterung',
    'home.hero.subtitle': 'Spezialisierte Rechtsdienstleistungen für kleine Unternehmen und Startups bei der Dekarbonisierung und deutsche Unternehmen bei der US-Marktexpansion.',
    'home.hero.cta': 'Beratung vereinbaren',
    'home.services.title': 'Rechtsdienstleistungen',
    'home.services.decarb.title': 'Dekarbonisierungsrecht',
    'home.services.decarb.desc': 'Navigation durch komplexe Umweltvorschriften und Nachhaltigkeits-Compliance-Anforderungen.',
    'home.services.german.title': 'Deutsche Geschäftserweiterung',
    'home.services.german.desc': 'Expertenberatung für deutsche Unternehmen bei der Etablierung von US-Geschäften und Markteintritt.',
    'home.services.startup.title': 'Startup Rechtsdienstleistungen',
    'home.services.startup.desc': 'Umfassende Rechtsunterstützung für aufstrebende Unternehmen im Clean-Energy-Sektor.',
    
    // About Page
    'about.title': 'Über Brett E. Marston',
    'about.subtitle': 'Erfahrener Rechtsberater für Umweltrecht und Internationales Geschäft',
    'about.bio': 'Brett E. Marston bringt umfangreiche Erfahrung in Umweltrecht, Unternehmensführung und internationalen Geschäftstransaktionen mit. Unser Büro in Bethesda, Maryland, spezialisiert sich darauf, kleine Unternehmen und Startups bei der Navigation durch die komplexe Landschaft der Dekarbonisierungsinitiativen und Regulierungs-Compliance zu unterstützen.',
    'about.expertise.title': 'Fachgebiete',
    'about.expertise.env': 'Umwelt-Compliance & Regulierungsangelegenheiten',
    'about.expertise.corp': 'Unternehmensrecht & Geschäftsgründung',
    'about.expertise.intl': 'Internationale Geschäftstransaktionen',
    'about.expertise.clean': 'Clean Energy & Nachhaltigkeitsrecht',
    
    // Contact Page
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Bereit, Ihre rechtlichen Bedürfnisse zu besprechen? Kontaktieren Sie uns heute.',
    'contact.office': 'Büro-Informationen',
    'contact.attorney': 'Brett E. Marston, Rechtsanwalt',
    'contact.address': 'Bethesda, Maryland',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.form.title': 'Senden Sie uns eine Nachricht',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht senden',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
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