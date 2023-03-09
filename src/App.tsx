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
  return (
    <S.Container>
      <Header />
      <Carousel>
        <Banner />
      </Carousel>
      <Skills />
      <Projects />
    </S.Container>
  );
};

export default App;
