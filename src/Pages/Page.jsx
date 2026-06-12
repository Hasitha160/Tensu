import "./Page.css";
import Navigation from "../Component/Navigation/Navigation";
import Footer from "../Component/Footer/Footer";
import ninjaImg from "../assets/ninja.png";
import swordImg from "../assets/01.png";
import ninjaImg2 from "../assets/02.png";
import pagodaDivider from "../assets/03.png";
import gateimg from "../assets/04.png";
import ninja from "../assets/05.png";
import mount from "../assets/06.png";
import Arch from "../assets/11.png";
import Plate from "../assets/12.png";
import Plate1 from "../assets/12.png";
import Plate2 from "../assets/12.png";

function Page() {
  return (
    <div className="home">
      <Navigation />

      <section id="home" className="hero">
        <div className="left-content">
          <h1>TETSU</h1>

          <p>
            Welcome to Tetsu, where innovation meets tradition creating
            powerful solutions for the future, inspired by timeless values.
          </p>

          <button className="buy-btn">Buy Now</button>

          <img
                src={swordImg}
                alt="sword"
                className="sword"
            />
        </div>

        <div className="right-content">
          <div className="sun"></div>

          <img
                src={ninjaImg}
                alt="ninja"
                className="ninja"
            />

          <div className="japanese">
            侍
            <br />
            強
            <br />
            さ
          </div>
        </div>
      </section>

      <div className="ticker">
        $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU #
      </div>
      
      <section id="about" className="about-story">
  <div className="about-section">
    <h2>ABOUT US</h2>

    <p>
      Tetsu Token embodies the strength and resilience of its namesake, "Tetsu" meaning iron in Japanese. Inspired by the unwavering spirit of the samurai, Tetsu Token is designed to provide a secure, reliable, and enduring platform for the future of decentralized finance. With a focus on transparency, community, and innovation, Tetsu seeks to empower users with the tools and opportunities needed to build lasting wealth in the blockchain space. Whether you are a seasoned investor or a newcomer, Tetsu Token is your ally in navigating the evolving world of crypto with honor and trust.
    </p>
  </div>

 <div id="story" className="story-section">
    <div className="story-image">
      <img src={ninjaImg2} alt="story ninja" />
    </div>

    <div className="story-content">
      <h2>STORY</h2>

      <p>
        Born from the strength and resilience of ancient traditions, Tetsu Token draws its name from the Japanese word for "iron," symbolizing unyielding fortitude and the power of transformation. Just as iron has shaped the world—from samurai swords to modern industry—Tetsu Token aims to forge a new path in the digital realm. Our mission is to create a community-driven ecosystem, where innovation and strength combine to build lasting value. Tetsu Token is more than just a cryptocurrency; it is a symbol of endurance, trust, and a commitment to breaking barriers. Join us as we embark on this journey to redefine the future of decentralized finance.
      </p>

      
    </div>
    <div className="divider-container">
  <img
    src={pagodaDivider}
    alt="Pagoda Divider"
    className="divider-image"
  />

  <img
    src={Arch}
    alt="Arch"
    className="arch-image"
  />

  <img
    src={Arch}
    alt="Arch"
    className="arch-image1"
  />


</div>
  </div>
</section>

{/* ROADMAP SECTION */}

<section id="roadmap" className="roadmap-section">
  <div className="roadmap-content">
    <div className="roadmap-left">

      <div className="roadmap-step1">
  <p>
    Establish the foundation by defining goals,
    identifying key stakeholders, and developing a
    strategic plan. This phase will focus on research,
    market analysis, and setting clear objectives.
  </p>
</div>

<div className="roadmap-step">
  <p>
    Begin the development phase, including product
    design, prototype creation, and initial
    implementation. Collaborate with key teams to
    refine the product and ensure functionality.
  </p>
</div>

<div className="roadmap-step1">
  <p>
    Conduct thorough testing and quality assurance to
    identify any issues or areas for improvement. Gather
    user feedback and make necessary adjustments to
    ensure optimal performance and user experience.
  </p>
</div>

<div className="roadmap-step">
  <p>
    Officially launch the product or service to the public,
    followed by targeted marketing efforts. Focus on
    building a strong user base, monitoring performance,
    and scaling the project as it gains traction.
  </p>
</div>

    </div>

    <div className="roadmap-right">
      <h2>ROADMAP</h2>

      <img
        src={gateimg}
        alt="Torii"
        className="torii-image"
      />
    </div>
  </div>
</section>

{/* TOKENOMICS */}

<section id="tokenomics" className="tokenomics-section">

  <h2>TOKENOMICS</h2>

  <div className="tokenomics-content">

    <div className="tokenomics-ninja1">
      <img
        src={ninja}
        alt="Ninja"
      />
    </div>

    <div className="Plate-image">
      <img
        src={Plate}
        alt="Plate"
      />
    </div>

    <div className="Plate-image1">
      <img
        src={Plate1}
        alt="Plate"
      />
    </div>

     <div className="Plate-image2">
      <img
        src={Plate2}
        alt="Plate"
      />
    </div>



    <div className="tokenomics-cards">

      

    </div>

  </div>
   <div className="ticker">
        $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU # $TETSU #
      </div>

</section>

{/* COMMUNITY SECTION */}

<section className="community-section">

  <div className="mountain-bg">

    <div className="community-icons">
      <button>📄</button>
      <button>✈️</button>
      <button>✕</button>
    </div>

    <h2 className="contract-address">
      CA : 0x712927A7A2570a5a3278eD
    </h2>

    <div className="tokenomics-ninja">
      <img
        src={mount}
        alt="Ninja"
      />
    </div>

    <p className="community-text">
      Step into the world of strength, honor, and innovation with Tetsu.
      By joining our community, you become part of a dynamic group of
      forward-thinkers passionate about pushing boundaries and shaping
      the future.
    </p>

  </div>

</section>

      <Footer />
    </div>
  );
}



export default Page;