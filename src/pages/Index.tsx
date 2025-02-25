
import { ArrowRight, BarChart2, Cloud, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Smart IoT Solutions for a Connected World"
        subtitle="CliMate provides cutting-edge IoT technology that helps businesses monitor, analyze, and optimize their operations in real-time."
        ctaText="Explore Solutions"
        ctaLink="#solutions"
        imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Features Section */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IoT Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how our innovative IoT technologies can transform your business operations and drive efficiency across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="p-6 hover-scale">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Connectivity</h3>
              <p className="text-muted-foreground mb-4">
                Seamlessly connect your devices to our secure cloud platform for real-time data processing and storage.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/solutions/cloud-connectivity" className="flex items-center text-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>

            {/* Feature Card 2 */}
            <Card className="p-6 hover-scale">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Transform raw data into actionable insights with our advanced analytics and visualization tools.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/solutions/data-analytics" className="flex items-center text-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>

            {/* Feature Card 3 */}
            <Card className="p-6 hover-scale">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Protect your IoT infrastructure with our enterprise-grade security measures and compliance protocols.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/solutions/security" className="flex items-center text-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our IoT solutions are tailored to meet the unique needs of various industries, delivering measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industry Card 1 */}
            <div className="relative overflow-hidden rounded-lg h-64 group hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1565108391729-a55b5728ecad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Manufacturing" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Manufacturing</h3>
                <p className="text-white/80 mb-4">Optimize production processes and reduce downtime</p>
                <Button variant="outline" size="sm" className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Industry Card 2 */}
            <div className="relative overflow-hidden rounded-lg h-64 group hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthcare" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
                <p className="text-white/80 mb-4">Enhance patient care and streamline operations</p>
                <Button variant="outline" size="sm" className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Industry Card 3 */}
            <div className="relative overflow-hidden rounded-lg h-64 group hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Agriculture" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Agriculture</h3>
                <p className="text-white/80 mb-4">Monitor crops and automate irrigation systems</p>
                <Button variant="outline" size="sm" className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact our team today to learn how our IoT solutions can help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
              <p className="text-muted-foreground max-w-2xl">
                Stay updated with the latest trends and innovations in the IoT industry.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <a href="/blog">View All Posts</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="The Future of IoT" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">June 12, 2023</div>
                <h3 className="text-xl font-bold mb-2">The Future of IoT in Smart Cities</h3>
                <p className="text-muted-foreground mb-4">Exploring how IoT technologies are transforming urban environments...</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="/blog/future-of-iot" className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Blog Card 2 */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563770660941-10a63261de61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Data Security" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">May 28, 2023</div>
                <h3 className="text-xl font-bold mb-2">Enhancing Data Security in IoT Networks</h3>
                <p className="text-muted-foreground mb-4">Best practices for securing your IoT infrastructure against emerging threats...</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="/blog/data-security" className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Blog Card 3 */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580982327559-c1c2ac94d310?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="AI Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">April 15, 2023</div>
                <h3 className="text-xl font-bold mb-2">AI and IoT: A Powerful Combination</h3>
                <p className="text-muted-foreground mb-4">How artificial intelligence is enhancing IoT capabilities and driving innovation...</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="/blog/ai-and-iot" className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Clients Worldwide</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <p className="text-muted-foreground">Connected Devices</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Technical Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
