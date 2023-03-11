import styled from "styled-components";
type AnimeProps = {
  left?: boolean;
};

export const Container = styled.div<AnimeProps>`
  position: relative;
  transition:2.1s cubic-bezier(.44,.44,.13,1.58);
  left: ${(props) => (props.left ? "0%" : "-120%")};
  opacity: ${(props) => (props.left ? "1" : "-10")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5%;
  cursor: pointer;
  margin-bottom: 33vh;
  
  span {
    color: #8257e6;
    background-color: transparent;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  @media (max-width: 750px) {
    h2 {
      font-size: 1rem;
    }
    span {
      font-size: .7rem;
    }
    svg{
      /* max-width: 70px; */
    }
  }
`;

export const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 5%;
`;
