const Sequelize = require('sequelize');
const CustomerModel = require('./model/customer-sequelize');
const AccountModel = require('./model/account-sequelize');
const WalletModel = require('./model/wallet-sequelize');

const sequelize = new Sequelize('infinity', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Customer = CustomerModel(sequelize, Sequelize);
const Account = AccountModel(sequelize, Sequelize);
const Wallet = WalletModel(sequelize, Sequelize);

Account.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(Account, {foreignKey: 'cif'});

Wallet.belongsTo(Customer, {foreignKey: 'cif'});
Customer.hasMany(Wallet, {foreignKey: 'cif'});

module.exports = {
  Customer,
  Account,
  Wallet
};
