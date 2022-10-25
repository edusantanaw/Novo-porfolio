import styled from "styled-components";
import { useState } from "react";

const Card = styled.div`
  width: 33%;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 15em;
    border-radius: 5px;
    transition: 0.6s ease-in-out;
  }
  .details {
    display: flex;
    width: 100%;
    height: 100%;
    background: #f0544f;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    opacity: 0;
    transition: 0.6s ease-in-out;
    transform: translate3d(0%, 90%, 0);
    h2 {
      left: 2;
      font-size: 2em;
    }
    a {
      font-size: 1.2em;
      padding: 0.5em;
      width: 100%;
      border: none;
      border-radius: 5px;
      background-color: #fff;
      text-decoration: none;
      color: #000;
      width: 100%;
      text-align: center;
    }
  }
  #animate {
    opacity: 1;
    transform: translate3d(0%, 0%, 0);
  }
  &:hover {
    img {
      scale: 1.3;
    }
  }
`;

interface Card {
  alt: string;
  img: string;
  title: string;
  link: string;
}

export default function ProjectCard({ alt, img, title, link }: Card) {
  const [animate, setAnimate] = useState<Boolean>(false);

  return (
    <Card
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
    >
      <img src={img} alt={alt} />
      <div className="details" id={animate ? "animate" : "remove"}>
        <h2>{title}</h2>
        <a href={link}>Ver Projeto</a>
      </div>
    </Card>
  );
}
