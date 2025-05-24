import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from './Components/Home';
import Marketing from './Components/Marketing';
import Medicare from './Components/Medicare';
import Training from './Components/Training';
import About from './Components/About';
import MailSubmition from './Components/MailSubmition';
import GetContracted from './Components/GetContracted';
import CustomCanopy from './Components/Marketing Products/CustomCanopy';
import BoomersBag from './Components/Marketing Products/BoomersBag';
import BoomersPens from './Components/Marketing Products/BoomersPens';
import BoomersBuisnessCard from './Components/Marketing Products/BoomersBuisnessCard';
import HolaBook from './Components/Marketing Products/HolaBook';
import HelloBook from './Components/Marketing Products/HelloBook';

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
          element={<Marketing
            overlayIsActive={overlayIsActive}
            LoginisActive={LoginisActive}
            SignUpisActive={SignUpisActive}
            overlayisActive={overlayIsActive}
            LoginClick={LoginClick}
            SignUpClick={SignUpClick}
          >
            {/* Nav-Bar */}
            <div className="landing-page-nav-bar mx-5 px-5">
              <Link to={'/'} className='mx-3'>
                <img src="Images\logo.svg" alt="" />
              </Link>
              <div className='d-flex landing-page-nav-bar-Links my-5'>
                <Link to={'/about'} className='mx-2 marketing-page-nav-bar-link'>ABOUT</Link>
                <Link to={'/medicare-plan'} className='mx-2 marketing-page-nav-bar-link'>MEDICARE PLAN</Link>
                <Link to={'/get-contracted'} className='mx-2 marketing-page-nav-bar-link'>GET CONTRACTED</Link>
                <Link to={'/marketing'} className='mx-2 marketing-page-nav-bar-link' style={{ color: "#EC1C27" }}>MARKETING</Link>
                <Link to={'/training'} className='mx-2 marketing-page-nav-bar-link'>TRAINING</Link>
                <Link to={'/'} className='ms-2 marketing-page-nav-bar-link'>TECHNOLOGY</Link>
              </div>
            </div>

            {/* Nav-bar for Mobile */}
            <div className="landing-page-nav-bar-responsive my-4">
              <Link to={'/'} className='mx-4'>
                <img src="Images\logo.svg" alt="" />
              </Link>
              {/* Hamburger Icon */}
              <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <img src={isOpen ? '/Icons/xmark-solid.svg' : '/Icons/bars-solid.svg'} />
              </div>

              {/* Navigation Menu */}
              <nav className={`menu ${isOpen ? "active" : ""}`}>
                <ul>
                  <li style={{ borderBottom: "1px solid grey" }}><Link to={'/about'} className='mx-4 landing-page-nav-bar-link'>ABOUT</Link></li>
                  <li style={{ borderBottom: "1px solid grey" }}><Link to={'/medicare-plan'} className='mx-4 landing-page-nav-bar-link'>MEDICARE PLAN</Link></li>
                  <li style={{ borderBottom: "1px solid grey" }}><Link to={'/get-contracted'} className='mx-4 landing-page-nav-bar-link'>GET CONTRACTED</Link></li>
                  <li style={{ borderBottom: "1px solid grey" }}><Link to={'/marketing'} className='mx-4 landing-page-nav-bar-link'>MARKETING</Link></li>
                  <li style={{ borderBottom: "1px solid grey" }}><Link to={'/training'} className='mx-4 landing-page-nav-bar-link'>TRAINING</Link></li>
                  <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='ms-4 landing-page-nav-bar-link'>TECHNOLOGY</Link></li>
                </ul>
              </nav>
            </div>


            {/* Marketing Products Row 1 */}
            <div className="products-row products-row-1">
              <div className="products-responsive-row">

                <div className="product">
                  <Link to={'/custom-canopy-table-cover-and-pull-up-banner-package'} style={{ textDecoration: "none" }}>
                    <img src="Images\product-1.webp" className='product-img' alt="" />
                    <div className="product-name pt-2">Custom Canopy, Table Cover and Pull-up Banner package</div>
                    <div className="product-price">$ 0,00</div>
                  </Link>
                  <button className='add-to-cart-button my-2'>Add to cart</button>
                </div>
                <div className="product">
                  <Link style={{ textDecoration: "none" }} to={'/boomers-tote-bag'}>
                    <img src="Images\product-2.webp" className='product-img' alt="" />
                    <div className="product-name pt-2">Boomers Tote Bag</div>
                    <div className="product-price">$ 0,00</div>
                  </Link>
                  <button className='add-to-cart-button my-2'>Add to cart</button>
                </div>
              </div>
              <div className="products-responsive-row">

                <div className="product">
                  <Link style={{ textDecoration: "none" }} to={'/boomers-pen-for-events'}>
                    <img src="Images\product-3.webp" className='product-img' alt="" />
                    <div className="product-name pt-2">Boomers Pen for events</div>
                    <div className="product-price">$ 0,00</div>
                  </Link>
                  <button className='add-to-cart-button my-2'>Add to cart</button>
                </div>
                <div className="product">
                  <Link style={{ textDecoration: "none" }} to={'/boomers-business-cards-qty-1000'}>
                    <img src="Images\product-4.webp" className='product-img' alt="" />
                    <div className="product-name pt-2">Boomers Business Cards qty 1000</div>
                    <div className="product-price">$ 0,00</div>
                  </Link>
                  <button className='add-to-cart-button my-2'>Add to cart</button>
                </div>
              </div>
            </div>
            {/* Marketing Products Row 2 */}
            <div className="products-row products-row-2">
              <div className="product">
                <Link style={{ textDecoration: "none" }} to={'/2024-hola-boomer-book'}>
                  <img src="Images\product-5.webp" className='product-img' alt="" />
                  <div className="product-name pt-2">2024 Hola Boomer Book</div>
                  <div className="product-price">$ 0,00</div>
                </Link>
                <button className='add-to-cart-button my-2'>Add to cart</button>
              </div>
              <div className="product">
                <Link style={{ textDecoration: "none" }} to={'/content-marketing'}>
                  <img src="Images\product-6.webp" className='product-img' alt="" />
                  <div className="product-name pt-2">2024 Hello Boomer Book</div>
                  <div className="product-price">$ 0,00</div>
                </Link>
                <button className='add-to-cart-button my-2'>Add to cart</button>
              </div>
            </div>


            {/* Section-6 (Mail Submition)*/}
            <div className="Section-6-bg marketing-Section-6-bg"><div className='Section-6-bg-img'></div></div>
            <div className="Section-6-wrap mail-submit-marketing ">
              <MailSubmition />
            </div>

          </Marketing>
          }
        />
        <Route
          path="/medicare-plan"
          element={<Medicare
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
          element={<Training
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
          element={<About
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
          element={<GetContracted
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
          element={<CustomCanopy
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
          element={<BoomersBag
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
          element={<BoomersPens
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
          element={<BoomersBuisnessCard
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
          element={<HolaBook
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
          element={<HelloBook
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
