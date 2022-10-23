import { Global } from "./styles/Global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/theme/light";
import dark from "./styles/theme/dark";
import { Header } from "./pages/header/Header";
import usePersistedState from "./utils/usePersistedState";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

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
      <Contact />
    </ThemeProvider>
  );
}

export default App;
