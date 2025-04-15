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
      </Routes>
    </Router>
  );
}

export default App;
