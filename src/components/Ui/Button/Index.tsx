import React from "react";
import * as S from "./style";

type Props = {
  btn: string;
  href: string;
  target?: string
};

const Button = ({ btn, href, target }: Props) => {
  return <S.Button 
  href={href}
  target={target}
  >
    {btn}
  </S.Button>;
};

export default Button;
