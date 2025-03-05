
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/sections/FeaturesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CTASection from "@/components/sections/CTASection";
import BlogSection from "@/components/sections/BlogSection";
import VisionSection from "@/components/sections/VisionSection";
import ChatBox from "@/components/ChatBox";
import QuickNavigationButtons from "@/components/QuickNavigationButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation at the top */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm py-2">
        <QuickNavigationButtons />
      </div>

      {/* Hero Section */}
      <Hero 
        title="CliMate: because making your home smart is cooler"
        subtitle="Transform your air conditioner into a smart device with an affordable, easy-to-install adapter. Control temperature, set schedules, and save energy from your smartphone."
        ctaText="Get Started"
        ctaLink="#chat"
      />

      {/* Features Section */}
      <div id="solutions">
        <FeaturesSection />
      </div>

      {/* Industries Section */}
      <div id="industries">
        <IndustriesSection />
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Blog Section */}
      <div id="blog">
        <BlogSection />
      </div>

      {/* Vision Section */}
      <div id="vision">
        <VisionSection />
      </div>

      {/* Chat Box Component */}
      <div id="chat">
        <ChatBox />
      </div>
    </div>
  );
};

export default Index;
