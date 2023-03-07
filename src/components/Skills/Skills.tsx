import React, {
  HtmlHTMLAttributes,
  useEffect,
  useRef,
  useState,
  version,
  WheelEvent,
  WheelEventHandler,
} from "react";
import * as S from "./styles";
import {
  DiJavascript,
  AiFillHtml5,
  FaCss3Alt,
  SiTypescript,
  SiMui,
} from "react-icons/all";

import Header from "../Header/Header";

import Carousel from "../Carousel/Carousel";
import Box from "../Ui/Box/Box";



const Skills = () => {
  


  return (
    <S.Container>
      <h2>Habilidades</h2>
      <S.Contain>
        <Box title="HTML5">
          <AiFillHtml5 />
        </Box>
        <Box title="CSS3">
          <FaCss3Alt />
        </Box>
        <Box title="JavaScript">
          <DiJavascript />
        </Box>
        <Box title="TypeScript">
          <SiTypescript />
        </Box>
        <Box title="React.js">
          <FaCss3Alt />
        </Box>
        <Box title="Material UI">
          <SiMui />
        </Box>
      </S.Contain>
    </S.Container>
  );
};

export default Skills;
