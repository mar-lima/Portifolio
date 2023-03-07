import styled from "styled-components";

// type ContainerProps = {
//   left: boolean
// }
// left: ${props=> (props.left ? '0%' : '-90%')};

export const Container = styled.div`
  transition: all ease-in-out .4s;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5%;
  cursor: pointer;
  

  span {
    color: #8257e6;
    background-color: transparent;
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
