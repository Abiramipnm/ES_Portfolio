import React from "react";
import styled from "styled-components";
import banner from "../assets/Maac/Banner.jpg";
import ss1 from "../assets/Maac/screenshot-1.png";
import ss2 from "../assets/Maac/screenshot-2.png";
import ss3 from "../assets/Maac/screenshot-3.png";
import ss4 from "../assets/Maac/screenshot-4.png";
import ss5 from "../assets/Maac/screenshot-5.png";
import ss6 from "../assets/Maac/screenshot-6.png";
import ss7 from "../assets/Maac/screenshot-7.png.jpg";
import ss8 from "../assets/Maac/screenshot-8.png.jpg";
import ss9 from "../assets/Maac/screenshot-9.png.jpg";
import ss10 from "../assets/Maac/screenshot-10.png.jpg";
import Navbar from "../Components/Navbar";

const Container = styled.div``;

// 🔹 1. Banner Section
const Banner = styled.section`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  height: 80vh;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
            <BannerText>Empowering Online Retail <br />through Shopify & Smart Commerce</BannerText>
          </BannerOverlay>
        </Banner>

        {/* 🔹 Intro */}
        <Intro>
          <IntroText>
            "Launch and scale your online store — with powerful Shopify solutions tailored for performance and growth."
          </IntroText>
        </Intro>

        <Description>
          {"    "} A modern eCommerce development approach focused on building high-converting online stores using Shopify. The mission is to help brands grow through seamless shopping experiences, optimized performance, and scalable solutions.
          With a skilled team of Shopify developers and designers, services include custom theme development, app integration, storefront optimization, and ongoing support. Whether you're launching a new store or migrating from another platform, the focus is always on usability, speed, and customer engagement.
          From small businesses to enterprise retailers, this Shopify-powered model delivers everything needed to establish a strong digital presence, boost sales, and grow with confidence in the competitive eCommerce space.
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
