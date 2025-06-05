const { createUserProfile } = require( "../controllers/user.controller");
const {upload} = require("../utils/cloudinary");

const {Router} = require("express")

const userRoute = Router();

userRoute.post('/user',upload.single("photo"), createUserProfile);
module.exports = userRoute;