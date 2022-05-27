const mongoose = require('mongoose');

//connecting to database
mongoose.connect(`mongodb+srv://RitikJha93:${process.env.secret}@cluster0.5ncvm.mongodb.net/trekk`,{
    useNewUrlParser: true , useUnifiedTopology: true
}).then( () => console.log("connection successfull"))
.catch((err) => console.log(err));