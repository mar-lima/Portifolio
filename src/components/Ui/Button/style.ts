import styled from "styled-components";

export const Button = styled.a`
  width: 100%;
  height: 50px;
  border: 2px solid #8257e6;
  border-radius: 50px;
  margin: 5% 0;
  color: #8257e6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  text-decoration: none;
  font-size: 1rem;

  :hover {
    background-color: #8257e6;
    color: #dce0e8;
    transform: scale(0.9);
  }

  @media (max-width: 750px){
    max-width: 300px;
    font-size: .7rem;
  }
  @media (max-width: 450px){
    width: 100%;
    height: 40px;
    margin-top: 20px;
    font-size: .7rem;
  }
`;
