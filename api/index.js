const express = require('express')
const app = express();
PORT = 5000;
const mongoose = require('mongoose');

mongoose.connection("mongodb+srv://rphillipsosei:@cluster0.8fkshea.mongodb.net/stitch?retryWrites=true&w=majority")
.then(()=> console.log("DB Connection Successful!"))
.catch((err)=> console.log(err));

app.listen(5000, ()=> {
    console.log('Server is listening on port ${PORT}')
})