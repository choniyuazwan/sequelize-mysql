const {Customer, Account} = require('../db/sequelize');
function getList(callback){
    Customer.findAll({
        include: [{
            model: Account,
            as: 'accounts',
        }]
    }).then(
        (customers)=>{
            callback(null, customers);
        }
    )
}

function getById(cif, callback){
    Customer.findByPk(cif, {
        include: [{
            model: Account,
            as: 'accounts',
        }]
    }).then(
        (customer) => {
            callback(null, customer);
        }
    )
}

function getListPromise(){
    return new Promise((resolve, reject)=>{
        resolve(customers);
    });
}

function getByIdPromise(cif){
    console.log(cif);
    return new Promise((resolve, reject)=>{
        resolve(customers.find(cus => {return cus.customerNumber == cif;}));
    });
}

function insert(data, callback){
    const index = customers.findIndex((cus) => {
        return cus.id == data.customerNumber;
    });

    if (index < 0) {
        customers.push(data);
    }

    getById(data.customerNumber, callback);
}

module.exports = {getList, getById, insert, getListPromise, getByIdPromise};
