module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'categories'
    },
    );
  
    return Category;
  };