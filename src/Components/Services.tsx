// AtYourService.tsx

import React from 'react';
import styled from 'styled-components';
import {
  FaShieldAlt,
  FaCode,
  FaCloud,
  FaChalkboardTeacher,
} from 'react-icons/fa'; // Updated relevant icons

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
`;

const Underline = styled.div`
  width: 40px;
  height: 2px;
  background: #f4623a;
  margin: 0 auto 2rem auto;
`;

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Feature = styled.div`
  max-width: 250px;
`;

const Icon = styled.div`
  font-size: 32px;
  color: #f4623a;
  margin-bottom: 1rem;
`;

const Heading = styled.h4`
  font-size: 18px;
  color: #212529;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
`;

const AtYourService: React.FC = () => {
  const features = [
    {
      icon: <FaShieldAlt />, // Cybersecurity
      title: 'Cybersecurity Solutions',
      desc: 'Risk assessment, threat detection, penetration testing, and compliance support.',
    },
    {
      icon: <FaCode />, // Web/App Development
      title: 'Web & App Development',
      desc: 'End-to-end custom solutions for web and mobile platforms using modern tech stacks.',
    },
    {
      icon: <FaCloud />, // Digital Transformation
      title: 'Digital Transformation',
      desc: 'Helping businesses adapt through cloud migration, automation, and smart integrations.',
    },
    {
      icon: <FaChalkboardTeacher />, // IT Training
      title: 'IT Consulting & Training',
      desc: 'Technical guidance and corporate training programs to upskill your team securely.',
    },
  ];

  return (
    <Section>
      <Title>At Your Service</Title>
      <Underline />
      <FeaturesWrapper>
        {features.map((feature, index) => (
          <Feature key={index}>
            <Icon>{feature.icon}</Icon>
            <Heading>{feature.title}</Heading>
            <Description>{feature.desc}</Description>
          </Feature>
        ))}
      </FeaturesWrapper>
    </Section>
  );
};

export default AtYourService;
