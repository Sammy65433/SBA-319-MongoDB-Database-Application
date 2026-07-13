// scripts/seed.js

import "dotenv/config"; 
// loads environment variables from the .env file
import connectDB from "../config/db.js"; 
// imports the database connection function
import Team from "../models/Team.js"; 
// imports the Team model so we can insert team documents
import teams from "../data/teams.js"; 
// imports the sample team data array

const seedData = async () => {
  try {
    await connectDB(); 
    // connects the app to MongoDB before seeding data

    await Team.deleteMany(); 
    // removes all existing team documents 
    // so old data does not duplicate
    await Team.insertMany(teams); 
    // inserts all sample team data into 
    // the teams collection

    console.log("Team data seeded"); 
    // confirms the seed worked
    process.exit(); 
    // stops the script after success
  } catch (error) {
    console.error(error); 
    // shows the error if the seed fails
    process.exit(1); 
    // stops the script with a failure code
  }
};

seedData(); 
// runs the seed function
