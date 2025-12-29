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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger , ScrollSmoother);
export default function Home() {

    useGSAP(()=>{
    ScrollSmoother.create({
      smooth:3,
      effects:true
    })
  })

  return (
  <section>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div id="smooth-wrapper" className="pt-[80px] ">
        <div id="smooth-content">
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
