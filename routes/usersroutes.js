const express = require("express");
const { getUsers } = require("../controllers/users");
const { register, login } = require("../controllers/auth");

const router = express.Router();

router.route("/").get(getUsers);

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = {
  users_routes: router,
};
