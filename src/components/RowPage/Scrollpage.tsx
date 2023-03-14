import React, { EventHandler, useEffect, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

import * as S from "./style";
const Rowpage = () => {
  const [scroll, setScroll] = useState(false);
  const [lastScroll, setSLastScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", hadleButtonClick);
    return () => {
      window.removeEventListener("scroll", hadleButtonClick);
    };
  }, []);
  const hadleButtonClick = () => {
    var pageScroll = window.scrollY;
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    setSLastScroll(pageScroll)
    // console.log(window.scrollY)
  };
  
  const handleButtonScroll = () => {
    var top = 0
    if (scroll) {
      window.scrollTo({
        top: window.scrollY + 500,
        behavior: "smooth",
      });
    };
    if(window.scrollY > top){
      console.log('baixo')

    }
    console.log(window)
    console.log(window.scrollY)
  };
  // console.log(lastScroll)

  return (
    <S.Scrollpage scroll={scroll} onClick={hadleButtonClick}>
      <S.ScrollClick onClick={handleButtonScroll}>
        <h3>Ver Mais</h3>
        <AiOutlineDoubleRight />
      </S.ScrollClick>
    </S.Scrollpage>
  );
};

export default Rowpage;
