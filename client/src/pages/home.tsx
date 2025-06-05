import { useState, useEffect } from "react";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    // ✅ Set tab title dynamically in Vite/React
    document.title = "WebAksh | Raipur CG";

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      {isLoading && <Loader />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}
