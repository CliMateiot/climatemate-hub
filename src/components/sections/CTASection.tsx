
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const CTASection = () => {
  const [open, setOpen] = useState(false);
  
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
      
      {/* Privacy Policy dialog instead of link */}
      <div className="w-full text-center py-3 mt-8 border-t border-white/10">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="text-sm text-white hover:underline font-medium">
              Privacy Policy
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold mb-6 text-primary">CliMate Privacy Policy</DialogTitle>
            </DialogHeader>
            <DialogDescription className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  CliMate ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our IoT services, website, and related applications (collectively, the "Services").
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-lg font-medium mb-2">2.1 Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  We may collect personal information that you voluntarily provide when using our Services, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Contact information (name, email address, phone number, postal address)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Company information and business details</li>
                  <li>Payment information (processed through secure third-party payment processors)</li>
                </ul>

                <h3 className="text-lg font-medium mb-2">2.2 Device and IoT Data</h3>
                <p className="text-muted-foreground mb-4">
                  When you use our IoT services, we collect data from connected devices, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Device identifiers and technical information</li>
                  <li>Usage data and operational statistics</li>
                  <li>Sensor readings and telemetry data</li>
                  <li>Location data (where applicable and with permission)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the collected information for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Providing, maintaining, and improving our Services</li>
                  <li>Processing transactions and managing your account</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Detecting, preventing, and addressing technical issues</li>
                  <li>Communicating with you about updates, features, or support</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With service providers who help us deliver our Services</li>
                  <li>To comply with legal requirements or respond to lawful requests</li>
                  <li>In connection with a business transaction (merger, acquisition, or sale)</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  CliMate implements appropriate technical and organizational measures to protect your information from unauthorized access, loss, or alteration. However, no data transmission or storage system is 100% secure, and we cannot guarantee absolute security of your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Your Rights and Choices</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access, correct, or delete your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability (receiving your data in a structured format)</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws different from your country. We take appropriate safeguards to ensure that your information remains protected in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us.
                </p>
              </section>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CTASection;
