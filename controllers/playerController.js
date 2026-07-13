// controllers/playerController.js

import Player from "../models/Player.js"; // imports the Player model so we can work with player data

export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find().populate("team"); // finds all players and replaces team id with full team data
    res.status(200).json(players); // sends the list of players
  } catch (error) {
    res.status(500).json({ error: error.message }); // sends server error if something goes wrong
  }
};

export const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body); // creates a new player using request body data
    res.status(201).json(player); // sends back the new player
  } catch (error) {
    res.status(400).json({ error: error.message }); // sends validation or bad request error
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // returns the updated player
      runValidators: true // checks updated values against schema rules
    });

    if (!player) {
      return res.status(404).json({ message: "Player not found" }); // sends not found if player id does not exist
    }

    res.status(200).json(player); // sends back updated player data
  } catch (error) {
    res.status(400).json({ error: error.message }); // sends error if update fails
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id); // deletes a player by id

    if (!player) {
      return res.status(404).json({ message: "Player not found" }); // sends not found if no player is found
    }

    res.status(200).json({ message: "Player deleted successfully" }); // confirms deletion
  } catch (error) {
    res.status(500).json({ error: error.message }); // sends server error if something fails
  }
};