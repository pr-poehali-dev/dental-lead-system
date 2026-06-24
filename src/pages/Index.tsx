import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SystemSection from '@/components/SystemSection';
import CasesSection from '@/components/CasesSection';
import ContactsSection from '@/components/ContactsSection';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <SystemSection scrollTo={scrollTo} />
      <CasesSection />
      <ContactsSection scrollTo={scrollTo} />
    </div>
  );
};

export default Index;
