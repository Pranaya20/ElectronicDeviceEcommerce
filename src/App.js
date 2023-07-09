import LandingPage from "./View/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarOffer from "./Components/NavbarOffer";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SmartPhone from "./View/SmartPhone";
import ProductDescription from "./View/ProductDescription";

function App() {
  return (
    <div>
      <Router>
        <NavbarOffer/>
        <Navbar/>
        <Routes basename="/">
          <Route path="/" element={<LandingPage />} />
           <Route path="/smartphones/" element={<SmartPhone/>} /> 
           <Route path="/productdescription/" element={<ProductDescription/>}/> 
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
