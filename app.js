if(process.env.NODE_ENV !="production"){
  require("dotenv").config();
}





const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError.js");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport=require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const {isLoggedIn}= require("./middleware.js");


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");



// const Mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl= process.env.ATLASDB_URL;

main()
  .then(() => console.log("connect to DB"))
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "/public")));



const store =MongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret:process.env.SECRET
  },
  touchAfter:24*3600, //this is interval time after that it end the session automaticaly
})


store.on("error",()=>{
  console.log("error in mongo session",err);

});
const sessionOptions ={
  store:store,
  secret: process.env.SECRET,
  resave:false,
  saveUninitialized: true,
  cookie:{
    expires:Date.now() + 7 * 60 * 24 * 60 * 1000,
    maxAge:7 * 60 * 24 * 60 * 1000,
    httpOnly: true,
  }
}




  
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize()); //we intialize passport
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //for our model we use the local strategy for authentication authenticate is the method for our 

passport.serializeUser(User.serializeUser()); //to store info of user into session
passport.deserializeUser(User.deserializeUser());//to empty the info of user from session


app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser= req.user; // req object is not accessible in ejs template so we use res.local
  next();
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


//this is for handling the error in case when user send any wrong request
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "page not found"));
});

//this is for handling the server side error without stopping the server
app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong" } = err;
  res.status(status).render("error.ejs", { message });
  // res.send("something went wrong")
});

app.listen("8080", () => {
  console.log("Server running successfully");
});
