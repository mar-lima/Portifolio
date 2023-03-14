import styled from "styled-components";

type scroll = {
    scroll?: boolean
}

export const Scrollpage = styled.div<scroll>`
  position: fixed;
  top: 50vh;
  left: ${props => props.scroll ? '-15px' : '-150px'};
  transition: all ease-in-out .6s;
  background-color: transparent;
  transform: rotate(90deg);
  color: #8257e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  z-index: 100;

  svg {
    margin: 5px;
    font-size: 22px;
  }
`;

export const  ScrollClick = styled.div`
display: flex;
align-items: center;

`
