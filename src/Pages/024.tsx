import React from "react";
import styled from "styled-components";
import banner from "../assets/024/Banner.jpg";
import ss1 from "../assets/024/screenshot-1.jpg";
import ss2 from "../assets/024/screenshot-2.jpg";
import ss3 from "../assets/024/screenshot-3.jpg";
import ss4 from "../assets/024/screenshot-4.jpg";
import Footer from "../Components/Footer";
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

const Botton = styled.h1`
  top:9rem;
 padding: 0.7rem 1.5rem;
  background-color: #ff5252;
  color: white;
   margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 25px;
  display: inline-block;
  position: relative;
  a{
  color:white;
  text-decoration:none;
  }
`;

// 🔹 2. Intro Section
const Intro = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 2rem 0rem;
  align-items: center;
  gap: 2rem;
`;

// const IntroImage = styled.img`
//   flex: 1;
//   max-width: 500px;
//   width: 100%;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
// `;

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
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
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
                        <BannerText>024 MotorSport</BannerText>
                        <Botton> <a href="#" target="_blank">See Site</a></Botton>
                    </BannerOverlay>
                </Banner>

                {/* 🔹 Intro */}
                <Intro>
                    {/* <IntroImage src={introImage} alt="Intro" /> */}
                    <IntroText>
                        "024 Car Racing Academy is a cutting-edge web platform designed to promote racing education, registrations, and event management. The site offers users seamless access to training schedules, driver profiles, and race-day insights."
                    </IntroText>
                </Intro>

                {/* 🔹 Description */}
                <Description>
                   024 Car Racing Academy is a full-stack web application tailored for aspiring racers and motorsport enthusiasts. The platform provides detailed training modules, digital race registrations, and real-time event tracking. It’s equipped with an intuitive admin dashboard, responsive design for mobile accessibility, and an integrated media gallery for showcasing race highlights and student achievements. Built using React for the frontend and Node.js backend, it ensures fast performance, dynamic content rendering, and secure data handling.
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
                    </ScreenshotGrid>
                </Screenshots>
                <Footer />
            </Container>
        </>
    );
};

export default ProjectDetails;
