import * as S from "./App.styles";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Skills from "./components/Skills/Skills";
import Projects from "./components/MyProjects/Projects";
import Rowpage from "./components/RowPage/Scrollpage";

const App = () => {
  return (
    <S.Container>
      <Header />
      <Rowpage/>
      <Carousel>
        <Banner />
      </Carousel>
      <Skills />
      <Projects />
    </S.Container>
  );
};

export default App;
