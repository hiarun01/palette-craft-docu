import {NavLink} from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <header>Palette Craft</header>
      </div>
      {/* nav */}
      <nav>
        <NavLink to="ai-ethics">Ai ethic</NavLink>
        <NavLink to="how-ai-work">how-ai-work</NavLink>
        <NavLink to="/terms-of-service">terms-of-service</NavLink>
        <NavLink to="/privacy-policy">privacy-policy</NavLink>
      </nav>
    </div>
  );
};

export default Home;
