// Player.js

import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: {
        type: String, // must be text
        required: true, // must be included
        trim: true // removes extra spaces before and after the text
    },
    age: {
        type: Number, // city must be text
        required: true, // city is required
        trim: true // removes extra spaces like " Boston "
    },
    position: {
        type: String, // conference must be text
        required: true, // conference is required
        enum: ["PG", "SG", "SF", "PF", "C"] // value must be either "PG"  "SG" "SF"  "PF" "C"  
    }
}, {
    timestamps: true // automatically adds createdAt and updatedAt
});

teamSchema.index({
    name: 1
}); // creates an index on name to make searches by name faster

const Player = mongoose.model("Player", teamSchema, "players"); // creates the Team model from the schema

export default Player;