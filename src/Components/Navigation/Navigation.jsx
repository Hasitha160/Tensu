import "./Navigation.css";

function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <button className="active-btn">Home</button>

        <div className="separator"></div>

        <ul className="nav-links">
          <li><a href="/">About Us</a></li>
          <li><a href="/">Story</a></li>
          <li><a href="/">Road Map</a></li>
          <li><a href="/">Tokenomics</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;