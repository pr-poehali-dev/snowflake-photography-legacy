import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import SnowflakeGallery from "@/components/SnowflakeGallery";
import ComparisonSection from "@/components/ComparisonSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <HeroSection />
      <BiographySection />
      <SnowflakeGallery />
      <ComparisonSection />
    </div>
  );
};

export default Index;
