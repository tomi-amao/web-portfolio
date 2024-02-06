import { useEffect } from "react";

export default function calcScreenSize(SetIsWideScreen) {
  useEffect(() => {
    const checkScreenwidth = () => {
      const screenWidth = window.innerWidth;
      const thresholdWidth = 1024;
      SetIsWideScreen(screenWidth >= thresholdWidth);
    };
    checkScreenwidth();
    window.addEventListener("resize", checkScreenwidth); // call checkscreen width everytime the window is reszized
    return () => {
      window.removeEventListener("resize", checkScreenwidth); //cleanup removes the event listtener added to ensure listner is no longer active
    };
  }, []);
}
