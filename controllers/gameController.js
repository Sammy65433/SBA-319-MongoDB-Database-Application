// controllers/gameController.js

import Game from "../models/Game.js"; // imports the Game model so we can work with game data

export const getAllGames = async (req, res) => {
  try {
    const games = await Game.find().populate("homeTeam awayTeam"); // finds all games and replaces team ids with full team info
    res.status(200).json(games); // sends the list of games
  } catch (error) {
    res.status(500).json({ error: error.message }); // sends server error if something goes wrong
  }
};

export const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body); // creates a new game using request body data
    res.status(201).json(game); // sends back the created game
  } catch (error) {
    res.status(400).json({ error: error.message }); // sends validation or request error
  }
};

export const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // returns the updated game
      runValidators: true // validates updated fields against schema rules
    });

    if (!game) {
      return res.status(404).json({ message: "Game not found" }); // sends not found if no game matches the id
    }

    res.status(200).json(game); // sends updated game data
  } catch (error) {
    res.status(400).json({ error: error.message }); // sends error if update fails
  }
};

export const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id); // finds a game by id and removes it

    if (!game) {
      return res.status(404).json({ message: "Game not found" }); // sends not found if game is missing
    }

    res.status(200).json({ message: "Game deleted successfully" }); // confirms successful deletion
  } catch (error) {
    res.status(500).json({ error: error.message }); // sends server error if deletion fails
  }
};