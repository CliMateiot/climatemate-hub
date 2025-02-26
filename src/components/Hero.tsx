
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  showDecorations?: boolean;
}

const Hero = ({
  title,
  subtitle,
  ctaText = "Learn More",
  ctaLink = "#",
  imageUrl = "/lovable-uploads/496ee826-3c8c-43c1-8276-048e98f4247d.png",
  showDecorations = true,
}: HeroProps) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Trigger chat box to open
    const chatBoxButton = document.querySelector('.chat-toggle-button') as HTMLButtonElement;
    if (chatBoxButton) {
      chatBoxButton.click();
    }
  };

  return (
    <div className="relative overflow-hidden h-screen max-h-[800px] min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <img
          src={imageUrl}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* Decorative elements */}
      {showDecorations && (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </>
      )}

      {/* Content */}
      <div className="container relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Smart Home Upgrades
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance text-shadow-sm">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group"
              onClick={handleContactClick}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
