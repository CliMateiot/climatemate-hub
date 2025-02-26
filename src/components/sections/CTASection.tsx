
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const handleContactClick = () => {
    // Trigger chat box to open
    const chatBoxButton = document.querySelector('.chat-toggle-button') as HTMLButtonElement;
    if (chatBoxButton) {
      chatBoxButton.click();
    }
  };

  return (
    <section className="py-24 bg-primary text-white relative">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Air Conditioner?</h2>
        <div className="flex justify-center mb-12">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg"
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </div>
        
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-4">CliMate Smart Home Solutions</h3>
          <p className="text-white/80">
            Transform your home into a smart living space without expensive renovations or replacements.
            Our affordable adapters make existing appliances smarter, starting with your air conditioner.
          </p>
        </div>
      </div>
      
      {/* Privacy Policy link at the bottom of the page */}
      <div className="w-full text-center py-3 mt-8 border-t border-white/10">
        <a 
          href="/privacy" 
          className="text-sm text-white hover:underline font-medium"
        >
          Privacy Policy
        </a>
      </div>
    </section>
  );
};

export default CTASection;
