import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { scrollToSection } from "../utils/scrollToSection";
import SiteFooter from "../components/layout/SiteFooter";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import RfidSection from "../components/sections/RfidSection";
import CommunicationsSection from "../components/sections/CommunicationsSection";
import BigDataSection from "../components/sections/BigDataSection";
import ContactSection from "../components/sections/ContactSection";

export default function SinglePageApp() {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (id) scrollToSection(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <RfidSection />
        <CommunicationsSection />
        <BigDataSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
