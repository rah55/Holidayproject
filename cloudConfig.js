const cloudinary =require("cloudinary").v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");



//it found in cloudinary documentation here we send configuration details
cloudinary.config({

    //here these name are must we cant change them
  cloud_name:process.env.CLOUD_NAME,
 api_key: process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET
});

//after that we create storage
//get it from cloudinary documentation
//it just like google storage
const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'holidays_DEV',
        allowedFormats:['png','jpeg','jpg'],
        
    },
});



//used in listing route
module.exports={
    cloudinary,
    storage
}