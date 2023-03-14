import React, { EventHandler, useEffect, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

import * as S from "./style";
const Rowpage = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", hadleButtonClick);
    return () => {
      window.removeEventListener("scroll", hadleButtonClick);
    };
  }, []);
  const hadleButtonClick = () => {
    var lastScrollTop = 0;
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleButtonScroll = () => {
    if (scroll) {
      window.scrollTo({
        top: window.scrollY + 500,
        behavior: "smooth",
      });
    }
  };

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
