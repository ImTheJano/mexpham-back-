const mongoose=require('mongoose');
mongoose.set('useFindAndModify', false);
console.log("mongodb uri:",process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true})
.then(db=>{
    const clc = require('cli-color');
    console.log(clc.yellow("================================"));
    console.log(clc.blue("db connected"));
    console.log(clc.blue(process.env.MONGODB_URI));
    console.log(clc.yellow("================================"));
})
.catch(err=>console.log(err));
