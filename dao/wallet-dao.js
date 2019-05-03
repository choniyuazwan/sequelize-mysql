const {Customer, Wallet} = require('../db/sequelize');

function getListByCif(id, callback){
    Wallet.findAll({
        where: {
            cif: id
        },
        include: [{
            model: Customer,
            as: 'customer',
        }]
    }).then(
        (wallets)=>{
            callback(null, wallets);
        }
    )
}

function getById(id, callback){
    Wallet.findByPk(id, {
        include: [{
            model: Customer,
            as: 'customer',
        }]
    }).then(
        (wallet) => {
            callback(null, wallet);
        }
    )
}

function insert(data, callback){
    Wallet.create({
        walletNumber: data.walletNumber,
        walletName: data.walletName,
        cif: data.cif
    }).then(
        (wallet) => {
            callback(null, wallet)
        }
    )
}

function update(id, data, callback){
    Wallet.update({
        walletName: data.walletName,
        balance: data.balance
    }, {
        where: {walletNumber: id}
    }).then(
        (wallet) => {
            callback(null, wallet)
        }
    )
}

function remove(id, callback){
    Wallet.destroy({
        where: {walletNumber: id}
    }).then(
        (wallet) => {
            callback(null, wallet);
        }
    )
}

module.exports = {getById, insert, update, remove, getListByCif};
