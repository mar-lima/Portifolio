import * as S from "./styles";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Banner from "../Banner/Banner";

type Props = {
  children: JSX.Element;
};

const Conainer = ({ children }: Props) => {
  const contain = useRef(null);
  const isInView = useInView(contain, { once: true });

  return (
    <S.Carousel ref={contain} style={{ msOverflowX: "scroll" }}>
      <S.Contain
        style={{
          
          transform: isInView ? "none" : "translatey(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .8s",
        }}>
        {children}
      </S.Contain>
    </S.Carousel>
  );
};

export default function Carousel({ children }: Props) {
  return (
    <>
      <Conainer>{children}</Conainer>
    </>
  );
}
