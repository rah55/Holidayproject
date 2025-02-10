const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const reviewController= require("../controllers/reviews.js");

//reviews
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.writeReview)
);

//delete route for review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
