import styled from "styled-components";
import { useState } from "react";

const Card = styled.div`
  width: 48%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  img {
    width: 100%;
    height: 20em;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    transition-delay: 0.1s;
    object-fit: cover;
  }
  .details {
    display: flex;
    width: 100%;
    height: 100%;
    background: #000000e8;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    opacity: 0;
    transition: 0.5s ease-in-out;
    transform: translate3d(0%, 90%, 0);
    h2 {
      font-size: 2em;
      text-align:center;
      color: ${props => props.theme.colors.primary};
      letter-spacing: 1.2px;
    }
    p{
      margin-top: 0.5em;
      font-size: 1.1em;
      color: #fff;
      text-align: center;
      font-weight: 300;
      letter-spacing: 1.5px;
    }
    a {
      font-size: 1.2em;
      font-weight: 500;
      padding: 0.6em;
      border: none;
      border-radius: 4px;
      background-color: #fff;
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
      width: 100%;
      text-align: center;
      transition: 0.4s ease-in-out;
      &:hover {
        background-color: #1a191c;
        color: #fff;
      }
    }
  }
  #animate {
    transition-delay: 0.1s;
    opacity: 1;
    transform: translate3d(0%, 0%, 0);
  }
  &:hover {
    img {
      scale: 1.1;
    }
  }
  @media (max-width: 1000px){
    img{
      height: 15em;
    }
  }

  @media (max-width: 800px){
    width: 100%;

    img{
      height: 20em;
    }
  }

  @media (max-width: 500px){
    img{
      height: 16em;
    }
  }
`;

interface Card {
  alt: string;
  img: string;
  title: string;
  link: string;
  details: string;
}

export default function ProjectCard({ alt, img, title, link, details }: Card) {
  const [animate, setAnimate] = useState<Boolean>(false);

  return (
    <Card
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
    >
      <img src={img} alt={alt} />
      <div className="details" id={animate ? "animate" : "remove"}>
        <div>
          <h2>{title}</h2>
          <p>{details}</p>
        </div>
        <a href={link}>Ver Projeto</a>
      </div>
    </Card>
  );
}
