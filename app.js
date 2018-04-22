var express = require("express");
var bodyPaser = require("body-parser");
var app = express();

app.use(bodyPaser.urlencoded( {extended: true } ));
app.set("view engine", "ejs");

var friends = ["John", "King", "Queen", "Jack"]

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/friends", (req, res) => {
    res.render("friends", {friends: friends})
})

app.post("/addfriend", (req, res) => {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})