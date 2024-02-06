import { useMotionValueEvent, useScroll } from "framer-motion";

export default function calcScrollY() {
  const { scrollY } = useScroll();
  let scrollPosition = 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    scrollPosition = latest;
  });
  return scrollPosition;
}
