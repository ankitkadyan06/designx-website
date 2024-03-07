import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import IBPMSMain from "./Pages/IBPMSMain";
import ArtificialIntelligenceMain from "./Pages/ArtificialIntelligenceMain";
import DigitalTwinMain from "./Pages/DigitalTwinMain";
import IOTGateWayMain from "./Pages/IOTGateWayMain";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ESGMain from "./Pages/ESGMain";
import UseCases from "./Pages/UseCases";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/IIOT" element={<BlogDetails />} />
        <Route path="/iBPMS" element={<IBPMSMain />} />
        <Route
          path="/ArtificialIntelligence"
          element={<ArtificialIntelligenceMain />}
        />
        <Route path="/DigitalTwin" element={<DigitalTwinMain />} />
        <Route path="/IOTGateway" element={<IOTGateWayMain />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/ESG" element={<ESGMain />} />
        <Route path="/use-cases" element={<UseCases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
