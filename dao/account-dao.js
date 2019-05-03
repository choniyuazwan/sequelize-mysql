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

module.exports = {getList};
