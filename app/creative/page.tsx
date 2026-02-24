import { CreativeHero } from "@/components/sections/creative/CreativeHero";
import { VisualArtsSection } from "@/components/sections/creative/VisualArtsSection";
import { VideoSection } from "@/components/sections/creative/VideoSection";
import { GrowthSection } from "@/components/sections/creative/GrowthSection";

export default function CreativePage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <CreativeHero />
      <VisualArtsSection />
      <VideoSection />
      <GrowthSection />
    </div>
  );
}

