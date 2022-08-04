module.exports = (sequelize, Sequelize) => {
  const Notions = sequelize.define("notions", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    }
  });

  return Notions;
};
