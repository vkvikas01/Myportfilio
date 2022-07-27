const mongoose =require("mongoose");

const feedbackSchema= new mongoose.Schema({
    firstname:{
        type:String,
        // required:[true,"first name is required"]
    },
    email:{
        type:String,
        // required:[true,"email  is required"],
        unique:[true,"email must be unique"]
    },
    subject:{
        type:String,
        // required:[true,"subject is required"]
    },
    message:{
        type:String,
        // required:[true,"message is required"]
    }

})


const Feedback =new mongoose.model("Feedback",feedbackSchema);

module.exports = Feedback;