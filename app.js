const teams = [
    { name: "AC", players: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6"] },
    { name: "Cinquea", players: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6"] },
    { name: "Chris", players: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6"] },
    { name: "Jordan", players: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6"] } // New Team Added
  ];
  
  let players = [
    { name: "Player 1", position: "QB", team: "Team A", ranking: 5 },
    { name: "Player 2", position: "RB", team: "Team B", ranking: 3 },
    
];

function filterPlayers() {
    const searchText = document.getElementById('player-search').value.toLowerCase();
    const selectedPosition = document.getElementById('position-filter').value;
    
    const filteredPlayers = players.filter(player => {
        return (player.name.toLowerCase().includes(searchText) || 
                player.position.toLowerCase().includes(selectedPosition.toLowerCase()) || 
                player.team.toLowerCase().includes(searchText));
    });
    
    displayFilteredPlayers(filteredPlayers);
}

function displayFilteredPlayers(filteredPlayers) {
    const playersList = document.getElementById('filtered-players-list');
    playersList.innerHTML = '';
    
    filteredPlayers.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.textContent = `${player.name} (${player.position}) - Team: ${player.team}`;
        playersList.appendChild(playerItem);
    });
}
  
  function renderTeams() {
    const teamsList = document.getElementById('teams-list');
    teamsList.innerHTML = '';
    teams.forEach((team, index) => {
      const teamItem = document.createElement('li');
      teamItem.textContent = team.name;
      teamItem.onclick = () => showPlayers(index);
      teamsList.appendChild(teamItem);
    });
  }
  
  function showPlayers(teamIndex) {
    const playerList = document.getElementById('players-list');
    playerList.innerHTML = '';
    teams[teamIndex].players.forEach(player => {
      const playerItem = document.createElement('li');
      playerItem.textContent = player;
      playerList.appendChild(playerItem);
    });
  }
  
  function createPlayer() {
    const newPlayerName = document.getElementById('new-player-name').value;
    if (newPlayerName) {
      players.push(newPlayerName);  
      renderPlayers();  
      document.getElementById('new-player-name').value = '';  // Clear input field
    }
  }
  
  // Delete Player
  function deletePlayer(playerName) {
    const index = players.indexOf(playerName);
    if (index > -1) {
      players.splice(index, 1);
      renderPlayers();
    }
  }
  
  // Render the players
  function renderPlayers() {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';
    players.forEach(player => {
      const playerItem = document.createElement('li');
      playerItem.textContent = player;
      playersList.appendChild(playerItem);
    });
  }
  
  // Initial render
  renderTeams();
  renderPlayers();

  function highlightActiveNav() {
    const navItems = document.querySelectorAll('#side-nav nav ul li a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(i => i.parentElement.classList.remove('active'));
        item.parentElement.classList.add('active');
      });
    });
  }
  highlightActiveNav();

  function changeTeamName() {
    const newTeamName = document.getElementById('new-team-name').value;
    if (newTeamName && teams.length > 0) {
      teams[0].name = newTeamName; // Changing the name of the first team for now, but you could allow any team
      renderTeams(); // Re-render teams list with the updated name
      document.getElementById('new-team-name').value = ''; // Clear the input field
    }
  }

  

// Call this function to load players when the app starts
fetchPlayers();

function showPlayers(teamIndex) {
  const playerList = document.getElementById('players-list');
  playerList.innerHTML = '';

  // Toggle the visibility of players
  let isPlayerVisible = false;

  teams[teamIndex].players.forEach(player => {
    const playerItem = document.createElement('li');
    playerItem.textContent = player;
    playerItem.onclick = () => {
      // If a player is clicked, toggle visibility of others
      if (!isPlayerVisible) {
        playerList.innerHTML = ''; // Hide others
        playerItem.textContent = player; // Show the clicked player
        isPlayerVisible = true;
      }
    };
    playerList.appendChild(playerItem);
  });
}

function comparePlayers() {
  const player1 = document.getElementById('player-compare-1').value;
  const player2 = document.getElementById('player-compare-2').value;
  
  // Example of player data; you can fetch live data via an API
  const playerData = {
      "Player 1": { stats: { touchdowns: 10, yards: 1000 } },
      "Player 2": { stats: { touchdowns: 8, yards: 1200 } },
      // More players...
  };

  const comparison = `
      <h3>Comparison</h3>
      <p>${player1}: ${playerData[player1].stats.touchdowns} TDs, ${playerData[player1].stats.yards} Yards</p>
      <p>${player2}: ${playerData[player2].stats.touchdowns} TDs, ${playerData[player2].stats.yards} Yards</p>
  `;
  document.getElementById('comparison-results').innerHTML = comparison;
}

