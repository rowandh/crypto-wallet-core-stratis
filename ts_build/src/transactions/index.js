"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bch_1 = require("./bch");
var btc_1 = require("./btc");
var erc20_1 = require("./erc20");
var eth_1 = require("./eth");
var xrp_1 = require("./xrp");
var providers = {
    BTC: new btc_1.BTCTxProvider(),
    BCH: new bch_1.BCHTxProvider(),
    ETH: new eth_1.ETHTxProvider(),
    ERC20: new erc20_1.ERC20TxProvider(),
    XRP: new xrp_1.XRPTxProvider()
};
var TransactionsProxy = (function () {
    function TransactionsProxy() {
    }
    TransactionsProxy.prototype.get = function (_a) {
        var chain = _a.chain;
        return providers[chain];
    };
    TransactionsProxy.prototype.create = function (params) {
        return this.get(params).create(params);
    };
    TransactionsProxy.prototype.sign = function (params) {
        return this.get(params).sign(params);
    };
    TransactionsProxy.prototype.getSignature = function (params) {
        return this.get(params).getSignature(params);
    };
    TransactionsProxy.prototype.applySignature = function (params) {
        return this.get(params).applySignature(params);
    };
    TransactionsProxy.prototype.getHash = function (params) {
        return this.get(params).getHash(params);
    };
    return TransactionsProxy;
}());
exports.TransactionsProxy = TransactionsProxy;
exports.default = new TransactionsProxy();
//# sourceMappingURL=index.js.map