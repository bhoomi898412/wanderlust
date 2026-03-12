const express = require("express");
const router = express.Router();
const User = require("../models/m3_user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js")

//signup
router
.route("/signup")
.get(userController.renderSignUpPage)
.post(wrapAsync (userController.signUp));

//login
router
.route("/login")
.get(userController.renderLogInPage)
.post(saveRedirectUrl , Passport.authenticate("local" , {
        failureRedirect : "/login" , failureFlash : true
    }) ,
userController.logIn);

//logOut
router.get("/logout" , userController.logOut);

module.exports = router;