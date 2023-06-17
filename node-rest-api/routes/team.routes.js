const express = require("express");
const app = express();

const teamRoute = express.Router();
let teamController = require("../controllers/teams");


// Get Teams
teamRoute.get("/teams", teamController.getTeams);

//Get Users By Team Id
teamRoute.get("/teams/:uuid", teamController.getUsersByTeamId);

module.exports = teamRoute;
