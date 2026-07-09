// models/Game.js

import mongoose from "mongoose"; // imports Mongoose create schemas and models

const gameSchema = new mongoose.Schema({
    homeTeam: {
        type: mongoose.Schema.Types.ObjectId, // stores the ID of the home team
        ref: "Team", // connects to the Team model
        required: true // every game must have a home team
    },
    awayTeam: {
        type: mongoose.Schema.Types.ObjectId, // stores the ID of the away team
        ref: "Team", // connects the Team model
        required: true // every game must have an away team
    },
    date: {
        type: Date, // the date of the game
        required: true // date must be included
    },
    location: {
        type: String, // location must be text
        required: true, // every game must include a location
        trim: true // removes extra spaces before and after the location
    },
    homeScore: {
        type: Number, // score must be a number
        default: 0, // if no score is given, start at 0
        min: 0 // score cannot be negative
    },
    awayScore: {
        type: Number, // score must be a number
        default: 0, // if no score is given, start at 0
        min: 0 // score cannot be negative
    }
}, {
    timestamps: true // automatically adds createdAt and updatedAt
});

const Game = mongoose.model("Game", gameSchema, "games"); // creates the Game model using the schema and stores it in the "games" collection

export default Game; // exports the Game model so it can be used in other files