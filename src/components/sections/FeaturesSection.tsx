
import { BatteryCharging, Smartphone, Thermometer } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">CliMate Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart AC Adapter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our innovative adapter transforms any standard air conditioner into a smart device, giving you control, comfort, and energy savings without replacing your existing unit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Card className="p-6 hover-scale border-l-4 border-l-primary shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Remote Control</h3>
            <p className="text-muted-foreground mb-4">
              Control your air conditioner from anywhere using our intuitive smartphone app. Adjust temperature, fan speed, and mode with a simple tap.
            </p>
          </Card>

          {/* Feature Card 2 */}
          <Card className="p-6 hover-scale border-l-4 border-l-primary shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Thermometer className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
            <p className="text-muted-foreground mb-4">
              Create custom cooling schedules that match your lifestyle. Set the perfect temperature for when you wake up, leave home, and return.
            </p>
          </Card>

          {/* Feature Card 3 */}
          <Card className="p-6 hover-scale border-l-4 border-l-primary shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <BatteryCharging className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Energy Savings</h3>
            <p className="text-muted-foreground mb-4">
              Reduce your energy consumption by up to 30% with intelligent temperature management and usage analytics that help optimize efficiency.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
