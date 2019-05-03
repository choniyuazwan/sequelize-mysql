const express = require('express')
const bodyParser = require('body-parser')
const customerRoute = require('./routes/customer-route')
const accountRoute = require('./routes/account-route')
const walletRoute = require('./routes/wallet-route')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(customerRoute);
app.use(accountRoute);
app.use(walletRoute);

const port = 3000
app.listen(port, () => {console.log(`App listening on port ${port}`)});