module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define('wallet', {
        id: {
            field: 'id',
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING
        },
        phoneNumber: {
            field: 'phone_number',
            type: DataTypes.STRING
        }
    }, {
            tableName: 'wallet',
            timestamps: false
        });

    return Wallet;
};
