
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/sections/FeaturesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CTASection from "@/components/sections/CTASection";
import BlogSection from "@/components/sections/BlogSection";
import VisionSection from "@/components/sections/VisionSection";
import ChatBox from "@/components/ChatBox";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="CliMate: because making your home smart is cooler"
        subtitle="Transform your air conditioner into a smart device with our affordable, easy-to-install adapter. Control temperature, set schedules, and save energy from your smartphone."
        ctaText="Get Started"
        ctaLink="#chat"
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Blog Section */}
      <BlogSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Chat Box Component */}
      <ChatBox />
    </div>
  );
};

export default Index;
