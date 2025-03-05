
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, Thermometer, Users, BookOpen, MessageSquare } from 'lucide-react';

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
        
        <Button 
          variant="ghost" 
          className="flex items-center gap-1 text-sm h-8"
          onClick={() => scrollToSection('chat')}
        >
          <MessageSquare className="h-3 w-3" />
          <span>Contact</span>
        </Button>
      </div>
    </div>
  );
};

export default QuickNavigationButtons;
