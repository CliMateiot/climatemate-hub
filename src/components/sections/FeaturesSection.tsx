
import { BarChart2, Cloud, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">CliMate Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IoT Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how CliMate's innovative IoT technologies can transform your business operations and drive efficiency across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Card className="p-6 hover-scale border-l-4 border-l-primary shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Cloud Connectivity</h3>
            <p className="text-muted-foreground mb-4">
              Seamlessly connect your devices to CliMate's secure cloud platform for real-time data processing and storage.
            </p>
          </Card>

          {/* Feature Card 2 */}
          <Card className="p-6 hover-scale border-l-4 border-l-primary shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
            <p className="text-muted-foreground mb-4">
              Transform raw data into actionable insights with CliMate's advanced analytics and visualization tools.
            </p>
          </Card>

          {/* Feature Card 3 */}
          <Card className="p-6 hover-scale border-l-4 border-l-primary shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Security Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Protect your IoT infrastructure with CliMate's enterprise-grade security measures and compliance protocols.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
