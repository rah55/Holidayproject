const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer =require("multer");
const{storage}=require("../cloudConfig.js"); //require the cloudinary storage
const upload = multer({storage });//this store our image in cloudinary storage

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn, upload.single("listing[image]"),validateListing, wrapAsync(listingController.addListing));
 
  

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditListingForm)
);

router
  .route("/:id")
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .get(wrapAsync(listingController.showRoute))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

module.exports = router;
