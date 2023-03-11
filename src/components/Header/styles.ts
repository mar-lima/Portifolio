import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 90px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 4px solid #4c00ff;
  position: fixed;
  z-index: 99999999;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 60px;
  }

  @media (max-width: 750px) {
    font-size: 0.6rem;
  }
  img {
    max-width: 40px;
  }
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;
    div {
      display: none;
    }
    .img {
      display: block;
    }
  }
`;
