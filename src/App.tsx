import React, {
  ElementRef,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./App.styles";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Skills from "./components/Skills/Skills";
import { animation } from "./helpers/animePage";
import Projects from "./components/MyProjects/Projects";

const App = () => {
  const [anime, setAnime] = useState(false);
  const [project, setProjects] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);
  const myProject = useRef<HTMLDivElement>(null);
  let xred = useRef<HTMLDivElement>(null);
  const moveDiv = (
    e: React.UIEvent<HTMLDivElement, WheelEvent> | React.AbstractView
  ) => {
    const win = animation.anime(e);
    const windowTop = win;
    var skill: any = myRef.current?.offsetTop;
    var projects: any = myProject.current?.offsetTop;
    if (windowTop > skill) {
      setAnime(true);
    } else {
      setAnime(false);
    }
    if (windowTop > projects) {
      setProjects(true);
    } else {
      setProjects(false);
    }
    

    // console.log(myRef);
  };
  return (
    <S.Container onWheelCapture={(e) => moveDiv(e.view)}>
      <Header />
      <Carousel>
        <Banner />
      </Carousel>
      <S.Anime left={anime} ref={myRef}>
        <Skills />
      </S.Anime>
      {/* <S.Anime left={project} ref={myProject}><Projects/></S.Anime> */}
      <Projects right={project} ref={myProject} />
    </S.Container>
  );
};

export default App;
