const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let items = [];

app.get("/", (req, res) => {
  const today = new Date();
  //const now = today.getDay();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("bn-BD", options);
  res.render("list", { day, items });
});

app.post("/", (req, res) => {
  let item = req.body.add;
  items.push(item);
  res.redirect("/");
});

app.listen(8000, () => {
  console.log("server connected");
});
