const teams = [
    { name: "AC", players: ["Player 1", "Player 2", "Player 3"] },
    { name: "Cinquea", players: ["Player 1", "Player 2", "Player 3"] },
    { name: "Chris", players: ["Player 1", "Player 2", "Player 3"] },
    { name: "Jordan", players: ["Player 1", "Player 2", "Player 3"] } // New Team Added
  ];
  
  const players = [
    "Player 1", "Player 2", "Player 3",
    "Player 4", "Player 5", "Player 6",
    "Player 7", "Player 8", "Player 9"
  ];
  
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