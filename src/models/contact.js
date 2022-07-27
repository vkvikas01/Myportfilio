const mongoose =require("mongoose");

const contactSchema= new mongoose.Schema({
    username:{
        type:String,
        // required:[true,"first name is required"]
    },
   
    email:{
        type:String,
        // required:[true,"email  is required"],
        // unique:[true,"email must be unique"]
    },
    service:{
        type:String,
        // required:[true,"subject is required"]
    },
    number:{
        type:Number,
        // required:[true,"subject is required"]
    },
    date:{
        type:Date,
        // required:[true,"subject is required"]
    },
    address:{
        type:String,
        // required:[true,"subject is required"]
    },
    city:{
        type:String,
        // required:[true,"subject is required"]
    },
    state:{
        type:String,
        // required:[true,"subject is required"]
    },
    project:{
        type:String,
        // required:[true,"message is required"]
    }

})


const Contact =new mongoose.model("Contact",contactSchema);

module.exports = Contact;