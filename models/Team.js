import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String, // must be text
      required: true, // must be included
      unique: true, // no two teams can have the same name in the collection
      trim: true // removes extra spaces before and after the text
    },
    city: {
      type: String, // city must be text
      required: true, // city is required
      trim: true // removes extra spaces like " Boston "
    },
    conference: {
      type: String, // conference must be text
      required: true, // conference is required
      enum: ["East", "West"] // value must be either "East" or "West"
    }
  },
  {
    timestamps: true // automatically adds createdAt and updatedAt
  }
);

teamSchema.index({ name: 1 }); // creates an index on name to make searches by name faster

const Team = mongoose.model("Team", teamSchema, "teams"); // creates the Team model from the schema

export default Team;
