import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import './App.css';
import Banner from "./banner";
import AboutUs from "./AboutUs";
import Gallery from './Gallery';
import ContactUs from "./Contactus";
function App() {
  return (
    <Router>
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Gallery />
      <ContactUs/>
    </Router>
    
  );
}

export default App;

