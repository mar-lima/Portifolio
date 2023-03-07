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
import { animate } from "framer-motion";
import { animation } from "./helpers/animePage";

const App = () => {
  const [anime, setAnime] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);
  const refa = useRef<HTMLDivElement>(null);
  const moveDiv = (
    e: React.UIEvent<HTMLDivElement, WheelEvent> | React.AbstractView
  ) => {
    const win = animation.anime(e);
    const windowTop = win;
    var div: any = myRef.current?.offsetTop;
    var a: any = refa.current?.offsetTop;
    if (windowTop > div ) {
      setAnime(true);
    }
    else if(windowTop > refa) {
      setAnime(true)
    }
    else {
      setAnime(false);
    }

    

    console.log(myRef.current?.id[1]);
  };
  return (
    <S.Container onWheelCapture={(e) => moveDiv(e.view)}>
      <Header />
      <Carousel>
        <Banner />
      </Carousel>
      <S.Anime id="1" left={anime} ref={myRef}><Skills /></S.Anime>
      <S.Anime id="2" left={anime} ref={refa}><Skills /></S.Anime>
        
      

      {/* <S.Anime left={anime} ref={myRef}><Skills  /></S.Anime> */}
    </S.Container>
  );
};

export default App;
