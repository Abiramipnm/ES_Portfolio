import { useEffect } from 'react';
import AboutSection from '../Components/AboutUs';
// import Footer from '../Components/Footer';
import HeroSection from '../Components/Hero';
import Navbar from '../Components/Navbar';
import OurProject from '../Components/OurProject';
import AtYourService from '../Components/Services';

function Landing() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AtYourService />
      <OurProject />
      {/* <Footer /> */}
    </>
  );
}

export default Landing;
