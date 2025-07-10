import React from "react";
import styled from "styled-components";
import banner from "../assets/Hotel/banner.jpg";
import ss1 from "../assets/Hotel/Screenshot-1.jpg";
import ss2 from "../assets/Hotel/Screenshot-2.jpg";
import ss3 from "../assets/Hotel/Screenshot-3.jpg";
import ss4 from "../assets/Hotel/Screenshot-4.jpg";
import ss5 from "../assets/Hotel/Screenshot-5.jpg";
import ss6 from "../assets/Hotel/Screenshot-6.jpg";
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
                        <BannerText>Hotel Management System</BannerText>
                    </BannerOverlay>
                </Banner>

                {/* 🔹 Intro */}
                <Intro>
                    {/* <IntroImage src={introImage} alt="Intro" /> */}
                    <IntroText>
                        "Our Hotel Management System streamlines reservation, check-in, billing, and housekeeping processes through an intuitive digital platform. Designed for hotel chains and individual properties alike."
                    </IntroText>
                </Intro>

                {/* 🔹 Description */}
                <Description>
                   The Hotel Management System is a full-stack web application designed to simplify and automate daily hotel operations. It offers separate dashboards for admins and customers, enabling real-time room availability tracking, secure booking management, check-in/check-out handling, and invoice generation. Admins can manage rooms, staff, and customer data, while customers can book rooms and receive instant confirmations. Built with React for the frontend and Node.js/Express with MongoDB for the backend, the system delivers a responsive, user-friendly experience across both desktop and mobile devices.
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
            </Container>
        </>
    );
};

export default ProjectDetails;
