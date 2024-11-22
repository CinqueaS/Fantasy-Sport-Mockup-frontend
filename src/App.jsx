import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Login from './components/Login';
import Signup from "./components/Signup"
import AboutUs from "./components/AboutUs"
import Players from './components/Players'
import Teams from './components/Teams'
import Landing from './components/Landing';
import * as authService from '../src/services/authService';


export const AuthedUserContext = createContext(null)

function App() {
  // Landing wont render because of the way this line is being used. That is the main issue.
  const [user, setUser] = useState(authService.getUser())
  return (
    <AuthedUserContext.Provider value={user}>

      
      <Routes>
        {user ? (
          <>
            <Route path="/about-Us" element={<AboutUs />} />
            <Route path="/players" element={<Players />} />
            <Route path="/teams" element={<Teams />} />
          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}

        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />

      </Routes>
    </AuthedUserContext.Provider>
  )
}

// function SideNav() {
//   const location = useLocation()
//   if (location.pathname !== "/") {
//     return null
//   }

//   return (
//     <>

//     </>
//     <div id="side-nav">
//       <header id="top-nav">
//         <div className="logo-container">
//           <img src="/logo.png" alt="Fantasy Football Logo" id="logo" />
//         </div>
//       </header>
//       <nav>
//         <ul>
//           <li><Link to="/">Fantasy Football</Link></li>
//           <li><Link to="/teams">Teams</Link></li>
//           <li><Link to="/players">Players</Link></li>
//           <li><Link to="/about-Us" >About Us</Link></li>
//         </ul>
//       </nav>
//       <footer>
//         <ul>
//           <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook"><i className="fab fa-facebook-f"></i></a></li>
//           <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter"><i className="fab fa-twitter"></i></a></li>
//           <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram"><i className="fab fa-instagram"></i></a></li>
//           <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin"><i className="fab fa-linkedin-in"></i></a></li>
//         </ul>
//       </footer>
//     </div>
//   )
// }

// function MainLayout() {
//   return (
//     <>
//       <TopNav />
//       <Breadcrumbs />
//       <MainContent />
//     </>
//   )
// }

// function TopNav() {
//   return (
//     <header id="top-nav">
//       <button onClick={() => window.location.href = "https://www.apple.com/app-store/"}>App Store</button>
//       <button onClick={() => window.location.href = "https://play.google.com/store"}>Google Play</button>
//       <Link to="/login">
//         <button>Login</button>
//       </Link>
//       <Link to="/signup">
//         <button>Sign Up</button>
//       </Link>
//     </header>
//   )
// }

// function Breadcrumbs() {
//   return (
//     <div id="breadcrumbs">
//       <a href="#">Home</a> &gt; <a href="#">Teams</a> &gt; <span>Team Details</span>
//     </div>
//   )
// }

// function MainContent() {
//   return (
//     <div id="main-content">
//       <div className="content-header">
//         <h2>Your Teams</h2>
//       </div>
//       <div className="content-body">
//         <div id="team-list">
//           <h3>Teams</h3>
//           <ul id="Teams.jsx"></ul>
//         </div>
//         <div id="player-list">
//           <h3>Players</h3>
//           <ul id="Players.jsx"></ul>
//         </div>
//       </div>
//       <Controls />
//       <FantasyLinks />
//       <ComparisonSection />
//     </div>
//   )
// }

// function Controls() {
//   const [teamName, setTeamName] = useState("")
//   const [playerSearch, setPlayerSearch] = useState("")
//   const [positionFilter, setPositionFilter] = useState("all")

//   const handleSaveTeamName = () => {
//     console.log("Saved Team Name:", teamName)
//     setTeamName("")
//   }

//   const handleSearchPlayers = () => {
//     console.log("Search Players:", playerSearch, "Filter:", positionFilter)
//   }

//   return (
//     <div className="controls-container">
//       <div className="team-name-section">
//         <input
//           type="text"
//           value={teamName}
//           onChange={(e) => setTeamName(e.target.value)}
//           placeholder="Enter your team name"
//         />
//         <button onClick={handleSaveTeamName}>Save Team Name</button>
//       </div>
//       <div className="player-search-section">
//         <input
//           type="text"
//           value={playerSearch}
//           onChange={(e) => setPlayerSearch(e.target.value)}
//           placeholder="Search Players"
//         />
//         <select
//           value={positionFilter}
//           onChange={(e) => setPositionFilter(e.target.value)}
//         >
//           <option value="all">All Positions</option>
//           <option value="QB">Quarterback</option>
//           <option value="RB">Running Back</option>
//           <option value="WR">Wide Receiver</option>
//         </select>
//         <button onClick={handleSearchPlayers}>Search</button>
//       </div>
//     </div>
//   )
// }

// function FantasyLinks() {
//   return (
//     <div className="fantasy-links">
//       <h3>Other Fantasy Leagues</h3>
//       <div className="fantasy-league-buttons">
//         <a href="https://basketball.fantasy.com" className="fantasy-btn basketball"></a>
//         <a href="https://baseball.fantasy.com" className="fantasy-btn baseball"></a>
//         <a href="https://soccer.fantasy.com" className="fantasy-btn soccer"></a>
//         <a href="https://hockey.fantasy.com" className="fantasy-btn hockey"></a>
//       </div>
//     </div>
//   )
// }

// function ComparisonSection() {
//   return (
//     <div>
//       <select id="player-compare-1"></select>
//       <select id="player-compare-2"></select>
//       <button onClick={() => console.log("Compare Players")}>Compare</button>
//       <div id="comparison-results"></div>
//     </div>
//   )
// }

export default App
