import React from "react";
import styled from "styled-components";
import banner from "../assets/Hive/Banner.jpg";
import ss1 from "../assets/024/screenshot-1.jpg";
import ss2 from "../assets/024/screenshot-2.jpg";
import ss3 from "../assets/024/screenshot-3.jpg";
import ss4 from "../assets/024/screenshot-4.jpg";
import ss5 from "../assets/024/screenshot-5.jpg";
import ss6 from "../assets/024/screenshot-6.jpg";
import ss7 from "../assets/024/screenshot-7.jpg";
import ss8 from "../assets/024/screenshot-8.jpg";
import ss9 from "../assets/024/screenshot-9.jpg";
import ss10 from "../assets/024/screenshot-10.jpg";
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 5rem;
`;

const ScreenshotCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ScreenshotImg = styled.img`
  width: 100%;
  height: 300px;
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
            <BannerText>Revolutionizing Transport Booking <br />with Smart, Seamless Solutions</BannerText>
          </BannerOverlay>
        </Banner>

        {/* 🔹 Intro */}
        <Intro>
          <IntroText>
            "Plan your journey with ease — through intelligent booking, real-time tracking, and reliable transport services."
          </IntroText>
        </Intro>
        <Description>
          {"    "} A streamlined transport booking system built to simplify travel management for individuals and businesses. The platform offers end-to-end solutions for booking, scheduling, and managing transport operations with real-time updates and digital convenience.
          Whether it's daily commuting, intercity travel, or logistics coordination, the system adapts to meet varied needs — from passengers to fleet managers. Key features include route optimization, fare calculation, secure payments, and live tracking.
          Designed for efficiency and transparency, the platform ensures smoother operations, enhanced user experience, and better resource utilization in the evolving landscape of mobility and transport services.
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
            <ScreenshotCard>
              <ScreenshotImg src={ss8} alt="Dashboard" />
            </ScreenshotCard>
            <ScreenshotCard>
              <ScreenshotImg src={ss9} alt="Dashboard" />
            </ScreenshotCard>
            <ScreenshotCard>
              <ScreenshotImg src={ss10} alt="Dashboard" />
            </ScreenshotCard>
          </ScreenshotGrid>
        </Screenshots>
      </Container>
    </>
  );
};

export default ProjectDetails;
