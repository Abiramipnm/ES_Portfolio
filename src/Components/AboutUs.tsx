import React from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/aboutus.jpeg'; // Replace with your actual image path
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Image src={aboutImage} alt="About City" />
        </Left>
        <Right>
          <SectionTitle><span>About</span> Us</SectionTitle>
          <Heading>
            Driven by Precision <br />
            Defined by <span>Innovation.</span>
          </Heading>
          <Paragraph>
            We are a forward-thinking engineering firm delivering advanced design and simulation solutions. With a focus on CAD, FEA, and CFD, we turn complex ideas into efficient, high-performance outcomes through innovation, accuracy, and technical excellence.
          </Paragraph>
          <Link to="https://rngalpha.co.uk/" target='_blank'>
            <Button>Learn More</Button>
          </Link>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default AboutSection;

// Styled Components
const Wrapper = styled.section`
  padding: 4rem 7rem;
  background: #000;
  color:#fff;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Image = styled.img`
  width: 500px;
  height: 300px;
  max-width: 450px;
  display: block;
`;

const Right = styled.div`
  flex: 1;
  min-width: 300px;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;

  span {
    color: #E10600;
    border-bottom: 2px solid #E10600;
    padding-bottom: 2px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 1rem;

  span {
    color: #E10600;
  }
`;

const Paragraph = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 450px;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #f1f1f1;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 2rem;
`;
