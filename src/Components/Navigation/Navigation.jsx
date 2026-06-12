import "./Navigation.css";

function Navigation() {
  return (
    <nav className="custom-navbar">
      <div className="nav-container">

        <a href="#home" className="active-btn">
          Home
        </a>

        <div className="separator"></div>

        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#story">Story</a></li>
          <li><a href="#roadmap">Road Map</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navigation;