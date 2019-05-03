const express = require('express');
const customerDao = require('../dao/customer-dao');
const resp = require('../models/response');

const CustomerRoute = express.Router();

CustomerRoute.get('/customers', (req, res)=>{
    customerDao.getList(function(error, result){
        if(error){
            resp.notOk(res, error);
        }else{
            resp.ok(res, result);
        }
    });
})

CustomerRoute.get('/customer/:cif', (req, res)=>{
    customerDao.getByIdPromise(req.params['cif']).then(
        function(data){
            if(data){
                resp.ok(res, data);
            }else{
                resp.notFound(res, req.param.cif);
            }
        },
        function(error){
            resp.notOk(res, error);
        }
    );
})

CustomerRoute.post('/customer', (req, res, next) => {
    customerDao.insert(req.body, function(error, data){
        if(error){
            resp.notOk(res, error);
        }else if(data){
            resp.ok(res, data);
        }else{
            resp.notFound(res, req.param.cif);
        }
    });
  });
  
module.exports = CustomerRoute;
