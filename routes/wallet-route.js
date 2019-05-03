const express = require('express');
const walletDao = require('../dao/wallet-dao');
const resp = require('../models/response');

const WalletRoute = express.Router();

WalletRoute.get('/wallets', (req, res)=>{
    walletDao.getList(function(error, result){
        if(error){
            resp.notOk(res, error);
        }else{
            resp.ok(res, result);
        }
    });
})

WalletRoute.get('/customer/:cif/wallets', (req, res)=>{
    walletDao.getListByCif(req.params['cif'], function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.cif);
        }
    });
})

WalletRoute.get('/wallet/:id', (req, res)=>{
    walletDao.getById(req.params['id'], function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.id);
        }
    });
})

WalletRoute.post('/wallet', (req, res, next) => {
    walletDao.insert(req.body, function(error, result){
        if(error){
            resp.notOk(res, error);
        }else{
            resp.ok(res, result);
        }
    });
});

WalletRoute.put('/wallet/:id', (req, res, next) => {
    walletDao.update(req.params.id, req.body, function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.id);
        }
    });
});

WalletRoute.delete('/wallet/:id', (req, res, next) => {
    walletDao.remove(req.params.id, function(error, result){
        if(error){
            resp.notOk(res, error);
        }else if(result){
            resp.ok(res, result);
        }else{
            resp.notFound(res, req.params.id);
        }
    });
});
  
module.exports = WalletRoute;
