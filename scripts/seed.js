// scripts/seed.js

import "dotenv/config"; // loads environment variables from the .env file
import connectDB from "../config/db.js"; // imports the database connection function
import Team from "../models/Team.js"; // imports the Team model
import Player from "../models/Player.js"; // imports the Player model
import Game from "../models/Game.js"; // imports the Game model
import teams from "../data/teams.js"; // imports sample team data
import players from "../data/players.js"; // imports sample player data
import games from "../data/games.js"; // imports sample game data

const seedData = async () => {
  try {
    await connectDB(); // connects to MongoDB before inserting data

    await Team.deleteMany(); // removes all existing team documents
    await Player.deleteMany(); // removes all existing player documents
    await Game.deleteMany(); // removes all existing game documents

    const createdTeams = await Team.insertMany(teams); // inserts all sample teams into the database

    const teamMap = {}; // creates an empty object to store team names and their IDs

    createdTeams.forEach((team) => {
      teamMap[team.name] = team._id; // saves each team name as a key and its MongoDB ID as the value
    });

    const playerData = players.map((player) => ({
      name: player.name, // copies the player name
      age: player.age || 25, // uses the player age, or defaults to 25 if no age is provided
      position: player.position, // copies the player position
      team: teamMap[player.teamName] // replaces the team name with the real team ObjectId
    }));

    const gameData = games.map((game) => ({
      homeTeam: teamMap[game.homeTeamName], 
      // replaces home team name with the real team ObjectId
      awayTeam: teamMap[game.awayTeamName], 
      // replaces away team name with the real team ObjectId
      date: game.date, // copies the game date
      location: game.location, // copies the game location
      homeScore: 0, // sets the default home score
      awayScore: 0 // sets the default away score
    }));

    await Player.insertMany(playerData); // inserts all converted player data into the players collection
    await Game.insertMany(gameData); // inserts all converted game data into the games collection

    console.log("Teams, players, and games seeded"); // confirms the seed ran successfully
    process.exit(); // stops the script after success
  } catch (error) {
    console.error(error); // shows the error if something fails
    process.exit(1); // stops the script with a failure code
  }
};

seedData(); // runs the seed function
