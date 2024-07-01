const express = require('express');
const mongoose = require('mongoose');


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