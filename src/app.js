const express=require("express");
const app =express();
const hbs=require("hbs");
const path= require("path");
//const Feedback = require("./models/feedback");
require("./db/conn")

const Register =require("./models/registers");
 const Feedback =require("./models/feedback");
 const Contact =require("./models/contact");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 3000;
const staticpath =path.join(__dirname,"../public");




app.use(express.static(staticpath))

app.set("view engine","hbs");
const viewpath=path.join(__dirname,"../templets");
const partialspath=path.join(__dirname,"../templets/partials");
app.set("views",viewpath);
hbs.registerPartials(partialspath);


app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/register",(req,res)=>{
    res.render("register");
});
app.get("/skill",(req,res)=>{
    res.render("skill");
});


//contactform start
app.post("/contact",async function (req, res) {
    // insertRecord(req, res);

    try {
        // console.log(req.body);
        const ContactEmployee = new Contact({
            name: (req.body.name),
            email: (req.body.email),
            service: (req.body.service),
            number: (req.body.number),
            date: (req.body.date),
            address: (req.body.address),
            city: (req.body.city),
            state: (req.body.state),
            project: (req.body.project)
        });
        await ContactEmployee.save();
        res.status(201).render("index");


    } catch (error) {
        console.log(error);
        res.status(400).send(error);

    }
})

// function insertRecord(req,res){
//     var contact=new Contact();
//     name:(req.body.name);
//     email:(req.body.email);
//     service:(req.body.sevice);
//     number:(req.body.number);
//     date:(req.body.date);
//     address:(req.body.address);
//     city:(req.body.city);
//     state:(req.body.state);
//     project:(req.body.project);
//     contact.save((err,doc)=>{
//         if(!err){
//             res.render("index");
//         }else{
//             res.send(err)
//         }
//     })
// }

// end of contact form



//feedback form
app.post("/feedback",async function (req, res) {
        // insertRecord(req, res);

        try {
            const FeedbackEmployee = new Feedback({
                firstname: (req.body.name),
                email: (req.body.email),
                subject: (req.body.subject),
                message: (req.body.message)
            });
            await FeedbackEmployee.save();
            res.status(201).render("index");


        } catch (error) {
            res.status(400).send(error);

        }
    })

    // function insertRecord(req,res){
    //     var feedback=new Feedback();
    //     name:(req.body.name);
    //     email:(req.body.email);
    //     subject:(req.body.subject);
    //     message:(req.body.message);
    //     feedback.save((err,doc)=>{
    //         if(!err){
    //             res.render("index");
    //         }else{
    //             res.send(err)
    //         }
    //     })
    // }
//end of feedbackform

//login check


app.post("/register",async (req,res)=>{
    try {
        // console.log(req.body.firstname);
        // res.send(req.body.firstname);
        const password =req.body.password;
        const cpassword =req.body.confirmpassword;
        if(password===cpassword){
            const registerEmployee= new Register({
                firstname:(req.body.firstname),
                lastname:(req.body.lastname),
                email:(req.body.email),
                gender:(req.body.gender),
                password:( password),
                confirmpassword:(cpassword)
            })
            const registered=await registerEmployee.save();
            res.status(201).render("index");
        }else{
            res.send("password not match");
        }
        
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/login",async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;

        const usermail= await  Register.findOne({email:email});
        if(usermail.password===password){
            res.status(201).render("index");
        }
        else{
           res.send("invalid Username or password")
        }

    } catch (error) {
        res.status(400).send("invalid Username or password");
    }
});

//end login check
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
});