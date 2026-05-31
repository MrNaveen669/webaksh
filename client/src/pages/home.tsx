import { useState, useEffect } from "react";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import HowWeWork from "@/components/how-we-work";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import CostEstimator from "@/components/cost-estimator";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={`transition-opacity duration-700 ${isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Navigation />
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <HowWeWork />
        <About />
        <Testimonials />
        <CostEstimator />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}
