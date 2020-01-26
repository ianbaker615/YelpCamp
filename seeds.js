var mongoose = require("mongoose"),
    Campground = require("./models/campground");
    Comment    = require("./models/comment");
   
var data = [
    {
        name:"Clouds Rest",
        image:"https://source.unsplash.com/ELevCx8PX4o",
        description:"camper overlooking cloud filled valley while taking a picture"
    },
    {
        name:"Idyllwild",
        image:"https://source.unsplash.com/pSaEMIiUO84",
        description:"grey tent near mountain top lake"
    },
    {
        name:"Virgin Falls",
        image:"https://source.unsplash.com/WaNZvXEnYok",
        description:"yellow dome tent on green grass field under night sky"
    }
]
    
function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else{
            console.log("removed campground");
        }
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great!",
                            author: "Homer"
                        }, function(err, comment){
                           if(err){
                               console.log(err);
                           } else{
                               campground.comments.push(comment);
                               campground.save();
                               console.log("Created new comment");
                           }
                        });
                }
            });
        });
    });
    //add a few comments
}

//exports function to be accessed in app.js file
module.exports = seedDB;

