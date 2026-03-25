"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Numeros from "@/components/sections/Numeros";
import Manifesto from "@/components/sections/Manifesto";
import Cases from "@/components/sections/Cases";
import OQueEuFaco from "@/components/sections/OQueEuFaco";
import Sobre from "@/components/sections/Sobre";
import ServicosPrecos from "@/components/sections/ServicosPrecos";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />
      {splashDone && (
        <>
          <Navbar />
          <Hero />
          <Numeros />
          <Manifesto />
          <Cases />
          <OQueEuFaco />
          <Sobre />
          <ServicosPrecos />
          <FAQ />
          <CTAFinal />
          <Footer />
        </>
      )}
    </>
  );
}
