import { Hero } from "@/sections/home/Hero";
import { WhoWeAre } from "@/sections/home/WhoWeAre";
import { Services } from "@/sections/home/Services";
import { Work } from "@/sections/home/Work";
import { WhyUs } from "@/sections/home/WhyUs";
import { SocialProof } from "@/sections/home/SocialProof";
import { FinalCTA } from "@/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <Work />
      <WhyUs />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
