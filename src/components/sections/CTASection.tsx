
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with CliMate?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Contact our team today to learn how CliMate's IoT solutions can help your business thrive in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
