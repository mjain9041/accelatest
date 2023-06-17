const Team = require("../model/Team")
const User = require("../model/User")
const config = require("../config")

let userController = {}

userController.getUserDetail = async (req, res) => {
    try {
        let userDetail = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json({data: userDetail, message: config.USER_DETAIL})
    } catch(err) {
        res.status(config.STATUS_CODE.INTERNAL_SERVER_ERROR).json({message: config.ERROR_MESSAGE})
    }
}

userController.updateUserDetail = async (req, res) => {
    try {
        let userDetail = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!userDetail) {
            return res.status(config.STATUS_CODE.VALIDATION_ERROR).json({ message: config.USER_NOT_FOUND})
        }
        console.log(req.body)
        userDetail.fullName = req.body.fullName
        userDetail.teamId = req.body.teamId
        userDetail.role = req.body.role
        await userDetail.save();
        res.json({message: config.USER_UPDATE})
    } catch(err) {
        //console.log(err)
        res.status(config.STATUS_CODE.INTERNAL_SERVER_ERROR).json({message: config.ERROR_MESSAGE})
    }
}

module.exports = userController

