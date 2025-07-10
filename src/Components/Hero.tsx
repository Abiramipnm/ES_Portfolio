import React from "react";
import styled from "styled-components";
import bg from '../assets/banner.jpg'


const HeroWrapper = styled.section`
  background-image: url(${bg}); // <-- replace with your image path
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Content = styled.div`
  max-width: 800px;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Divider = styled.div`
  width: 40px;
  height: 3px;
  background-color: #ff4b2b;
  margin: 1.5rem auto;
`;

const SubText = styled.p`
  font-size: 1.1rem;
  color: #ddd;
  line-height: 1.6;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <Content>
        <Heading>
          Engineering Precision Meets Digital Innovation
        </Heading>  
        <Divider />
        <SubText>
          Merging technology with engineering precision to deliver cutting-edge solutions in design, simulation, and analysis. From CAD modeling to FEA and CFD, we empower innovation through accuracy, performance, and streamlined digital workflows.
        </SubText>
      </Content>
    </HeroWrapper>
  );
};

export default HeroSection;
