// Sequelized version!
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {len: [1,155]}
	},
	devoured: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
  }, {
    timestamps: false
});
  return Burger;
};