import React from "react";
import Button from "../Ui/Button/Index";
import * as S from "./styles";
import HeroLogo from "../../assets/HeroLogo.png";

const Banner = () => {
  return (
    <S.Banner>
      <S.contain>
      <div className="banner-area-a">
        <h1>Olá, eu sou </h1>
        <span>Marcelo Lima :) Desenvolvedor Front-End</span>
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/marcelo-lima-05b062211/"
          btn="Entrar em contato"
        />
      </div>
      <div className="banner-area-b">
        <a href="https://github.com/mar-lima">
          <img src={HeroLogo} alt="" />
        </a>
      </div>

      </S.contain>
      
      <S.Description>
        <h2>Sobre mim </h2>
        <p>
          Desenvolvedor Front-end com experiência em React.js,
          Next.js, Redux, JavaScript, TypeScript, Styled Components, Material UI
          e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes
          reutilizáveis.?
        </p>
      </S.Description>
    </S.Banner>
  );
};

export default Banner;
