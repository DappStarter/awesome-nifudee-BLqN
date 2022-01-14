require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note rifle coast install case flock gas'; 
let testAccounts = [
"0xbf4b63e3008f27bcbb218d8a9f04cbf5fcbf98413f72ecf939a5b307db57196d",
"0x7e80b95238f424c271e448fee0226913aba464740612071aa6a090b6b928fdf8",
"0xc7487d2dc28e184a1157768a35711323599e53920732edd2af9352cb404b3284",
"0xfea55318f0b2f968506069f0908d7c07191d8634931c35fb02b54c04c3ed931c",
"0x951650aadbf336121bcf83c838999d20fc4467b6ab442d5c4be634cd94a6e274",
"0x93b4643a9f886966e8058202e3157989dc293487e3a3b74c4e4aeead341a7f98",
"0x168c7f5a627e9989ebf7a7bbd70a12c7c7493bd92f132136a52335dfa693acda",
"0xcacf205da85ce8c15bfa6035fa6a938aa8a4f49739a0db413ca57326d3b2323d",
"0xec06a1aec732ba82894386c44b3aa1cea6f33f815d3b3ac86ef3ab02b3eafc79",
"0xc08c97f8d967750ccafad579d8b60cf6bbf3e7f3822e56d58adab06eb0f044f1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

