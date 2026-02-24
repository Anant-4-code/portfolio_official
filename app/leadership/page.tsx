import { LeadershipHero } from "@/components/sections/leadership/LeadershipHero";
import { LeadershipLayout } from "@/components/sections/leadership/LeadershipLayout";

export default function LeadershipPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <LeadershipHero />
      <LeadershipLayout />
    </div>
  );
}

