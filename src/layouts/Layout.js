// Layout.js
import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footer";

const Layout = ({
  children,
  overlayIsActive,
  LoginisActive,
  SignUpisActive,
  LoginClick,
  SignUpClick,
}) => {
  return (
    <>
      {/* Header */}
      <header>
        <Header
          overlayIsActive={overlayIsActive}
          LoginisActive={LoginisActive}
          SignUpisActive={SignUpisActive}
          LoginClick={LoginClick}
          SignUpClick={SignUpClick}
        />
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
