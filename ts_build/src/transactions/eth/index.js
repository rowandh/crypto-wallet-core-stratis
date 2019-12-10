"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var utils = require('web3-utils');
var ETHTxProvider = (function () {
    function ETHTxProvider() {
    }
    ETHTxProvider.prototype.create = function (params) {
        var recipients = params.recipients, nonce = params.nonce, gasPrice = params.gasPrice, data = params.data, gasLimit = params.gasLimit, network = params.network;
        var _a = recipients[0], address = _a.address, amount = _a.amount;
        var chainId = params.chainId;
        chainId = chainId || this.getChainId(network);
        var txData = {
            nonce: utils.toHex(nonce),
            gasLimit: utils.toHex(gasLimit),
            gasPrice: utils.toHex(gasPrice),
            to: address,
            data: data,
            value: utils.toHex(amount),
            chainId: chainId
        };
        return ethers_1.ethers.utils.serializeTransaction(txData);
    };
    ETHTxProvider.prototype.getChainId = function (network) {
        var chainId = 1;
        switch (network) {
            case 'testnet':
            case 'kovan':
                chainId = 42;
                break;
            case 'ropsten':
                chainId = 3;
                break;
            case 'rinkeby':
                chainId = 4;
                break;
            default:
                chainId = 1;
                break;
        }
        return chainId;
    };
    ETHTxProvider.prototype.getSignatureObject = function (params) {
        var tx = params.tx, key = params.key;
        var signingKey = new ethers_1.ethers.utils.SigningKey(key.privKey);
        var signDigest = signingKey.signDigest.bind(signingKey);
        return signDigest(ethers_1.ethers.utils.keccak256(tx));
    };
    ETHTxProvider.prototype.getSignature = function (params) {
        var signatureHex = ethers_1.ethers.utils.joinSignature(this.getSignatureObject(params));
        return signatureHex;
    };
    ETHTxProvider.prototype.getHash = function (params) {
        var tx = params.tx;
        return ethers_1.ethers.utils.parseTransaction(tx).hash;
    };
    ETHTxProvider.prototype.applySignature = function (params) {
        var tx = params.tx, signature = params.signature;
        var parsedTx = ethers_1.ethers.utils.parseTransaction(tx);
        var nonce = parsedTx.nonce, gasPrice = parsedTx.gasPrice, gasLimit = parsedTx.gasLimit, to = parsedTx.to, value = parsedTx.value, data = parsedTx.data, chainId = parsedTx.chainId;
        var txData = { nonce: nonce, gasPrice: gasPrice, gasLimit: gasLimit, to: to, value: value, data: data, chainId: chainId };
        if ((typeof signature) == 'string') {
            signature = ethers_1.ethers.utils.splitSignature(signature);
        }
        var signedTx = ethers_1.ethers.utils.serializeTransaction(txData, signature);
        var parsedTxSigned = ethers_1.ethers.utils.parseTransaction(signedTx);
        if (!parsedTxSigned.hash) {
            throw new Error('Signature invalid');
        }
        return signedTx;
    };
    ETHTxProvider.prototype.sign = function (params) {
        var tx = params.tx, key = params.key;
        var signature = this.getSignatureObject({ tx: tx, key: key });
        return this.applySignature({ tx: tx, signature: signature });
    };
    return ETHTxProvider;
}());
exports.ETHTxProvider = ETHTxProvider;
//# sourceMappingURL=index.js.map