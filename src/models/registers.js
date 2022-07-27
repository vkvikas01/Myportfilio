const mongoose =require("mongoose");

const employeeSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"first name is required"]
    },
    lastname:{
        type:String,
        required:[true,"last name is required"]
    },
    email:{
        type:String,
        required:[true,"email  is required"],
        unique:[true,"email must be unique"]
    },
    gender:{
        type:String,
        required:[true,"gender is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    confirmpassword:{
        type:String,
        required:[true,"confirmpassword is required"]
    }

})


const Register =new mongoose.model("Register",employeeSchema);

module.exports = Register;