const mongoose=require('mongoose');
mongoose.set('useFindAndModify', false);
console.log("mongodb uri:",process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true})
.then(db=>console.log('Conectado a mongo db'))
.catch(err=>console.log(err));
