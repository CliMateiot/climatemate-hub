
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  const handleContactClick = () => {
    // Trigger chat box to open
    const chatBoxButton = document.querySelector('.chat-toggle-button') as HTMLButtonElement;
    if (chatBoxButton) {
      chatBoxButton.click();
    }
  };

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with CliMate?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10"
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-4">CliMate IoT Solutions</h3>
        </div>
        
        <div className="mt-8">
          <Link 
            to="/privacy" 
            className="inline-block text-lg font-bold py-3 px-6 bg-white/10 hover:bg-white/20 rounded-md transition-colors border border-white/20"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
