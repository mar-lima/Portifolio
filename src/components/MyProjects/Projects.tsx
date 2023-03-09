import * as S from "./style";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { animation } from "../../helpers/animePage";
type Props = {
  ref: React.RefAttributes<HTMLDivElement>;
  right: boolean;
  current?: MutableRefObject<HTMLDivElement>;
};

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
        console.log(window)
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
    </S.Projects>
  );
};

export default Projects;
