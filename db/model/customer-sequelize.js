module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        cif: {
            field: 'cif',
            type: DataTypes.STRING,
            primaryKey: true
        },
        email: {
            field: 'email',
            type: DataTypes.STRING
        },
        phoneNumber: {
            field: 'phone_number',
            type: DataTypes.STRING
        },
        name: {
            field: 'name',
            type: DataTypes.STRING
        },
        birthDate: {
            field: 'birthdate',
            type: DataTypes.STRING
        },
        identityCard: {
            field: 'identity_card',
            type: DataTypes.STRING
        },
        address: DataTypes.STRING,
        job: DataTypes.STRING,
        cashtag: DataTypes.STRING,
        password: DataTypes.STRING,
        pin: DataTypes.STRING,
        accountNumber: {
            field: 'account_number',
            type: DataTypes.STRING
        },
        status: DataTypes.BOOLEAN,
        balance: DataTypes.INTEGER,
        withdrawalLimit: {
            field: 'account_number',
            type: DataTypes.INTEGER
        },
        shoppingLimit: {
            field: 'shopping_limit',
            type: DataTypes.INTEGER
        },
    }, {
        tableName: 'customer',
        timestamps: false
    })

    return Customer;
}