import { Global } from "./styles/Global";

//theme
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/theme/light";
import dark from "./styles/theme/dark";
import usePersistedState from "./utils/usePersistedState";

//pages
import { Header } from "./pages/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Project from "./pages/projects/Projects";
import Skill from "./pages/skills/Skils";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = ()=> {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header toggleTheme = {toggleTheme} />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
