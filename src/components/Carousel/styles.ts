import styled from "styled-components";

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  `;

export const Contain = styled.div`
transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .8s";
  /* transition: all ease-in-out 0.8s; */
  /* transform: translateX(-100px); */
  opacity: 0;
  top: 0;
`;
