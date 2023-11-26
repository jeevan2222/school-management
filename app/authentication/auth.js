const jwt = require("jsonwebtoken");

exports.getToken = (req, res, next) => {
  //   const { email } = req.body;

  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "email can not be empty!",
    });
    return;
  }
  const token = jwt.sign(
    {
      data: req.body.email,
    },
    "secret",
    { expiresIn: "1h" }
  );
  req.body.token = token;
  next();
};
