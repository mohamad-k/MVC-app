const express = require("express");
const router = express.Router();
const User = require("../models/user");
const userController = require("../controllers/userController");

router.get("/add", userController.renderRegisterForm);

router.post("/add", userController.saveNewUser);
router.get("/listjson", userController.fetchSomeUsers);
router.get("/list", userController.getMyUsers);
//          Delete User
router.get("/delete/:id", userController.deleteUser);
//          Update User
router.get("/update/:id", userController.getDataToUpdate);
router.post("/update/:id", userController.update_user);
module.exports = router;
