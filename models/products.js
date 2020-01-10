module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5] // only allow values with length 5
      }
    },
    category: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    imageURL: {
      type: DataTypes.STRING
    }
  });

  Product.associate = function(models) {
    // Product(s) should belong to a User
    // Product(s) can't be created without a User due to the foreign key constraint
    Product.belongsTo(models.User, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Product;
};


