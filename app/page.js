import AboutMe from "@/components/about-me/about-me";
import Career from "@/components/career/career";
import Contact from "@/components/contact/contact";
import Greeting from "@/components/hero/greeting";
import MainNavigation from "@/components/layout/main-navigation";
import Projects from "@/components/projects/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <Greeting />
      <AboutMe />
      <Projects />
      <Career />
      <Contact />
    </>
  );
}
