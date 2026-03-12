if(process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/m3_user.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// const mongo_url = "mongodb://127.0.0.1:27017/WanderLust";
const dburl = process.env.ATLASTDB_URL;

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
});

async function main(params) {   
    await mongoose.connect(dburl);
};

app.set("view engine" , 'ejs');
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));  
app.engine('ejs' , ejsmate);
app.use(express.static(path.join(__dirname , "/public")));

const store = MongoStore.create({
    mongoUrl: dburl,
    touchAfter: 24*3600
});

store.on("error" , (err) => {
    console.log("ERROR in MONGO SESSION STORE" , err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());   // store login related info into session
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {     //middleware
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// app.get("/demouser" , async (req , res) => {
//     let fakeUser = new User({
//         email: "student@gmail.com",
//         username: "delta-student"  
//     });

//     const registeredUser = await User.register(fakeUser , "helloworld");
//     res.send(registeredUser);
// });

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

// app.get("/testListing" , wrapAsync(async (req , res) => {
//     let sampleListing = new Listing({
//         title : "my new villa" , 
//         description : "near by the beach" , 
//         price : 1200 , 
//         location : "goa" ,
//         country : "india" ,
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successfull testing");
// }));

app.use((req, res, next) => {
    next(new ExpressError(404 , "page not found"));
});

//this will handle error which is thrown by server
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    let{statuscode = 500 , message = "something went wrong"} = err;
    res.status(statuscode).render("errors/errors" , ({err}));
});

app.listen(8080 , () => {
    console.log("server is listening on port 8080");
});