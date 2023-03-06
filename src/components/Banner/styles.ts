import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 20%; */
  border-bottom: 5px solid #8257e6;

  h1 {
    /* margin: 0; */
    font-size: 3rem;
  }
  span {
    color: #8257e6;
    font-size: 2rem;
  }
  img {
    /* width: 100%; */
    width: 300px;

    border-radius: 50%;
  }
`;

export const contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .banner-area-a {
    flex: 1;
    height: 80vh;
    margin: 4%;
    font-weight: bold;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  .banner-area-b {
    flex: 1;
    height: 400px;
    margin: 4%;
    font-weight: bold;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Description = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10% ;
  
  p {
    font-size: 1.2rem;
    line-height: 180%;
    margin-bottom: 5%;
  }

  h2{
    font-weight: 600;
    font-size: 3.2rem;
    margin-bottom: 20px;
  }
`