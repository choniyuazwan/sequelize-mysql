module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('transaction', {
        id: {
            field: 'id',
            type: DataTypes.STRING,
            primaryKey: true
        },
        category: {
            field: 'category',
            type: DataTypes.STRING
        },
        accountOrigin: {
            field: 'account_origini',
            type: DataTypes.STRING
        },
        bankDestination: {
            field: 'bank_destination',
            type: DataTypes.STRING
        },
        accountDestination: {
            field: 'account_destination',
            type: DataTypes.STRING
        },
        amount: {
            field: 'amount',
            type: DataTypes.INTEGER
        },
        note: {
            field: 'note',
            type: DataTypes.STRING
        },
        date: {
            field: 'date',
            type: DataTypes.STRING
        },
    }, {
            tableName: 'transaction',
            timestamps: false
        });

    return Transaction;
};
