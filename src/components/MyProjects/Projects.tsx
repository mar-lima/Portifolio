import * as S from "./style";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { animation } from "../../helpers/animePage";
import Project from "./PojectComponent/Project";
const Projects = () => {
  const [rightstyle, setRightStyle] = useState(false);
  const myProject = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollListner = () => {
      const win = animation.anime();
      const windowTop = win;
      var projects: any = myProject.current?.offsetTop;
      window.scrollY;
      if (windowTop > projects) {
        setRightStyle(true);
      } else {
        setRightStyle(false);
      }
    };
    window.addEventListener("scroll", scrollListner);
    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  const [muda, setmuda] = useState(false);
  console.log();
  return (
    <S.Projects id="project" right={rightstyle} ref={myProject} cor={muda}>
      <h1>Destaques</h1>
      <S.Container>
        <Project />
        
      </S.Container>
      
    </S.Projects>
  );
};

export default Projects;
