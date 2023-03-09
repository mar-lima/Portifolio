import * as S from "./styles";
import HeroLogo from "../../assets/HeroLogo.png";
import React, { useRef, useState } from "react";

const Header = () => {
  const [pageYPosition, setPageYPosition] = useState(0);
  const ref = useRef(null);
  const handleClick = (event: React.SyntheticEvent) => {
    if (event.currentTarget.id === "0") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (event.currentTarget.id === "1") {
      window.scrollTo({
        top: 550,
        behavior: "smooth",
      });
    } else if (event.currentTarget.id === "2") {
      window.scrollTo({
        top: 980,
        behavior: "smooth",
      });
    }
  };
  // window.addEventListener("click", handleClick);
  return (
    <S.Container>
      <div className="img" id="0" onClick={handleClick}>
        <img src={HeroLogo} alt="" />
      </div>
      <div id="1" onClick={handleClick}>
        Sobre
      </div>
      <div id="2" onClick={handleClick}>
        Habilidades
      </div>
      <div id="3" onClick={handleClick}>
        Projetos
      </div>
      <div id="4" onClick={handleClick}>
        Contatos
      </div>
    </S.Container>
  );
};

export default Header;
