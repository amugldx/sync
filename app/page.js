"use client";
import { useEffect, useState } from "react";
import useSessionIntro from "../hooks/useSessionIntro";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Orientation from "../components/growth";
import SystemDiagram from "../components/SystemDiagram";
import About from "../components/About";
import HowWeWork from "../components/HowWeWork";
import Pillars from "../components/Pillars";
import Modules from "../components/Modules";
import Diagnosis from "../components/Diagnosis";
import AnalysisForm from "../components/AnalysisForm";
import Footer from "../components/Footer";

export default function Home() {
  const { showIntro, finishIntro } = useSessionIntro();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-blue-200 text-white">
      {showIntro && <Intro onFinish={finishIntro} />}

      <Navbar visible={!showIntro && showNav} />

      <main>
        <Hero />
        <Orientation />
        <SystemDiagram />
        <About />
        <HowWeWork />
        <Pillars />
        <Diagnosis />
        <Modules />
        <AnalysisForm />
        <Footer />
      </main>
    </div>
  );
}
