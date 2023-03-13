import styled, { keyframes } from "styled-components";

type modal = {
  cardwind: boolean;
};

const AnimationOpen = keyframes`
 0% { height: 0%; width: 0%; top: 50vh; left: 120vw; opacity: 1;}
 100% { height: 100%; width: 100%; opacity: 1; }`;

export const container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    fill: #8257e6;
    background-color: transparent;
  }
`;

export const MainArea = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;

  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;
  }
`;
export const Card = styled.div<modal>`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 10px;
  transition: all ease-in-out 0.6s;
  &:hover {
    transform: scale(1.1);
    #view-area {
      transition: all ease-in-out 0.3s;
      top: 0;
    }
    .smoke {
      transition: all ease-in-out 0.6s;
      background-color: transparent;
    }
    h2 {
      transition: all ease-in-out 0.3s;
      color: transparent;
      text-shadow: none;
    }
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;

  .smoke {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #2020209c;
    text-align: center;
  }
  h2 {
    position: absolute;
    text-align: center;
    background-color: transparent;
    color: #fff;
    font-weight: 800;
    font-size: 28px;
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 500px;
    z-index: -10;
  }
  @media (max-width: 450px) {
    .smoke {
      margin-bottom: 40px;
    }

    h2 {
      font-size: 22px;
    }
  }
`;
export const ViewHover = styled.div`
  position: relative;
  top: -100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20202040;
  transition: all ease-in-out 0.3s;
  opacity: 1;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  &:hover {
    transition: all ease-in-out 0.3s;
    top: 0;
  }
  a {
    width: 70%;
    height: 40px;
    border-radius: 15px;
    font-size: 1rem;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
//==============================================\\

export const CardModal = styled.div<modal>`
  position: fixed;
  display: flex;
  left: 0;
  top: 80px;
  width: 100%;
  height: 100%;
  background-color: black;
  justify-content: space-between;
  flex-direction: column;
  animation-name: ${AnimationOpen};
  animation-duration: 0.6s;
  transition: ease-in-out 1s;
  z-index: 20;
`;

export const contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 90%;
  padding: 20px;

  .btn-area {
    height: 100%;
    width: 100%;
    max-height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .close {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 40px;
    margin-right: 40px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .close:hover {
    transform: scale(1.5);
    background-color: transparent;
  }
`;

export const modalArea = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Area = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .description {
    flex: 1;
    display: flex;
    height: 100%;
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    .description{
      font-size: 18px;
    }
  }
`;
export const Buttons = styled.div`
  display: flex;
  width: 100%;

  a {
    transform: scale(0.9, 0.7);
    transition: all ease-in-out 0.3s;
    border-radius: 10px;
    font-size: 16px;
    padding: 10px;
  }
  a:hover {
    transform: scale(0.9, 0.8);
  }
  @media (max-width: 550px) {
    flex-direction: column;
    margin: 0;
    a{
      margin: 0;
    }
  }
`;
export const AreaImg = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  height: 100%;
  width: 100%;
  
  img {
    width: 100%;
    opacity: 0.8;
    margin-bottom: 30px;
  }

  @media (max-width: 750px) {
    max-width: 80%;
  }
`;
