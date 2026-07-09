// controllers/teamController.js

import Team from "../models/Team.js";
//import Team model so i can work with team data in MongoDB

export const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        // find all teams from database 
        res.status(200).json(teams);
        // send list of teams with SUCCESS

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
        //if something goes wrong send this 
    }
};

export const createTeam = async (req, res) => {
    try {
        const team = await Team.create(req.body);
        // create new team using data sent in request body
        res.status(201).json(team);
        // send back created team

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
        //if validation fails send this 
    }
};

export const updateTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndUpdate(req. params.id, req.body, {
            new: true, //return updated ver of doc
            runValidators: true //make sure data follows schema rules 
            //  Tells Mongoose to apply schema validation rules when updating a document.
            // rules like required, enum, trim, unique 

        });
        if (!team) {
            return res.status(404).json({ message: "Team not found" });
            // if no team matches id send this 
        }

        res.status(200).json(team);
        // send back updated team

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
        //if validation fails send this 
    }
};


export const deleteTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req. params.id);

        if (!team) {
            return res.status(404).json({ message: "Team not found" });
            // if no team matches id send this 
        }

        res.status(200).json({ message: "Team deletion Successful"});
        // send back updated team

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
        //if validation fails send this 
    }
};
