const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = 8000;

const staticPath = path.join(__dirname, "../public");

const websitePath = path.join(__dirname, "websites/views");
const partialPath = path.join(__dirname, "websites/partials");



app.set('view engine', "hbs");
app.set('views', websitePath);
hbs.registerPartials(partialPath)

app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.render("index",{
        chanel: " man"
    });
})

app.get("/", (req,res)=> {
    res.send("hello everyone!!");
})

app.get("*", (req,res)=> {
    res.render("404error", {
        errors: "Oops 404, page not Found"
    });
})


app.listen(port, ()=> {
    console.log(`server is running port ${port}`);
})