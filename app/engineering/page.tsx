import { EngineeringHero } from "@/components/sections/engineering/EngineeringHero";
import { FullStackSection } from "@/components/sections/engineering/FullStackSection";
import { MobileSection } from "@/components/sections/engineering/MobileSection";
import { InternshipSection } from "@/components/sections/engineering/InternshipSection";

export default function EngineeringPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <EngineeringHero />
      <FullStackSection />
      <MobileSection />
      <InternshipSection />
    </div>
  );
}

