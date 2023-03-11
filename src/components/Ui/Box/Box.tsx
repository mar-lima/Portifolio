import React, { useState } from "react";
import * as S from "./styles";

type Props = {
  children?: JSX.Element;
  title?: string;
};

const Container = ({ children, title }: Props) => {
  return (
    <S.Skils>
      <span>{title}</span>
      {children}
    </S.Skils>
  );
};

export default function Box({ children, title }: Props) {
  return (
    <>
      <Container>
        <>
          <span>{title}</span>
          {children}
        </>
      </Container>
    </>
  );
}
