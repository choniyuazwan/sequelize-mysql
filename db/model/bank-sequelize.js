module.exports = (sequelize, DataTypes) => {
    const Bank = sequelize.define('bank', {
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
        tableName: 'bank',
        timestamps: false
    });

    return Bank;
};
