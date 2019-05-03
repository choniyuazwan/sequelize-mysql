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

function insert(data, callback){
    Customer.create({
        cif: data.cif,
        name: data.name
    }).then(
        (customer) => {
            callback(null, customer)
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



module.exports = {getList, getById, insert, getListPromise, getByIdPromise};
