"use client"
import Banner from "@/components/Banner/Banner";
import CareProcess from "@/components/CareProcess/CareProcess";
import CountUpSection from "@/components/CountUP/CountUpSection";
import Footer from "@/components/Footer/Footer";
import HealthSolutions from "@/components/HealthSolutions/HealthSolutions";
import MedicalTeam from "@/components/MedicalTeam/MedicalTeam";
import MedicalTreatment from "@/components/MedicalTreatment/MedicalTreatment";
import Navbar from "@/components/Navbar/Navbar";
import ScrollingText from "@/components/ScrollingText/ScrollingText";


export default function Home() {
  return (
  <section>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div>
        <div className="pt-16">
          <Banner/>
          <HealthSolutions/>
          <CountUpSection />
          <MedicalTeam />
          <ScrollingText />
          <CareProcess />
          <MedicalTreatment />
          <Footer />
        </div>

      </div>
      
  </section>
  );
}
