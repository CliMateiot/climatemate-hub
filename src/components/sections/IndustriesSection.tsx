
const IndustriesSection = () => {
  return (
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
  );
};

export default IndustriesSection;
