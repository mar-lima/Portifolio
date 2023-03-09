import React from "react";
import { items } from "../../../data/items";
import * as S from "./style";
const Project = () => {
  return (
    <S.container>
      {items.map((item) => (
        <S.Card key={item.id}>
          <img src={item.img} alt="" />
        </S.Card>
      ))}
    </S.container>
  );
};

export default Project;
