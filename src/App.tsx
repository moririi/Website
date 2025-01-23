// import Header from "./components/Header/Header";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Header/Loading";
import { CSSTransition } from "react-transition-group";
import { AuroraBackgroundDemo } from "./components/Header/MainBackgroundAnim";
import { AboutMe } from "./components/Introduction/Introduction";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return (
      <>
        <CSSTransition
          in={isLoading}
          timeout={100}
          classNames="fade"
          unmountOnExit
        >
          <Loading />
        </CSSTransition>
        <CSSTransition
          in={!Loading}
          timeout={100}
          classNames="fade"
          unmountOnExit
        ></CSSTransition>
      </>
    );
  }

  return (
    <div>
      {/* <Header /> */}

      <AuroraBackgroundDemo />
      <AboutMe />
    </div>
  );
}
