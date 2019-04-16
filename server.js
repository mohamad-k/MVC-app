const express = require("express");
const app = express();
const indexRoute = require("./router/index");
const userRoute = require("./router/user");
const galleryRoute = require("./router/gallery");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

mongoose.connect(keys.key.db, {
  useNewUrlParser: true
});
app.use(express.static(path.join(__dirname, "public")));
// set middleware (body-parser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// set route
app.use("/", indexRoute);
app.use("/user", userRoute);
app.use("/gal", galleryRoute);

// setup template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.listen(5300, () => console.log("app running"));
