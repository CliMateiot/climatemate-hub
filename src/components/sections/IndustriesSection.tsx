
const IndustriesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">CliMate Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Home For Everyone</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our affordable smart home solutions are designed for everyone, regardless of technical expertise or budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution Card 1 */}
          <div className="relative overflow-hidden rounded-lg h-64 group hover-scale shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Apartment Living" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Apartment Dwellers</h3>
              <p className="text-white/80 mb-4">Perfect for renters who can't replace existing AC units but want smart features</p>
            </div>
          </div>

          {/* Solution Card 2 */}
          <div className="relative overflow-hidden rounded-lg h-64 group hover-scale shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Home Office" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Home Offices</h3>
              <p className="text-white/80 mb-4">Create the perfect working environment with precise temperature control</p>
            </div>
          </div>

          {/* Solution Card 3 */}
          <div className="relative overflow-hidden rounded-lg h-64 group hover-scale shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Energy Conscious" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Energy Conscious</h3>
              <p className="text-white/80 mb-4">Reduce your carbon footprint and save on utility bills with smart energy management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
