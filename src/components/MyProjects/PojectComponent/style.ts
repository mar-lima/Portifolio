import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 20px;
    
    h2 {
      font-size: 1rem;
    }
    img {
      width: 100%;
      max-width: 300px;
      
      
    }
`