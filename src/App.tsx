import React, { useEffect, useRef } from "react";
import * as S from "./App.styles";
import Banner from "./components/Banner/Banner";

import Header from "./components/Header/Header";

import Carousel from "./components/Carousel/Carousel";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <S.Container>
      <Header />
      <Carousel>
        <Banner />
      </Carousel>
      <Carousel>
        <Skills />
      </Carousel>
    </S.Container>
  );
};

export default App;
