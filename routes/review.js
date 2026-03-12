const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/m1_listing.js");
const Review = require("../models/m2_reviews.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//post rought for review
router.post("/" , isLoggedIn , validateReview , wrapAsync(reviewController.createReviews));

//delete review rought
router.delete("/:reviewId", isLoggedIn, isReviewAuthor , wrapAsync(reviewController.destroyReviews));

module.exports = router;