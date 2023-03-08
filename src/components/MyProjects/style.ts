import styled from "styled-components";
type AnimeProps = {
  cor?: boolean;
  right?: boolean;
};
export const Projects = styled.div<AnimeProps>`
  position: relative;
  transition: all ease-in-out 1s;
  right: ${(props) => (props.right ? "0%" : "-100%")};
  opacity: ${(props) => (props.right ? ".5" : "0")};
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 80vh;
  background-color: black;

  h1 {
    margin: 0;
    background-color: transparent;
  }
`;
