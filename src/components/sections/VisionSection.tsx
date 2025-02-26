
const VisionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making Smart Home Technology Accessible to Everyone</h2>
            <p className="text-muted-foreground mb-6">
              CliMate is on a mission to democratize smart home technology. We believe everyone deserves the comfort, convenience, and energy savings of a smart home without expensive renovations or replacements.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 bg-primary rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Affordable Innovation:</span> Creating smart home solutions that fit any budget
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 bg-primary rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Universal Compatibility:</span> Designed to work with existing home appliances
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 bg-primary rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">User-Friendly Design:</span> Simple enough for anyone to install and use
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 bg-primary rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Eco-Conscious Technology:</span> Reducing energy consumption and environmental impact
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-primary/5 rounded-2xl p-6 md:p-8 relative z-10">
              <h3 className="text-xl font-semibold mb-6">Our Product Roadmap</h3>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="font-semibold">1</span>
                    </div>
                    <div className="h-full w-0.5 bg-primary/20 mx-auto mt-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Smart AC Adapter</h4>
                    <p className="text-sm text-muted-foreground mt-1">Our first product transforms any air conditioner with a remote control into a smart device</p>
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
                    <h4 className="font-medium">Smart Lighting Expansion</h4>
                    <p className="text-sm text-muted-foreground mt-1">Adapters for existing lamps and light fixtures to add smart lighting without replacing bulbs</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Complete Home Integration</h4>
                    <p className="text-sm text-muted-foreground mt-1">Unified app to control all your CliMate-enabled devices with custom automation routines</p>
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
