const {Customer, Account} = require('../db/sequelize');
function getList(callback){
    Account.findAll({
        include: [{
            model: Customer,
            as: 'customer',
        }]
    }).then(
        (accounts)=>{
            callback(null, accounts);
        }
    )
}

function getListByCif(id, callback){
    Account.findAll({
        where: {
            cif: id
        },
        include: [{
            model: Customer,
            as: 'customer',
        }]
    }).then(
        (accounts)=>{
            callback(null, accounts);
        }
    )
}

function getById(id, callback){
    Account.findByPk(id, {
        include: [{
            model: Customer,
            as: 'customer',
        }]
    }).then(
        (account) => {
            callback(null, account);
        }
    )
}

function insert(data, callback){
    Account.create({
        accountNumber: data.accountNumber,
        accountName: data.accountName,
        cif: data.cif
    }).then(
        (account) => {
            callback(null, account)
        }
    )
}

function update(id, data, callback){
    Account.update({
        accountName: data.accountName,
        balance: data.balance
    }, {
        where: {accountNumber: id}
    }).then(
        (account) => {
            callback(null, account)
        }
    )
}

function remove(id, callback){
    Account.destroy({
        where: {accountNumber: id}
    }).then(
        (account) => {
            callback(null, account);
        }
    )
}

module.exports = {getList, getById, insert, update, remove, getListByCif};
