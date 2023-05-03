const express = require("express");
const app = express();
const conn = require("./database/db.js");
require("dotenv").config();
conn();
const routes = require("./routes/routes.js");
app.get("/", (req, res)=> {
    res.send("Hello..welcome to QUIZ API, please give a valid endpoint to post and get a data");
})
app.use(routes);


app.listen(process.env.PORT, ()=>console.log("Server is running on port 8000"));

// mongodb+srv://quizapp:<password>@cluster0.ofg45my.mongodb.net/?retryWrites=true&w=majority
