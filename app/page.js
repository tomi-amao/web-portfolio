"use client";
import AboutMe from "@/components/about-me/about-me";
import Career from "@/components/career/career";
import Contact from "@/components/contact/contact";
import MainNavigation from "@/components/layout/main-navigation";
import Projects from "@/components/projects/projects";
import AboutTest from "@/components/about-me/about-me-desktop";
import HeroDev from "@/components/hero/hero-dev";
import calcScreenSize from "@/utilities/calc-screensize";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <HeroDev />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
