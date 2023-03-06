import { useRef } from "react";
import { useInView } from "framer-motion";
// import "./styles.css";

type Props ={
  children: string
}

function Section({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translatey(200px)",
          opacity: isInView ? 1 : 0,
          
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function AppTeste() {
  return (
    <>
      <Section>Animate</Section>
      <Section>when</Section>
      <Section>in</Section>
      <Section>view!</Section>
    </>
  );
}
