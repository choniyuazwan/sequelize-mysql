module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        code: {
            field: 'code',
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING
        }
    }, {
        tableName: 'category',
        timestamps: false
    });

    return Category;
};
