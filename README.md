### SBA 319:
**MongoDB Database Application**
`July 9 2026`

**Introduction**
`This assessment measures your understanding of MongoDB and your capability to implement its features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given. This assessment has a total duration of three (3) days. This is a take-home assessment. You have three total days (including weekends and holidays) to work on this assessment. This assessment will be due at 5:00pm on the third day after it is assigned. Your instructor will provide you with at least four hours of class time to work on the assessment, during which time you may discuss details of the project with them, including topic, scope, and implementation.`

**Objectives**
`Create a server application with Node, Express, and MongoDB.`
`Create a CRUD API using Express and MongoDB.`
`Create MongoDB indexes.`
`Use MongoDB indexing to make efficient queries.`
`Create MongoDB validation rules.`
`Use MongoDB validation to ensure data consistency.`

**Submission**
`Submit the link to your completed assessment using the Start Assignment button on the Assignment page in Canvas.`


`Your submission should include: A link to the GitHub repository for your project.`

**Instructions**
`You will create a small Node, Express, and MongoDB server application. The topic and content of this application is entirely up to you; be creative! Your work will be graded according to the technical requirements listed in the following section. Creativity and effort always work in your favor, so feel free to go beyond the scope of the listed requirements if you have the time.Keep things simple. Like most projects you will encounter, you should finish the absolute minimum requirements first, and then add additional features and complexity if you have the time to do so. This will also help you understand what you can get done in a specific allotment of time if you were to be asked to do something similar in the future. Once you have an idea in mind, briefly discuss it with your instructors to determine if it is appropriate for the amount of time you have been given. Since topic and content are secondary to functionality for this assessment, we have included some resources below for free content that you can use to populate your application. Once you have gotten your functionality in place, you can return and fill in the content with something interesting.`

Resources for free content:
Text: Lipsum, a Lorem Ipsum text generator.
Images: Pexels, a resource for stock photos (and other media).
GIFs: Motion Elements, a resource for GIFs (and other media).
Requirements
The requirements listed here are absolute minimums. Ensure that your application meets these
requirements before attempting to further expand your features.

`Create your application locally, and initialize a local git repo. Make frequent commits to the repo. When your application is complete, push your repo to GitHub and submit the link to the GitHub page using the submission instructions at the top of this document.`

**Requirement Weight**
`Use at least three different data collections within the database (such as users, posts, or comments). 5%`

`Utilize reasonable data modeling practices. 10%`

`Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. 10%`

`Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request. 10%`

`Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. 10%`

`Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. 10%`

`Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. 5%`

**Include sensible MongoDB data validation rules for at least one data collection.**
`Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error. 5%`

**Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.**
`Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents). 5%`

`Utilize reasonable code organization practices. 5%`

`Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). 10%`

`Commit frequently to the git repository. 5% `

`Include a README file that contains a description of your application. This README must include a description of your API's available routes and their corresponding CRUD operations for reference. 5%`

`Level of effort displayed in creativity and user experience. 5%`

`Bonus Objectives`
**The objectives listed here are not required. Ensure that your application meets the requirements above before attempting to further expand your features.**

`These bonus objectives cannot increase your overall score above 100%. Successful completion of these objectives can; however, make up for lost points above. Ensure your application works as outlined by the requirements above before attempting these objectives, time permitting.`

**Use Mongoose to implement your application.**
`Note: The validation requirements above must still be implemented database-side, but should also be implemented application-side within your Mongoose schema(s). +1%`

***************************MongoDB Database Application************************
**Description:**
`This project is a backend NBA API built with Node.js, Express, MongoDB, and Mongoose. It manages 3 collections: teams, players, and games. The API supoorts CRUD operations, uses validation and indexes, and include sample seed`


### Step 1:
`install `
`npm init -y `
`npm i express mongoose dotenv`
`package.json - change to module`

