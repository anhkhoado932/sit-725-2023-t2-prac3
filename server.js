const express = require("express");
var app = express();
var port = process.env.port || 3000;

const cardList = [
  {
    title: "Kitten 2",
    path: "images/kitten.jpeg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    path: "images/kitten.jpeg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index", { cats: cardList }); // view
}); 

app.listen(port, () => {
  console.log("App listening to: " + port);
});
