import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: auto;
  /* background-color: #202040; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 100px;
  overflow-x: hidden;
`;

type AnimeProps = {
  left?: boolean;
  // right?: boolean
  
};

export const Anime = styled.div<AnimeProps>`
  position: relative;
  transition: all ease-in-out 2s;
  left: ${(props) => (props.left ? "0%" : "-120%")};
  opacity: ${(props) => (props.left ? "1" : "-10")};

  width: 100%;
  height: 100%;
`;
