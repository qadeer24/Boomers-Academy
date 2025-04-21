import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from './Components/Registration'
import Login from './Components/Login';
import Home from './Components/Home';
import WelcomePage from './Components/Welcome'
import Marketing from './Components/Marketing';
import Medicare from './Components/Medicare';
import Training from './Components/Training';
import About from './Components/About';
import GetContracted from './Components/GetContracted';
import CustomCanopy from './Components/Marketing Products/CustomCanopy';
import BoomersBag from './Components/Marketing Products/BoomersBag';
import BoomersPens from './Components/Marketing Products/BoomersPens';
import BoomersBuisnessCard from './Components/Marketing Products/BoomersBuisnessCard';
import HolaBook from './Components/Marketing Products/HolaBook';
import HelloBook from './Components/Marketing Products/HelloBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome-page" element={<WelcomePage />} />  
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/medicare-plan" element={<Medicare />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-contracted" element={<GetContracted />} />
        <Route path="/custom-canopy-table-cover-and-pull-up-banner-package" element={<CustomCanopy />} />
        <Route path="/boomers-tote-bag" element={<BoomersBag />} />
        <Route path="/boomers-pen-for-events" element={<BoomersPens />} />
        <Route path="/boomers-business-cards-qty-1000" element={<BoomersBuisnessCard />} />
        <Route path="/2024-hola-boomer-book" element={<HolaBook />} />
        <Route path="/content-marketing" element={<HelloBook />} />
      </Routes>
    </Router>
  );
}

export default App;
