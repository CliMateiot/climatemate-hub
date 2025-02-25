
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">CliMate Insights</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from IoT World</h2>
            <p className="text-muted-foreground max-w-2xl">
              Stay updated with the latest trends and innovations in the IoT industry from CliMate experts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog 1: 5G and IoT Revolution */}
          <Card className="overflow-hidden hover-scale shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="5G towers and IoT devices" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">May 15, 2023 • Connectivity</div>
              <h3 className="text-xl font-bold mb-2">How 5G Is Revolutionizing IoT Deployments</h3>
              <p className="text-muted-foreground mb-4">
                The rollout of 5G networks globally is transforming IoT capabilities with ultra-low latency and massive device connectivity. Learn how businesses are leveraging this technology for mission-critical applications.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/blog/5g-iot-revolution" className="flex items-center text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>

          {/* Blog 2: Edge Computing */}
          <Card className="overflow-hidden hover-scale shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1592664858934-30c404b88b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Edge computing servers" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">June 7, 2023 • Technology</div>
              <h3 className="text-xl font-bold mb-2">Edge Computing: The Future of IoT Data Processing</h3>
              <p className="text-muted-foreground mb-4">
                As IoT data volumes explode, edge computing is becoming essential for real-time processing and reduced bandwidth usage. Discover how CliMate's edge solutions are helping companies process data closer to the source.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/blog/edge-computing-iot" className="flex items-center text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>

          {/* Blog 3: Quantum Computing and IoT */}
          <Card className="overflow-hidden hover-scale shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Quantum computing visualization" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">April 28, 2023 • Innovation</div>
              <h3 className="text-xl font-bold mb-2">Quantum Computing's Impact on IoT Security</h3>
              <p className="text-muted-foreground mb-4">
                Quantum computing is poised to transform IoT security with unprecedented encryption capabilities. Learn about quantum-resistant algorithms and how early adopters are preparing their IoT infrastructure.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/blog/quantum-computing-iot-security" className="flex items-center text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
