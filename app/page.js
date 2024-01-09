import AboutMe from "@/components/about-me/about-me";
import Career from "@/components/career/career";
import Contact from "@/components/contact/contact";
import MainNavigation from "@/components/layout/main-navigation";
import Projects from "@/components/projects/projects";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Career/>
      <Contact/>
    </>
  );
}
