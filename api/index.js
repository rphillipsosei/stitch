const express = require('express')
const app = express();
PORT = 5000;
const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=> 
    console.log("DB Connection Successful!"))
.catch((err)=> {
    console.log(err)
});

app.get("/api/test", ()=> {
    console.log("Test is successful")
})

app.listen(5000, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})