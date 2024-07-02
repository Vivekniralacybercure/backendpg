const express = require('express');
const mongoose = require('mongoose');

const {logReqRes} = require("./Middleware");

const userRouter = require("./Routes/userRoute");


const app = express();
const URL = 'mongodb+srv://viveknirala:backendpg@cluster0.x4xus8p.mongodb.net/backendpg?retryWrites=true&w=majority&appName=Cluster0'
const PORT = 8020;

mongoose.connect(URL).then(()=>{
    app.listen(PORT , () => {
        console.log(`APP IS LISTNING ON PORT NO ` + " " + PORT);
    });
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})

//Middleware 

app.use(express.urlencoded({extended : false}));
app.use(logReqRes("log.txt"));

//Routes

app.use('/user' , userRouter);  