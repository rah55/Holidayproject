const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(userController.signUpForm)
  .post(wrapAsync(userController.signUp));


router.route("/login")
.get(userController.loginForm)
.post(
  
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);


//this is the route for logged out the session or current user
router.get("/logout", userController.logOut);

module.exports = router;
