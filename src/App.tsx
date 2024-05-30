import Header from "./components/Header/Header";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Header/Loading";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
    </div>
  );
}
