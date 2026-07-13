// models/Player.js

import mongoose from "mongoose"; // imports Mongoose so we can create schemas and models

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String, // player name must be text
      required: true, // every player must have a name
      trim: true // removes extra spaces before and after the name
    },
    age: {
      type: Number, // player age must be a number
      required: true, // every player must have an age
      min: 16 // age cannot be lower than 16
    },
    position: {
      type: String, // player position must be text
      required: true, // every player must have a position
      enum: ["PG", "SG", "SF", "PF", "C"] // position must be one of these values
    },
    team: {
      type: mongoose.Schema.Types.ObjectId, // stores the ID of the team the player belongs to
      ref: "Team", // connects this field to the Team model
      required: true // every player must belong to a team
    }
  },
  {
    timestamps: true // automatically adds createdAt and updatedAt
  }
);

const Player = mongoose.model("Player", playerSchema, "players"); // creates the Player model and stores documents in the players collection

export default Player; // exports the Player model so it can be used in other files
