require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name random machine method half kangaroo army gas'; 
let testAccounts = [
"0x88399520e2a6e0073194ea835cf41aa2f9ef494ba1af7c97587ef400f49653ad",
"0xbcbfb0db30e264c1d7b94106655f051deb27a97c089e58e1571e4cb724eeca47",
"0x05c2d82b32827dd59914149e9d7eabef65f20ec35924362aaa2d8226e5179e5e",
"0x88c504caabf9936f9bd3f9b50b02f8d63ff2f870bb5b2c7d98ff06f9b0b451d6",
"0xfdfb527f0b2fd665dfdd4ed73a7f82a06e2dec229117cbd141daf9b94920051d",
"0xd1f50fcee10932d725369f2693988479a95aff0303210177104d9899323a83f3",
"0x4d20b1e4413ab0edfb632eb96c18d28237ef98b7fd0bb0ab1563a59a04c09309",
"0xabfa31588e0fb20a690a85cf019b71ad24c221744eaa0601e6f0e42253c25f8f",
"0x99bec6ebfcdb5c89b3e2062d1125be4aa4619d009e45fa2fe6a6171775a65954",
"0xc0b965bdf25883aacf218b4ea3429c30c4f741b558eb825584b79446c722e9a7"
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

