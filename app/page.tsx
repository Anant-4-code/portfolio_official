import { HeroSection } from "@/components/sections/home/HeroSection";
import { MetricStrip } from "@/components/sections/home/MetricStrip";
import { FeaturedWorkSection } from "@/components/sections/home/FeaturedWorkSection";
import { ToolsExperienceSection } from "@/components/sections/home/ToolsExperienceSection";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <HeroSection />
      <MetricStrip />
      <FeaturedWorkSection />
      <ToolsExperienceSection />
    </div>
  );
}

