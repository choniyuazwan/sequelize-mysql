const express = require('express');
const accountDao = require('../dao/account-dao');
const resp = require('../models/response');

const AccountRoute = express.Router();

AccountRoute.get('/accounts', (req, res)=>{
    accountDao.getList(function(error, result){
        if(error){
            resp.notOk(res, error);
        }else{
            resp.ok(res, result);
        }
    });
})

AccountRoute.get('/customer/:cif/accounts', (req, res)=>{
    accountDao.getListByCif(req.params['cif'], function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.cif);
        }
    });
})

AccountRoute.get('/account/:accountNumber', (req, res)=>{
    accountDao.getById(req.params['accountNumber'], function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.accountNumber);
        }
    });
})

AccountRoute.post('/account', (req, res, next) => {
    accountDao.insert(req.body, function(error, result){
        if(error){
            resp.notOk(res, error);
        }else{
            resp.ok(res, result);
        }
    });
});

AccountRoute.put('/account/:accountNumber', (req, res, next) => {
    accountDao.update(req.params.accountNumber, req.body, function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.accountNumber);
        }
    });
});

AccountRoute.delete('/account/:accountNumber', (req, res, next) => {
    accountDao.remove(req.params.accountNumber, function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.accountNumber);
        }
    });
});
  
module.exports = AccountRoute;
