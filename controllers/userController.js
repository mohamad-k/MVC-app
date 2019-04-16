const User = require("../models/user");
const fetch = require("node-fetch");

exports.update_user = (req, res) => {
  let updateData = req.body;
  let userId = req.params.id;
  const query = User.findByIdAndUpdate(userId, {
    username: updateData.username,
    email: updateData.email
  });
  query.exec(err => {
    if (err) throw err;
    res.redirect("/user/list");
  });
};
exports.deleteUser = (req, res) => {
  let userId = req.params.id;
  const query = User.findByIdAndRemove({ _id: userId });
  query.exec(err => {
    if (err) throw err;
    res.redirect("/user/list");
  });
};
exports.getDataToUpdate = (req, res) => {
  let userId = req.params.id;
  const query = User.findById({ _id: userId });
  query.exec((err, result) => {
    if (err) throw err;
    res.render("userEdit", {
      user: result
    });
  });
};
exports.saveNewUser = (req, res) => {
  let newUser = new User({
    username: req.body.username,
    age: req.body.age,
    country: req.body.country,
    email: req.body.email,
    password: req.body.password,
    created_at: Date.now()
  });
  //save newUser in database
  newUser.save(err => {
    if (err) throw err;
    res.render("register", {
      userData: req.body
    });
  });
};
exports.fetchSomeUsers = (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(myUsers) {
      res.render("userList", {
        users: myUsers
      });
    });
};
exports.getMyUsers = (req, res) => {
  //  get Data from DB
  const query = User.find()
    /*to sort data*/
    .sort({ username: -1 });
  // query.limit(4);
  query.exec((err, result) => {
    if (err) throw error;
    res.render("myUsers", {
      users: result
    });
  });
};
exports.renderRegisterForm = (req, res) => {
  res.render("register", {
    title: "My APP"
  });
};
