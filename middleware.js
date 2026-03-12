const Listing = require("./models/m1_listing");
const review = require("./models/m2_reviews");
const ExpressError = require("./utils/ExpressError");
const {listingSchema , reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req , res , next) => {
    // console.log(req.path , ".." , req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;   //for saved info about from where the req has been received
        req.flash("error" , "you must be signed in first to create listing");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req , res , next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;  //saving redirectUrl in locals bcz passport remove info when we loged in 
    }
    next();
};

module.exports.isOwner = async(req , res , next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner || !listing.owner.equals(res.locals.currUser._id)){
        req.flash("error" , "you are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req , res , next) => {
    let result = listingSchema.validate(req.body);
    if(result.error){
        let errmsg = result.error.details.map((el) => el.message).join(",");
        throw new ExpressError(400 , errmsg);
    }
    next();
};

module.exports.validateReview = (req , res , next) => {
    let result = reviewSchema.validate(req.body);
    if(result.error){
        let errmsg = result.error.details.map((el) => el.message).join(",");
        throw new ExpressError(400 , errmsg);
    }else{
        next();
    }
};

module.exports.isReviewAuthor = async(req , res , next) => {
    let {id , reviewId} = req.params;
    let reviewData = await review.findById(reviewId);

    if(!reviewData.author.equals(res.locals.currUser._id)){
        req.flash("error" , "you are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}; 