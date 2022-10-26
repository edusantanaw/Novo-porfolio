import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import {FaAngleRight} from 'react-icons/fa'
interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  const [visible, setVisible] = useState<Boolean>(false);

  return (
    <Container>
      <h1>Eduardo</h1>
      <div>
        <ul className={visible ? "show" : ""}>
            {visible && <FaAngleRight id="close" onClick={() => setVisible(false)} />}
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
          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={18}
            width={40}
            handleDiameter={15}
            offColor="#ECA400"
            onColor="#a019a0"
            onHandleColor="#fdf8fd"
            offHandleColor="#fcfcfc"
          />
        </ul>
      </div>
      {!visible && (
        <GiHamburgerMenu id="menu" onClick={() => setVisible(true)} />
      )}
    </Container>
  );
};