### Documentation
- [Mongoose](https://mongoosejs.com/docs/)
- [MongoDB](https://www.mongodb.com/docs/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/docs/latest/api/)


**Basic plan for models:**
SBA 319/
  config/
    db.js
  models/
    Team.js
    Player.js
    Game.js
  routes/
    teams.js
    players.js
    games.js
  data/
    teams.js
    players.js
    games.js
  scripts/
    seed.js
  .env
  .gitignore
  package.json
  server.js
  README.md


### Step 2 Connect to server to MongoDB
Get server connected thru db.js and server.js
Create config/db.js for mongoose connection 
Create server.js for Express server connection and route monunting 

**db.js**
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongoose connected");
  } catch (e) {
    console.error(e);
  }
}

export default connectDB;


**Server.js**
import 'dotenv/config';
import connectDB from './config/db.js';
import dotenv from "dotenv";

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the NBA API.");
});

connectDB();

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  
});

`Its Working !!!`

**Order of Operations**
`Data`
`Models`
`Controllers`
`Routes`
`Scripts`


### Step 3 
**Data**
`Data`
**Make 3 Sample Data NBA**
data/
  teams.js
  players.js
  games.js

`teams.js -` 
stores sample team data as array of team obj
each obj has - name, city, conference 
used to seed teams in MongoDB

`players.js - `
stores sample player data as array of player obj
each obj has - name, position, teamName 
used to seed players and map later to a team

`games.js - `
stores sample game data as array of game obj
each obj has - homeTeamName, awayTeamName, date, location 
used to seed games and later connect games to team iDs


### Step 4 
**Models / Schema**
`Models`

**Build the 3 Mongoose models and schemas to match this data structure**
Each model defines the fields, data types, validation rules, and relationships between collections.

models/
  Team.js
  Player.js
  Game.js


<!-- models/Team.js -->
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


const Team = mongoose.model("Team", teamSchema, "teams"); // creates the Team model from the schema

export default Team;


### Step 5
**Controllers**
controllers/
  teamController.js
  playerController.js
  gameController.js

`Build controller functions to handle the app main logic, Example - creating, updating, deleting, retrieving data from each model.`

`Controller - handle the logic for each collection.`
`Process request and interact with database.`

`Create for Teams, Players, Games to manage tasks like retrieving all records, creating new data, updating existing data and deleting records` 

Docs:
- Mongoose `findByIdAndUpdate`: `https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()`
- Mongoose validation: `https://mongoosejs.com/docs/validation.html`

**Team Controller Description**

The `teamController.js` file manages all logic related to the Team collection in the application. 

The `getAllTeams` function is used to fetch every team document from the database and return the results as JSON with a successful status code. 

The `createTeam` function is responsible for adding a new team to the database using the data sent in the request body. If the submitted data matches the schema rules, the new team is created and returned with a `201` status code. If the data fails validation, an error response is sent back.

The `updateTeam` function allows an existing team to be edited by locating it with its unique ID and applying the changes from the request body. The option `new: true` is used so the updated version of the document is returned instead of the original. The option `runValidators: true` ensures that the updated data still follows the rules defined in the schema, such as required fields, allowed values, trimming extra spaces, and uniqueness requirements. If no matching team is found, the function returns a `404` error.

The `deleteTeam` function removes a team document from the database by its ID. If the team exists, it is deleted and a success message is returned. If no matching record is found, a `404` error response is sent.

Overall, the `teamController.js` file acts as the middle layer between the routes and the database. It handles the main application logic, communicates with the Team model, and ensures that proper responses and error messages are returned to the client.

**Tried to test this so i build a teamRoutes.js in routes then the server.js- app.use(express.json())**

**Took 2hrs but i finally did a post and a get on localhost3000**
*Output*

`"_id": "6a4ffd94348c6818143a4837",`
`"name": "Lakers",`
`"city": "Los Angeles",`
`"conference": "West",`
`"createdAt": "2026-07-09T19:59:16.365Z",`
`"updatedAt": "2026-07-09T19:59:16.365Z",`
`"__v": 0`

// routes/teamRoutes.js
import express from "express";
import {
  getAllTeams,
  createTeam,
  updateTeam,
  deleteTeam
} from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getAllTeams);
router.post("/", createTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

export default router;

// server.js or app.js
import express from "express";
import teamRoutes from "./routes/teamRoutes.js";

const app = express();
app.use(express.json());

app.use("/teams", teamRoutes);




then make GET routes for teams, players, and games 

commit 8



  

