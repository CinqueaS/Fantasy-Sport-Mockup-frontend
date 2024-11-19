
import React, { useState } from "react"
import "./index.css"

function App() {
  return (
    <div className="app">
      <SideNav />
      <TopNav />
      <Breadcrumbs />
      <MainContent />
    </div>
  )
}

function SideNav() {
  return (
    <div id="side-nav">
      <header id="top-nav">
        <div className="logo-container">
          <img src="/logo.png" alt="Fantasy Football Logo" id="logo" />
        </div>
      </header>
      <nav>
        <ul>
          <li><a href="#">Fantasy Football</a></li>
          <li><a href="#">Teams</a></li>
          <li><a href="#">Players</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
      <footer>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </footer>
    </div>
  )
}

function TopNav() {
  return (
    <header id="top-nav">
      <button onClick={() => window.location.href = "https://www.apple.com/app-store/"}>App Store</button>
      <button onClick={() => window.location.href = "https://play.google.com/store"}>Google Play</button>
      <button onClick={() => window.location.href = "login.html"}>Login</button>
      <button onClick={() => window.location.href = "signup.html"}>Sign Up</button>
    </header>
  )
}

function Breadcrumbs() {
  return (
    <div id="breadcrumbs">
      <a href="#">Home</a> &gt; <a href="#">Teams</a> &gt; <span>Team Details</span>
    </div>
  )
}

function MainContent() {
  return (
    <div id="main-content">
      <div className="content-header">
        <h2>Your Teams</h2>
      </div>
      <div className="content-body">
        <div id="team-list">
          <h3>Teams</h3>
          <ul id="teams-list"></ul>
        </div>
        <div id="player-list">
          <h3>Players</h3>
          <ul id="players-list"></ul>
        </div>
      </div>
      <Controls />
      <FantasyLinks />
      <ComparisonSection />
    </div>
  )
}

function Controls() {
  const [teamName, setTeamName] = useState("")
  const [playerSearch, setPlayerSearch] = useState("")
  const [positionFilter, setPositionFilter] = useState("all")

  const handleSaveTeamName = () => {
    console.log("Saved Team Name:", teamName)
    setTeamName("")
  }

  const handleSearchPlayers = () => {
    console.log("Search Players:", playerSearch, "Filter:", positionFilter)
  }

  return (
    <div className="controls-container">
      <div className="team-name-section">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter your team name"
        />
        <button onClick={handleSaveTeamName}>Save Team Name</button>
      </div>
      <div className="player-search-section">
        <input
          type="text"
          value={playerSearch}
          onChange={(e) => setPlayerSearch(e.target.value)}
          placeholder="Search Players"
        />
        <select
          value={positionFilter}
          onChange={(e) => setPositionFilter(e.target.value)}
        >
          <option value="all">All Positions</option>
          <option value="QB">Quarterback</option>
          <option value="RB">Running Back</option>
          <option value="WR">Wide Receiver</option>
        </select>
        <button onClick={handleSearchPlayers}>Search</button>
      </div>
    </div>
  )
}

function FantasyLinks() {
  return (
    <div className="fantasy-links">
      <h3>Other Fantasy Leagues</h3>
      <div className="fantasy-league-buttons">
        <a href="https://basketball.fantasy.com" className="fantasy-btn basketball"></a>
        <a href="https://baseball.fantasy.com" className="fantasy-btn baseball"></a>
        <a href="https://soccer.fantasy.com" className="fantasy-btn soccer"></a>
        <a href="https://hockey.fantasy.com" className="fantasy-btn hockey"></a>
      </div>
    </div>
  )
}

function ComparisonSection() {
  return (
    <div>
      <select id="player-compare-1"></select>
      <select id="player-compare-2"></select>
      <button onClick={() => console.log("Compare Players")}>Compare</button>
      <div id="comparison-results"></div>
    </div>
  )
}

export default App
