const fs = require('fs');
const Web3 = require('/Users/tsaimingjhe/.nvm/versions/node/v11.0.0/lib/node_modules/web3');

let web3 = new Web3('http://localhost:8545');

const abi = JSON.parse(fs.readFileSync('../bin/Bank.abi').toString());
const address = fs.readFileSync('../address.txt').toString();

let bank = new web3.eth.Contract(abi, address);

web3.eth.getAccounts().then(function (accounts) {

    bank.methods.getCoinBalance().call({
            from: accounts[0]
        })
        .then((coinBalance) => {
            console.log(coinBalance);
        });
});