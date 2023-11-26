const db = require("../models");
const customer = db.customer;
// const Op = db.Sequelize.Op;
exports.signUp = (req, res) => {
  try {
    const { fullname, password, email, token } = req.body;
    if (!(fullname && password && email && token)) {
      res.send({
        status: 404,
        message: "Required fields are missing",
      });
      return;
    }
    const customerData = {
      fullname: fullname,
      password: password,
      email: email,
      token: token,
    };
    // create customer in the database
    customer
      .create(customerData)
      .then((data) => {
        res.status(200).send({
          staus: 200,
          message: "Customer Created",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the customer.",
        });
      });
  } catch (error) {}
};

exports.signIn = (req, res) => {
  const email = req.params.email;

  customer
    .findByPk(email)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

exports.signIm = (req, res, next) => {};
