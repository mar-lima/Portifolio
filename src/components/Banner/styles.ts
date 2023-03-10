import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-bottom: 5px solid #8257e6;
  h1 {
    font-size: 3rem;
  }
  span {
    color: #8257e6;
    font-size: 2rem;
  }
`;
export const contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .banner-area-a {
    flex: 1;
    width: 100%;
    height: 80vh;
    margin: 4%;
    font-weight: bold;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  .banner-area-a a {
    max-width: 250px;
  }
  img {
    width: 100%;
    width: 350px;
  }
  .banner-area-b {
    flex: 1;
    width: 100%;
    height: 400px;
    margin: 4%;
    font-weight: bold;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  //===========Responsive area ==============\\
  @media (max-width: 750px) {
    h1 {
      font-size: 2rem;
    }
    span {
      margin-top: 20px;
      font-size: 1rem;
    }
    img {
      width: 100%;
      max-width: 320px;
    }
  }
  //=======================================\\
  @media (max-width: 450px) {
    margin-top: 20%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1.3rem;
    }
    span {
      margin-top: 20px;
      font-size: 0.8rem;
      text-align: center;
    }
    .banner-area-a {
      align-items: center;
    }
    img {
      max-width: 150px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  p {
    font-size: 1.4rem;
    line-height: 180%;
    margin-bottom: 5%;
    text-align: center;
  }
  h2 {
    font-weight: 600;
    font-size: 3.2rem;
    margin-bottom: 20px;
  }
  //=================================================\\
  @media (max-width: 750px) {
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 40px;
    }
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: .8rem;
      text-align: center;
    }
  }
`;
