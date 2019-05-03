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
  
module.exports = AccountRoute;
