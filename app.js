var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/friends", (req, res) => {
    var friends = ["John", "King", "Queen", "Jack"]
    res.render("friends", {friends: friends})
})

app.post("/addfriend", (req, res) => {
    res.send("addfriend");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})