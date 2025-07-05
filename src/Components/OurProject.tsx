import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import hotel from "../assets/Hotel_management.jpg";
import maac from "../assets/Maac.jpg";
import ztf from "../assets/024.jpg";
import rng from "../assets/RNG_ALPHA.jpg";
import hive from "../assets/Hive.jpg";
import exam from "../assets/Exam_portal.jpg";
import esara from '../assets/Esara.jpg'

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const ScrollWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Card = styled.a`
  position: relative;
  display: block;
  min-width: 360px;
  height:300px;
  margin: 0 1rem;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  width: 100%;
  z-index: 2;
`;

const ProjectTitle = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Category = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff5252;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 3;
`;

const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background: #333;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 4;

  &:hover {
    background: #555;
  }
`;

// Updated width for scrolling logic
const cardWidth = 380;

const projectData = [
  {
    id: 1,
    title: "Hotel Management",
    image: hotel,
    category: "Web App",
    link: "/project/hotel",
  },
  {
    id: 2,
    title: "Hive",
    image: hive,
    category: "Education Consultancy",
    link: "/project/hive",
  },
  {
    id: 3,
    title: "ZTF FinTech",
    image: ztf,
    category: "Racing Academy",
    link: "/project/ztf",
  },
  {
    id: 4,
    title: "MAAC Portal",
    image: maac,
    category: "Gaming Academy",
    link: "/project/maac",
  },
  {
    id: 5,
    title: "RNG Alpha",
    image: rng,
    category: "Mechanical Engg",
    link: "/project/rng",
  },
  {
    id: 6,
    title: "Hive Exam Portal",
    image: exam,
    category: "Exam Portal",
    link: "/project/exam",
  },
  {
    id: 7,
    title: "Student Fee Management",
    image: esara,
    category: "Esara",
    link: "/project/esara",
  },
];

const OurProjects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const positionRef = useRef<number>(0);

  const extendedData = [...projectData, ...projectData.slice(0, 3)];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!container) return;

        positionRef.current += cardWidth;

        if (positionRef.current >= cardWidth * projectData.length) {
          container.style.transition = "none";
          container.style.transform = `translateX(0px)`;
          positionRef.current = 0;

          void container.offsetWidth;
          setTimeout(() => {
            container.style.transition = "transform 0.5s ease";
            positionRef.current += cardWidth;
            container.style.transform = `translateX(-${positionRef.current}px)`;
          }, 50);
        } else {
          container.style.transition = "transform 0.5s ease";
          container.style.transform = `translateX(-${positionRef.current}px)`;
        }
      }, 5000);
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleManualScroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    if (intervalRef.current) clearInterval(intervalRef.current);

    if (dir === "left") {
      positionRef.current = Math.max(0, positionRef.current - cardWidth);
    } else {
      positionRef.current += cardWidth;
      if (positionRef.current >= cardWidth * projectData.length) {
        positionRef.current = 0;
      }
    }

    container.style.transition = "transform 0.5s ease";
    container.style.transform = `translateX(-${positionRef.current}px)`;

    intervalRef.current = setInterval(() => {
      handleManualScroll("right");
    }, 5000);
  };

  return (
    <Section>
      <Title>Our Projects</Title>
      <ScrollWrapper>
        <ArrowButton left onClick={() => handleManualScroll("left")}>
          &lt;
        </ArrowButton>
        <ScrollContainer ref={scrollRef}>
          {extendedData.map((project, index) => (
            <Card
              key={`${project.id}-${index}`}
              href={project.link}
              target="_self" // change to "_blank" if you want to open in new tab
            >
              <Category>{project.category}</Category>
              <ProjectImage src={project.image} alt={project.title} />
              <Overlay>
                <ProjectTitle>{project.title}</ProjectTitle>
              </Overlay>
            </Card>
          ))}
        </ScrollContainer>
        <ArrowButton onClick={() => handleManualScroll("right")}>
          &gt;
        </ArrowButton>
      </ScrollWrapper>
    </Section>
  );
};

export default OurProjects;
