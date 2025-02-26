
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
              <div className="text-sm text-muted-foreground mb-2">Connectivity</div>
              <h3 className="text-xl font-bold mb-2">How 5G Is Revolutionizing IoT Deployments</h3>
              <p className="text-muted-foreground mb-4">
                5G networks are delivering groundbreaking performance with speeds up to 10 Gbps and latency under 1ms, enabling real-time IoT applications previously impossible. The network slicing capability allows companies to create dedicated virtual networks for critical IoT operations, while massive Machine Type Communications (mMTC) supports connecting up to 1 million devices per square kilometer. Early industrial adopters have reported 40-55% efficiency improvements in manufacturing processes through ultra-reliable low-latency 5G IoT implementations. Private 5G networks are particularly transforming sectors like healthcare, where remote surgeries can now be performed with haptic feedback and smart city deployments where integrated traffic management has reduced congestion by up to 30% in pilot cities.
              </p>
            </div>
          </Card>

          {/* Blog 2: Edge Computing */}
          <Card className="overflow-hidden hover-scale shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/16c4ea73-93a0-496e-87d9-e8a555022441.png" 
                alt="Edge computing diagram showing IoT edge computing architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Technology</div>
              <h3 className="text-xl font-bold mb-2">Edge Computing: The Future of IoT Data Processing</h3>
              <p className="text-muted-foreground mb-4">
                Edge computing reduces IoT data latency by processing information within 1-5ms compared to 50-150ms with cloud solutions. This localized processing cuts bandwidth usage by up to 90% in industrial settings, where a single factory floor can generate over 1TB of data daily. Smart agriculture implementations using edge computing have achieved 60% water conservation while maintaining crop yields. Edge AI capabilities enable autonomous decision-making without internet connectivity, with autonomous vehicles utilizing edge computing to process 1TB of sensor data per hour without cloud dependencies. In healthcare, edge computing supports emergency medical devices to function in connectivity dead zones, while in retail, on-premise edge processing of customer behavior allows for real-time inventory adjustments and personalized experiences while maintaining strict GDPR compliance by keeping sensitive data local.
              </p>
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
              <div className="text-sm text-muted-foreground mb-2">Innovation</div>
              <h3 className="text-xl font-bold mb-2">Quantum Computing's Impact on IoT Security</h3>
              <p className="text-muted-foreground mb-4">
                Quantum computing threatens current IoT security as Shor's algorithm running on a 4,000-qubit quantum computer could break RSA-2048 encryption in under 10 hours, while today's leading quantum computers operate at 433 qubits. Post-quantum cryptography algorithms like CRYSTALS-Kyber and Falcon are being standardized by NIST to replace vulnerable encryption methods. Quantum Key Distribution (QKD) provides theoretically unhackable security by using quantum entanglement to detect eavesdropping attempts. Financial institutions are leading IoT quantum security adoption with 35% already implementing quantum-resistant algorithms for transaction security. The quantum security transition carries an estimated global cost of $20 billion to update infrastructure, but could prevent over $2 trillion in potential cybercrime damages. Hybrid classical-quantum security systems currently offer the most practical protection for IoT networks, combining existing encryption with quantum-resistant algorithms during the transition period.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
