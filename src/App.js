import { AppContainer } from "./AppStyles";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Tools from "./components/Tools/Tools";
import TimeLine from "./components/TimeLine/TimeLine";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Tools />
        <TimeLine />
      </main>
      <Footer />
    </AppContainer>
  );
};

export default App;
