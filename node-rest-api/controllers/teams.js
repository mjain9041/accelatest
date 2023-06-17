const Team = require("../model/Team")
const User = require("../model/User")
const config = require("../config")

let teamController = {}

teamController.getTeams = async (req, res) => {
    try {
        let teamDetails = await Team.findAll();
        res.json({data: teamDetails, message: config.TEAM_LIST})
    } catch(err) {
        res.status(config.STATUS_CODE.INTERNAL_SERVER_ERROR).json({message: config.ERROR_MESSAGE})
    }
}

teamController.getUsersByTeamId = async (req, res) => {
    try {
        let teamDetail = await Team.findOne({
            include: {
                model: User
            },
            where : {
                uuid: req.params.uuid
            }
        });
        res.json({data: teamDetail, message: config.TEAM_DETAIL})
    } catch(err) {
        console.log(err)
        res.status(config.STATUS_CODE.INTERNAL_SERVER_ERROR).json({message: config.ERROR_MESSAGE})
    }
}

module.exports = teamController