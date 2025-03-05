
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
    <div className="container mx-auto py-6">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 shadow-sm hover:bg-primary/10 border-primary/20"
          onClick={() => scrollToSection('solutions')}
        >
          <Thermometer className="h-4 w-4" />
          <span>Features</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2 shadow-sm hover:bg-primary/10 border-primary/20"
          onClick={() => scrollToSection('industries')}
        >
          <Users className="h-4 w-4" />
          <span>Solutions</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2 shadow-sm hover:bg-primary/10 border-primary/20"
          onClick={() => scrollToSection('vision')}
        >
          <Info className="h-4 w-4" />
          <span>Vision</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2 shadow-sm hover:bg-primary/10 border-primary/20"
          onClick={() => scrollToSection('blog')}
        >
          <BookOpen className="h-4 w-4" />
          <span>Blog</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2 shadow-sm hover:bg-primary/10 border-primary/20"
          onClick={() => scrollToSection('chat')}
        >
          <MessageSquare className="h-4 w-4" />
          <span>Contact</span>
        </Button>
      </div>
    </div>
  );
};

export default QuickNavigationButtons;
