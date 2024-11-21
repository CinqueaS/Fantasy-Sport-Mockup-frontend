import React from "react";
import { Link } from 'react-router-dom'
import "../app.css";


function AboutUs() {
  return (
    <div className="about-us-container">
        <Link to="/" className="home-link">
        <button className="auth-button">Home</button>
        </Link>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Galactic Gridiron Fantasy League!</strong>, Here, we combine the thrill of football with the boundless possibilities of a sci-fi universe. In this league, you're not just managing players: you're commanding teams of genetically enhanced athletes, alien powerhouses, and cybernetic prodigies from across the cosmos. Each team represents a different planet, species, or faction, competing for the ultimate prize: the coveted Star Cup, the most prestigious trophy in the galax. With interstellar rivalries and high-stakes strategies, every game is an adventure beyond
        the stars.
      </p>
      <p>
      Our league is more than just stats and scores it's a story-driven experience. Each season unfolds with narrative twists as teams navigate galactic politics, dangerous wormhole travel to away games, and the whims of interplanetary fans. You'll need to balance recruiting talent from distant worlds, negotiating with alien agents, and upgrading your team's tech to gain an edge on the field. The lore grows with every drait, trade, and touchdown, making the Galactic Gridiron Fantasy League a living,breathing universe.
      </p>
      <ul>
  <li><strong>Unique Teams:</strong> Command genetically enhanced athletes, alien powerhouses, and cybernetic prodigies from across the galaxy.</li>
  <li><strong>Interstellar Lore:</strong> Experience a story-driven league with twists involving galactic politics, wormhole travel, and interplanetary fan dynamics.</li>
  <li><strong>Customizable Strategy:</strong> Recruit talent from distant worlds, negotiate with alien agents, and upgrade your team's tech to dominate the field.</li>
      </ul>
      <p>
      Whether you're a veteran strategist or a rookie coach, there's a place for you in this cosmic competition. Join the ranks of the galaxy's greatest mines and lead your team to glory. Will you rise as a legend in the Galactic Gridiron, or will your team be lost to the void? 
      </p>
      <p>
        Join us today and turn your sports knowledge into glory. The stars await your decision. Let the games begin!
      </p>
      <h3>Let the games begin!</h3>
      <p>Galactic Gridiron Fantasy League!</p>
    </div>
  );
}

export default AboutUs;
