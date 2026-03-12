const Listing = require("../models/m1_listing.js");
const Review = require("../models/m2_reviews.js");

module.exports.createReviews = async(req , res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success" , "Review Added Successfully!");

    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReviews = async(req , res) => {
    let listing = await Listing.findById(req.params.id);
    let {id , reviewId} = req.params;
    await Listing.findByIdAndUpdate(id , { $pull: {reviews: reviewId}} );   //delete review id from listing review array
    await Review.findByIdAndDelete(reviewId);  //delete review
    req.flash("success" , "Review Deleted!");

    res.redirect(`/listings/${listing._id}`);
};