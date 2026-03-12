const express = require("express");
const router = express.Router({mergeParams : true});
const Listing = require("../models/m1_listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
// const upload = multer({ dest: 'uploads/' });
const upload = multer({ storage });

const listingController = require("../controllers/listings.js");

//index
router
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn , validateListing , upload.single('listing[image]') , wrapAsync(listingController.createListing));

//create route
router.get("/new" , isLoggedIn , listingController.renderNewForm);

//search
router.get("/search" , listingController.searchListing);

//show and delete route
router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner , upload.single('listing[image]'), validateListing , wrapAsync(listingController.editListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))

//edit
router.get("/:id/edit", isLoggedIn, isOwner , wrapAsync(listingController.renderEditForm));

module.exports = router;