import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { Container } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoIosMoon } from "react-icons/io";
import { BsSunFill } from "react-icons/bs";
interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  const [visible, setVisible] = useState<Boolean>(false);

  return (
    <Container>
      <a href="#home">
        <h1>Edu</h1>
      </a>
      <div>
        <ul className={visible ? "show" : ""}>
          {visible && (
            <FaAngleRight id="close" onClick={() => setVisible(false)} />
          )}
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <div
          className="theme_switcher"
          onClick={toggleTheme}
        >
          {title === "dark" ? <IoIosMoon /> : <BsSunFill />}
        </div>
      </div>
      {!visible && (
        <GiHamburgerMenu id="menu" onClick={() => setVisible(true)} />
      )}
    </Container>
  );
};
