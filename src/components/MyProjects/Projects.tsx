import * as S from "./style";
import React, { MutableRefObject, useEffect, useState } from "react";
import { animation } from "../../helpers/animePage";
type Props = {
  ref: React.RefAttributes<HTMLDivElement>;
  right: boolean;
  current?: MutableRefObject<HTMLDivElement>;
};

const Projects = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [muda, setmuda] = useState(false);
  console.log(ref)
  return (
    <S.Projects
      id="0"
      right={props.right}
      ref={ref}
      cor={muda}>
      <h1>Destaques</h1>
    </S.Projects>
  );
});

export default Projects;
