import { AppContainer } from "./AppStyles";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Tools from "./components/Tools/Tools";
import TimeLine from "./components/TimeLine/TimeLine";
import Footer from "./components/Footer/Footer";
import ThemeManager from "./themes/themeManager";

const App = () => {
  return (
    <ThemeManager>
      <AppContainer>
        <NavBar />
        <Hero />
        <Projects />
        <Tools />
        <TimeLine />
        <Footer />
      </AppContainer>
    </ThemeManager>
  );
};

export default App;
