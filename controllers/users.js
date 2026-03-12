const User = require("../models/m3_user.js");

module.exports.renderSignUpPage = (req , res) => {
    res.render("users/signup.ejs")
};

module.exports.signUp = async (req , res , next) => {
    try{
        let {username , email , password} = req.body;
        const newUser = new User({email , username});
        const registeredUser = await User.register(newUser , password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success" , "Welcome To Wanderlust");
            return res.redirect("/listings");
        })
    } catch(e) {
        req.flash("error" , e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLogInPage = (req , res) => {
    res.render("users/login.ejs");
};

module.exports.logIn = async(req , res) => {
    req.flash("success" , "Welcome To Wanderlust");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logOut = (req , res) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success" , "you are logged out");
        res.redirect("/listings");
    })
};