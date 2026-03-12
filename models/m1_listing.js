const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./m2_reviews.js")

const listingSchema = new Schema({
    title : {
        type : String ,
        required : true ,
    } , 
    description : String , 
    image : {
        url : String,
        filename : String,
    } , 
    price : {
        type :Number,
        required : true,
        min : 1,
    } , 
    location : String ,  
    country : String , 
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
    category: {
        type: String,
        required: true,
        enum: ["trending","rooms","iconic cities","mountains","castles","amazing pools","camping","farms","arctic"]
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {   //middleware
    if(listing) {
        await Review.deleteMany({_id : {$in: listing.reviews}});
    }
});

const listing = mongoose.model("Listing" , listingSchema);
module.exports = listing;