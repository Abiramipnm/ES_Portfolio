import React from "react";
import styled from "styled-components";
import banner from "../assets/Hive/Banner.jpg";
import ss1 from "../assets/Hive/screenshort-1.jpg";
import ss2 from "../assets/Hive/screenshort-2.jpg";
import ss3 from "../assets/Hive/screenshot-3.png";
import ss4 from "../assets/Hive/screenshot-4.png";
import ss5 from "../assets/Hive/screenshort-5.jpg";
import ss6 from "../assets/Hive/screenshort-6.jpg";
import ss7 from "../assets/Hive/screenshort-7.jpg";
import Navbar from "../Components/Navbar";

const Container = styled.div``;

// 🔹 1. Banner Section
const Banner = styled.section`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  text-align: center;
`;

const BannerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

const BannerText = styled.h1`
  top:9rem;
  font-size: 3rem;
  font-weight: bold;
  z-index: 2;
  position: relative;
`;

// 🔹 2. Intro Section
const Intro = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 2rem 0rem;
  align-items: center;
  gap: 2rem;
`;

const IntroText = styled.div`
  flex: 1;
  font-size: 1.1rem;
  font-weight:600;
  color: #333;
`;

// 🔹 3. Description
const Description = styled.section`
  padding: 2rem;
  line-height: 1.8;
  font-size: 1.05rem;
  color: #444;
  background: #f9f9f9;
`;

// 🔹 4. Screenshots
const Screenshots = styled.section`
  padding: 4rem 2rem;
`;

const ScreenshotsTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #222;
`;

const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ScreenshotCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ScreenshotImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: conatin;
`;

const ProjectDetails: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        {/* 🔹 Banner */}
        <Banner>
          <BannerOverlay>
            <BannerText>Empowering Business Intelligence <br />through Innovation and Technology</BannerText>
          </BannerOverlay>
        </Banner>

        {/* 🔹 Intro */}
        <Intro>
          <IntroText>
            "Take your business to the next level — through innovation, strategy, and reliable tech solutions."
          </IntroText>
        </Intro>

        {/* 🔹 Description */}
        <Description>
          {"    "} A professional IT consulting approach focused on digital transformation, data analytics, and enterprise-grade solutions. The goal is to help businesses harness the power of technology for operational efficiency and sustainable growth.
          Through a team of experienced consultants and developers, solutions are tailored across areas like cloud migration, system architecture, web application development, and business intelligence reporting. A client-focused mindset ensures every solution aligns with strategic objectives and industry best practices.
          From startups to established enterprises, this service model provides the strategic guidance and technical execution needed to elevate digital infrastructure and performance.
        </Description>

        {/* 🔹 Screenshots */}
        <Screenshots>
          <ScreenshotsTitle>Project Screenshots</ScreenshotsTitle>
          <ScreenshotGrid>
            <ScreenshotCard>
              <ScreenshotImg src={ss1} alt="Login Page" />
            </ScreenshotCard>
            <ScreenshotCard>
              <ScreenshotImg src={ss2} alt="Login Page" />
            </ScreenshotCard>
            <ScreenshotCard>
              <ScreenshotImg src={ss3} alt="Login Page" />
            </ScreenshotCard>
            <ScreenshotCard>
              <ScreenshotImg src={ss4} alt="Dashboard" />
            </ScreenshotCard>
            <ScreenshotCard>
              <ScreenshotImg src={ss5} alt="Dashboard" />
            </ScreenshotCard>
            <ScreenshotCard>
              <ScreenshotImg src={ss6} alt="Dashboard" />
            </ScreenshotCard>
            <ScreenshotCard>
              <ScreenshotImg src={ss7} alt="Dashboard" />
            </ScreenshotCard>
          </ScreenshotGrid>
        </Screenshots>
      </Container>
    </>
  );
};

export default ProjectDetails;
