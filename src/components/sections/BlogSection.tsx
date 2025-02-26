
import { Card } from "@/components/ui/card";

const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">CliMate Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Home Insights</h2>
            <p className="text-muted-foreground max-w-2xl">
              Learn how to make your home smarter, more comfortable, and energy efficient with our expert tips and guides.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog 1: AC Energy Saving */}
          <Card className="overflow-hidden hover-scale shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/a2c1fcd9-12dc-44c4-b6f8-c4e86a2ce19c.png" 
                alt="Energy efficiency security lock on keyboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Energy Efficiency</div>
              <h3 className="text-xl font-bold mb-2">10 Ways to Reduce Your AC Energy Consumption</h3>
              <p className="text-muted-foreground mb-4">
                Did you know that air conditioning can account for up to 50% of your summer electricity bill? Our CliMate adapter can help reduce this by intelligently managing your AC usage patterns. Studies show that smart thermostats save an average of 15% on cooling costs and up to 12% on heating costs annually. Beyond the financial benefits, optimizing your air conditioner's operation can extend its lifespan by reducing unnecessary strain. The CliMate adapter's smart scheduling feature learns your preferences and automatically adjusts your AC to run efficiently without sacrificing comfort. Users report not only saving money but also experiencing more consistent comfort throughout their homes. Plus, with remote operation capability, you'll never again waste energy cooling an empty house because you forgot to turn off the AC.
              </p>
            </div>
          </Card>

          {/* Blog 2: Smart Home for Renters */}
          <Card className="overflow-hidden hover-scale shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/a2c1fcd9-12dc-44c4-b6f8-c4e86a2ce19c.png" 
                alt="IoT edge computing diagram showing smart home connectivity" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Renter Solutions</div>
              <h3 className="text-xl font-bold mb-2">Smart Home Solutions for Renters: No Renovation Required</h3>
              <p className="text-muted-foreground mb-4">
                Renters face unique challenges when trying to create a smart home, with 83% reporting that installation restrictions are their biggest hurdle according to a recent housing survey. Traditional smart home implementations often require permanent modifications like replacing thermostats or rewiring, which most lease agreements prohibit. The CliMate adapter offers a perfect solution as it requires zero permanent modifications - it simply connects to your existing AC's infrared receiver, functioning like a universal smart remote. Installation takes less than 10 minutes and can be completely removed when you move, making it ideal for the average American who relocates every 5.9 years. Our adapter's compatibility with 93% of infrared-controlled air conditioners means you can take it with you to your next rental. Plus, with built-in Wi-Fi connectivity, there's no need for additional hubs or controllers, keeping your smart home setup clean and portable.
              </p>
            </div>
          </Card>

          {/* Blog 3: Smart Home Beginners */}
          <Card className="overflow-hidden hover-scale shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/a2c1fcd9-12dc-44c4-b6f8-c4e86a2ce19c.png" 
                alt="Technical diagrams and formulas representing smart home complexity" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Beginners Guide</div>
              <h3 className="text-xl font-bold mb-2">Smart Home for Beginners: Start with Your AC</h3>
              <p className="text-muted-foreground mb-4">
                For smart home beginners, the sheer variety of devices and ecosystems can be overwhelming, with over 40 different smart home standards currently competing in the market. A survey found that 67% of consumers cite complexity as the main reason they haven't adopted smart home technology. The CliMate adapter offers an ideal entry point with its plug-and-play simplicity that requires no technical expertise. Unlike comprehensive smart home systems that can cost upwards of $1,500 for basic functionality, our adapter provides immediate value for under $50. Starting with air conditioning makes practical sense as it represents both significant energy usage and comfort impact. The CliMate app walks first-time users through setup with clear visual guides, typically completing installation in under 5 minutes. Most importantly, our adapter is compatible with major voice assistants including Amazon Alexa, Google Assistant, and Apple HomeKit, allowing you to expand your smart home ecosystem at your own pace without being locked into a proprietary system.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
