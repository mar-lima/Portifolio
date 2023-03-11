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
    .view-hover {
      transition: all ease-in-out 0.3s;
      top: 0;
      opacity: 1;
    }
  }

  .view-hover {
    position: relative;
    top: -100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #202020;
    transition: all ease-in-out 0.3s;
    opacity: 1;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  .view-hover a {
    width: 70%;
    height: 40px;
    border-radius: 15px;
    font-size: 1rem;
  }

  h2 {
    font-size: 1rem;
  }
  .detail {
    z-index: 10;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 500px;
  }
`;

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

  .img {
    flex: 1.3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
    height: 100%;
    width: 100%;
  }
  .img img {
    width: 100%;
  }
  .description {
    flex: 1;
    display: flex;
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .btn {
    display: flex;
    width: 100%;
  }
  .btn a {
    transform: scale(0.9, 0.7);
    transition: all ease-in-out 0.3s;
    border-radius: 10px;
    font-size: 1rem;
  }
  .btn a:hover {
    transform: scale(0.9, 0.8);
  }
`;
