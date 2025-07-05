import React from "react";
import styled from "styled-components";
import banner from "../assets/Maac/Banner.jpg";
import ss1 from "../assets/Maac/screenshot-1.png";
import ss2 from "../assets/Maac/screenshot-2.png";
import ss3 from "../assets/Maac/screenshot-3.png";
import ss4 from "../assets/Maac/screenshot-4.png";
import ss5 from "../assets/Maac/screenshot-5.png";
import ss6 from "../assets/Maac/screenshot-6.png";
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
                        <BannerText>Empowering Creatives <br/>at MAAC Salem</BannerText>
                        <Botton> <a href="https://www.maacsalem.com/" target="_blank">See Site</a></Botton>
                    </BannerOverlay>
                </Banner>

                {/* 🔹 Intro */}
                <Intro>
                    {/* <IntroImage src={introImage} alt="Intro" /> */}
                    <IntroText>
                        "This portal was developed for MAAC Salem to streamline student engagement, project submissions, event updates, and institutional announcements, enhancing the learning experience for animation and multimedia students."
                    </IntroText>
                </Intro>

                {/* 🔹 Description */}
                <Description>
                  The MAAC Salem Student Portal is a comprehensive web-based platform designed for students pursuing multimedia and animation courses. Built using modern technologies like React, Node.js, and MongoDB, the portal provides seamless access to academic resources, course materials, video content, project submissions, class schedules, and event participation. It features a student dashboard, event gallery, announcement section, and an admin panel for faculty to manage content and users efficiently. This centralized system enhances accessibility and fosters stronger communication between students and instructors, aligning with MAAC Salem's commitment to hands-on, industry-focused training.
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
                    </ScreenshotGrid>
                </Screenshots>
                <Footer />
            </Container>
        </>
    );
};

export default ProjectDetails;
