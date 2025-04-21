
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
    <div className="container mx-auto px-0"> {/* remove horizontal padding */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 py-2"> {/* justify-center for horizontal centering with top spacing */}
        {/* Logo image on the far left top of page but outside button group */}
        <img
          src="/lovable-uploads/cc1b183b-792f-49b1-968e-a166f238f531.png"
          alt="Climate-IoT Logo"
          className="absolute top-2 left-4 h-8 md:h-10 object-contain"
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
