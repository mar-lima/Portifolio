import styled from "styled-components";

export const Skils = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 120px;
  margin: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #202020;
  border-bottom: 4px solid #8257e6;
  border-top-left-radius: 30px;
  cursor: pointer;

  span {
    color: #8257e6;
    background-color: transparent;
  }

  svg {
    width: 100px;
    height: 100px;
    color: black;
    fill: #8257e6;
    background-color: transparent;
  }
  transition: all ease-in-out .2s;
  
  :hover{
    transform: scale(1.3);
  }
  @media (max-width: 750px){
    max-width: 90px;
    max-height: 90px;
  }
  span {
    margin-bottom: 5px;
  }
  @media (max-width: 450px){
    max-width: 70px;
    max-height: 70px;
  }
  span {
    font-size: .5rem;
  }
  
`;
