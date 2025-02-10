const User =require("../models/user");

module.exports.signUpForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      //this method help in automatically login the user after the signup
      if (err) {
        return next(err);
      }
      console.log(registeredUser);
      req.flash("success", "welcome to Holidays");
      res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
};

module.exports.loginForm =  (req, res) => {
    res.render("users/login.ejs");
  };


  module.exports.login=
  async (req, res) =>
    {
    req.flash("success","welcome to Holidays! you logged in successfully ");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect( redirectUrl); 
  };


  module.exports.logOut = (req,res,next)=>{
    req.logout((err)=>{
      if(err){
        return next(err);
      }
      req.flash("success","You are logged out successfully");
      res.redirect("/listings");
    })
  };