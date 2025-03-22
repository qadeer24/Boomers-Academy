import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from './Components/Registration'
import Login from './Components/Login';
import Home from './Components/Home';
import WelcomePage from './Components/Welcome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome-page" element={<WelcomePage />} />  
      </Routes>
    </Router>
  );
}

export default App;
