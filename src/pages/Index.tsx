
import { ArrowRight, BarChart2, Cloud, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "@/components/Hero";
import ChatBox from "@/components/ChatBox";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="CliMate: Smart IoT Solutions for a Connected World"
        subtitle="Providing cutting-edge IoT technology that helps businesses monitor, analyze, and optimize their operations in real-time."
        ctaText="Contact Us"
        ctaLink="/contact"
        imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Features Section */}
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

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">CliMate Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CliMate's IoT solutions are tailored to meet the unique needs of various industries, delivering measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Industry Card 1 */}
            <div className="relative overflow-hidden rounded-lg h-64 group hover-scale shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1565108391729-a55b5728ecad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Manufacturing" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Manufacturing</h3>
                <p className="text-white/80 mb-4">Optimize production processes and reduce downtime with CliMate</p>
              </div>
            </div>

            {/* Industry Card 2 */}
            <div className="relative overflow-hidden rounded-lg h-64 group hover-scale shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthcare" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
                <p className="text-white/80 mb-4">Enhance patient care with CliMate's IoT monitoring solutions</p>
              </div>
            </div>

            {/* Industry Card 3 */}
            <div className="relative overflow-hidden rounded-lg h-64 group hover-scale shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Agriculture" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Agriculture</h3>
                <p className="text-white/80 mb-4">CliMate helps you monitor crops and automate irrigation systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Removed "Request Demo" button */}
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

      {/* Blog Section with Real Content */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">CliMate Insights</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
              <p className="text-muted-foreground max-w-2xl">
                Stay updated with the latest trends and innovations in the IoT industry from CliMate experts.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary/10" asChild>
              <a href="/blog">View All Posts</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog 1: Real Content */}
            <Card className="overflow-hidden hover-scale shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="The Future of IoT in Smart Cities" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">June 3, 2023 • IoT Development</div>
                <h3 className="text-xl font-bold mb-2">The Future of IoT in Smart Cities</h3>
                <p className="text-muted-foreground mb-4">
                  Smart cities represent one of the most transformative applications of IoT technology. From traffic management to waste collection, IoT sensors are creating more efficient urban environments.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="/blog/future-of-iot-in-smart-cities" className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Blog 2: Real Content */}
            <Card className="overflow-hidden hover-scale shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563770660941-10a63261de61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Security Challenges in IoT" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">May 17, 2023 • Security</div>
                <h3 className="text-xl font-bold mb-2">Addressing Security Challenges in IoT Networks</h3>
                <p className="text-muted-foreground mb-4">
                  As IoT networks expand, so do security concerns. Learn about the latest encryption protocols and security measures that CliMate implements to protect your connected devices.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="/blog/security-challenges-in-iot" className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Blog 3: Real Content */}
            <Card className="overflow-hidden hover-scale shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580982327559-c1c2ac94d310?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="AI and IoT Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">April 22, 2023 • Innovation</div>
                <h3 className="text-xl font-bold mb-2">Integrating AI with IoT: The Next Frontier</h3>
                <p className="text-muted-foreground mb-4">
                  The combination of artificial intelligence and IoT is creating unprecedented opportunities for businesses. Discover how CliMate is leading this integration to deliver predictive insights.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="/blog/ai-iot-integration" className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* New Vision Section - Replacing previous Startup Section */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Vision</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pioneering Innovation in IoT Technology</h2>
              <p className="text-muted-foreground mb-6">
                CliMate is on a mission to revolutionize how businesses interact with connected devices. We're building the next generation of IoT solutions that are accessible, powerful, and built with purpose.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="h-3 w-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Focused Innovation:</span> Dedicated to creating solutions that solve real-world problems
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="h-3 w-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Future-Ready Platform:</span> Built with scalability and adaptability at its core
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="h-3 w-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Strategic Partnerships:</span> Collaborating with industry leaders to expand capabilities
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="h-3 w-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Sustainable Technology:</span> Creating IoT solutions with minimal environmental impact
                  </p>
                </div>
              </div>
              
              <Button className="mt-8 group" asChild>
                <a href="/about">
                  Learn More About Our Vision <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-primary/5 rounded-2xl p-6 md:p-8 relative z-10">
                <h3 className="text-xl font-semibold mb-6">How We're Growing</h3>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="font-semibold">1</span>
                      </div>
                      <div className="h-full w-0.5 bg-primary/20 mx-auto mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Research & Development</h4>
                      <p className="text-sm text-muted-foreground mt-1">Investing in cutting-edge research to develop innovative IoT solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="font-semibold">2</span>
                      </div>
                      <div className="h-full w-0.5 bg-primary/20 mx-auto mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Platform Development</h4>
                      <p className="text-sm text-muted-foreground mt-1">Building a scalable, secure platform for IoT device management and analytics</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="font-semibold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Industry Solutions</h4>
                      <p className="text-sm text-muted-foreground mt-1">Developing targeted solutions for specific industry challenges and opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 h-24 w-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute bottom-12 left-12 h-32 w-32 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Box Component */}
      <ChatBox />
    </div>
  );
};

export default Index;
