const Listing =require("./models/listing");
const Review =require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema,reviewSchema } = require("./schema.js");





module.exports.isLoggedIn = (req,res,next)=>{
    console.log(req.user);
    if(!req.isAuthenticated()){ //this will check user session and user is login after every restart of server it will restart
       req.session.redirectUrl = req.originalUrl; //here we store the path on which user want after login
        req.flash("error","you must be logged in first");
       return res.redirect("/login");
      }
      next();
};

module.exports.saveRedirectUrl = (req,res,next )=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl; //here we save the redirect original path value because session will reset the value of the path and so undefined value
    }
    next();
};

module.exports.isOwner =async(req,res,next )=>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currentUser._id)){
    req.flash("error", " You dont have permission ");
     return res.redirect(`/listings/${id}`);
    }
    next();

};




module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
  
    if (error) {
      throw new ExpressError(400, error);
    } else {
      next();
    }
  };
  

  module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
  
    if (error) {
      throw new ExpressError(400, error);
    } else {
      next();
    }
  };

  module.exports.isReviewAuthor =async(req,res,next )=>{
    let { reviewId,id } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currentUser._id)){
    req.flash("error", " You dont have permission ");
     return res.redirect(`/listings/${id}`);
    }
    next();
  
  };