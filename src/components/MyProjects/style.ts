import styled from "styled-components";
type AnimeProps = {
  cor?: boolean;
  right?: boolean;
};
export const Projects = styled.div<AnimeProps>`
  position: relative;
  transition:2.1s cubic-bezier(.44,.44,.13,1.58);
  right: ${(props) => (props.right ? "0%" : "-100%")};
  opacity: ${(props) => (props.right ? "1" : "0")};
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;

  h2 {
    margin-bottom: 20px;
    background-color: transparent;
  }
  @media (max-width: 750px) {
    h2 {
      font-size: 22px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px;
`
