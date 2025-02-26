
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
        title="CliMate: Smart IoT Solutions for a Connected World"
        subtitle="Providing cutting-edge IoT technology that helps businesses monitor, analyze, and optimize their operations in real-time."
        ctaText="Contact Us"
        ctaLink="#chat"
        imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
