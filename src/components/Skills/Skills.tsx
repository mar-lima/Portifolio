import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import {
  DiJavascript,
  AiFillHtml5,
  FaCss3Alt,
  SiTypescript,
  SiMui,
  FaFigma,
} from "react-icons/all";
import Box from "../Ui/Box/Box";
import { animation } from "../../helpers/animePage";

const Skills = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const [anime, setAnime] = useState(true);

  useEffect(() => {
    const scrollListner = () => {
      const win = animation.anime();
      const windowTop = win;
      var projects: any = skillRef.current?.offsetTop;
      window.scrollY;
      if (windowTop > projects) {
        setAnime(true);
      } else {
        setAnime(false);
      }
    };
    window.addEventListener("scroll", scrollListner);
    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);
  return (
    <S.Container ref={skillRef} left={anime}>
      <h2>Habilidades</h2>
      <S.Contain>
        <Box title="HTML5">
          <AiFillHtml5 />
        </Box>
        <Box title="CSS3">
          <FaCss3Alt />
        </Box>
        <Box title="JavaScript">
          <DiJavascript />
        </Box>
        <Box title="TypeScript">
          <SiTypescript />
        </Box>
        <Box title="React.js">
          <FaCss3Alt />
        </Box>
        <Box title="Material UI">
          <SiMui />
        </Box>
        <Box title="Figma">
          <FaFigma />
        </Box>
      </S.Contain>
    </S.Container>
  );
};

export default Skills;
