"use client";
import { useState, useEffect } from "react";

export default function useSessionIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setTimeout(() => setShowIntro(false), 0);
    }
  }, []);

  const finishIntro = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  return { showIntro, finishIntro };
}
