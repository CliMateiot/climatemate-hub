
const VisionSection = () => {
  return (
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
  );
};

export default VisionSection;
