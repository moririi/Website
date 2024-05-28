import Tekken from "../../assets/Images/Tekken.gif";
import "./Gif.css";

function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(" + Tekken + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    ></div>
  );
}

export default Home;
