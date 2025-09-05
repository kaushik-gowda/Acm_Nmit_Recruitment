import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { LocalBenefits } from "@/components/sections/LocalBenefits";
import { RecruitmentDetails } from "@/components/sections/RecruitmentDetails";
import { GlobalBenefits } from "@/components/sections/GlobalBenefits";
import { OfficeBearers } from "@/components/sections/OfficeBearers";
import { JoinNow } from "@/components/sections/JoinNow";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <GlobalBenefits />
        <LocalBenefits />
        <RecruitmentDetails />
        <OfficeBearers />
        <JoinNow />
      </main>
      <Footer />
    </div>
  );
}
