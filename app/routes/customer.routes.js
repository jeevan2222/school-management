module.exports = (app) => {
  const customers = require("../controllers/customer.controller");
  const getToken = require("../authentication/auth");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", getToken, customers.signUp);
};
