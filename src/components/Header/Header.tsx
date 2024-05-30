import "./Header.css";
import Home from "./Gif";
import React from "react";
const Header: React.FC = () => {
  return (
    <>
      <Home></Home>
      <div className="hero">
        <div className="gradient absolute"></div>
        <header className="absolute inset-x-0 top-0 z-50 flex">
          <div className="circle absolute ml-48  "></div>
          <div className="square absolute ml-80 mt-48 "></div>
          <div className="square2 absolute mr-36 mt-28"></div>
        </header>
        <div className="content">
          <h1>こんにちわ!</h1>
          <h2>
            I'm an aspiring{" "}
            <span className="highlight">Software Developer</span>
          </h2>
        </div>
        <footer className="flex absolute inset-x-0 bottom-0 z-50 justify-end">
          <div className="triangle mr-0 my-32"></div>
        </footer>
      </div>
    </>
  );
};
export default Header;
