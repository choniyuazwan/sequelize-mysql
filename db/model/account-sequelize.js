module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        accountNumber: {
            field: 'account_number',
            type: DataTypes.STRING,
            primaryKey: true
        },
        accountName: {
            field: 'account_name',
            type: DataTypes.STRING
        },
        balance: {
            field: 'balance',
            type: DataTypes.INTEGER
        },
        status: DataTypes.STRING,
        shoppingLimit: {
            field: 'shopping_limit',
            type: DataTypes.INTEGER
        },
        openDate: {
            field: 'open_date',
            type: DataTypes.STRING
        },
    }, {
            tableName: 'account',
            timestamps: false
        });

    return Account;
};
