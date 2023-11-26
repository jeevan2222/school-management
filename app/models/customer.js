module.exports = (sequelize, Sequelize) => {
  const customer = sequelize.define("customer", {
    fullname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
  });

  return customer;
};
