import { ResearchHero } from "@/components/sections/research/ResearchHero";
import { ResearchHighlightSection } from "@/components/sections/research/ResearchHighlightSection";
import { HackathonSection } from "@/components/sections/research/HackathonSection";
import { OngoingSection } from "@/components/sections/research/OngoingSection";

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <ResearchHero />
      <ResearchHighlightSection />
      <HackathonSection />
      <OngoingSection />
    </div>
  );
}

