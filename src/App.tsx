import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Landing";
import Hive from "./Pages/Hive";
import Exam from "./Pages/Exam";
import ZTF from "./Pages/024";
import Maac from "./Pages/Maac";
import Hotel from "./Pages/Hotel";
import AboutSection from './Components/AboutUs';
import AtYourService from './Components/Services';
import OurProject from './Components/OurProject';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<AtYourService />} />
        <Route path="/projects" element={<OurProject />} />
        <Route path="/project/hotel" element={<Hotel />} />
        <Route path="/project/hive" element={<Hive />} />
        <Route path="/project/exam" element={<Exam />} />
        <Route path="/project/ztf" element={<ZTF />} />
        <Route path="/project/maac" element={<Maac />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
