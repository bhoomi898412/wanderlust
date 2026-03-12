const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/m1_listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/WanderLust";
require("dotenv").config({ path: "../.env" });
const dburl = process.env.ATLASTDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dburl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj , 
    owner : "699c8cd7bf70b3db347804e6"
  })); //convert existic listing object into new object and add new owner property in each
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();