const mongooose =require("mongoose");
// Error.stackTraceLimit = Infinity;


mongooose.connect('mongodb://localhost:27017/register',{dbname:"register"},{
    useFindandModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("Connection Suceesfull");
}).catch(()=>{
    console.log(Error);
})

