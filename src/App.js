import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "./Components/Home";
import Marketing from "./Components/Marketing";
import Medicare from "./Components/Medicare";
import Training from "./Components/Training";
import About from "./Components/About";
import MailSubmition from "./Components/MailSubmition";
import GetContracted from "./Components/GetContracted";
import CustomCanopy from "./Components/Marketing Products/CustomCanopy";
import BoomersBag from "./Components/Marketing Products/BoomersBag";
import BoomersPens from "./Components/Marketing Products/BoomersPens";
import BoomersBuisnessCard from "./Components/Marketing Products/BoomersBuisnessCard";
import HolaBook from "./Components/Marketing Products/HolaBook";
import HelloBook from "./Components/Marketing Products/HelloBook";

function App() {
  const [LoginisActive, setLoginIsActive] = useState(false);
  const [SignUpisActive, setSignUpIsActive] = useState(false);

  const LoginClick = () => {
    setLoginIsActive(!LoginisActive);
  };
  const SignUpClick = () => {
    setSignUpIsActive(!SignUpisActive);
  };

  const [overlayIsActive, setOverlayIsActive] = useState(false);

  useEffect(() => {
    if (SignUpisActive || LoginisActive) {
      setOverlayIsActive(true);
    } else {
      setOverlayIsActive(false);
    }
  }, [SignUpisActive, LoginisActive]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/marketing"
          element={
            <Marketing
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            ></Marketing>
          }
        />
        <Route
          path="/medicare-plan"
          element={
            <Medicare
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/training"
          element={
            <Training
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/get-contracted"
          element={
            <GetContracted
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/custom-canopy-table-cover-and-pull-up-banner-package"
          element={
            <CustomCanopy
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/boomers-tote-bag"
          element={
            <BoomersBag
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/boomers-pen-for-events"
          element={
            <BoomersPens
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/boomers-business-cards-qty-1000"
          element={
            <BoomersBuisnessCard
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/2024-hola-boomer-book"
          element={
            <HolaBook
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
        <Route
          path="/content-marketing"
          element={
            <HelloBook
              overlayIsActive={overlayIsActive}
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              overlayisActive={overlayIsActive}
              LoginClick={LoginClick}
              SignUpClick={SignUpClick}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
