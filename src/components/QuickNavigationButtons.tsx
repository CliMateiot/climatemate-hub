
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, Thermometer, Users, BookOpen } from 'lucide-react';

const QuickNavigationButtons = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
        {/* Logo image on the left of "Features" button */}
        <img
          src="/lovable-uploads/cc1b183b-792f-49b1-968e-a166f238f531.png"
          alt="Cliamte-IoT Logo"
          className="h-6 md:h-8 mr-2 object-contain"
          loading="lazy"
        />
        <Button
          variant="ghost"
          className="flex items-center gap-1 text-sm h-8"
          onClick={() => scrollToSection('solutions')}
        >
          <Thermometer className="h-3 w-3" />
          <span>Features</span>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-1 text-sm h-8"
          onClick={() => scrollToSection('industries')}
        >
          <Users className="h-3 w-3" />
          <span>Solutions</span>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-1 text-sm h-8"
          onClick={() => scrollToSection('vision')}
        >
          <Info className="h-3 w-3" />
          <span>Vision</span>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center gap-1 text-sm h-8"
          onClick={() => scrollToSection('blog')}
        >
          <BookOpen className="h-3 w-3" />
          <span>Blog</span>
        </Button>
      </div>
    </div>
  );
};

export default QuickNavigationButtons;
