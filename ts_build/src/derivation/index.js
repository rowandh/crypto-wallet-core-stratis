"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bch_1 = require("./bch");
var btc_1 = require("./btc");
var eth_1 = require("./eth");
var paths_1 = require("./paths");
var strat_1 = require("./strat");
var xrp_1 = require("./xrp");
var derivers = {
    BTC: new btc_1.BtcDeriver(),
    BCH: new bch_1.BchDeriver(),
    ETH: new eth_1.EthDeriver(),
    XRP: new xrp_1.XrpDeriver(),
    STRAX: new strat_1.StratDeriver()
};
var DeriverProxy = (function () {
    function DeriverProxy() {
    }
    DeriverProxy.prototype.get = function (chain) {
        return derivers[chain];
    };
    DeriverProxy.prototype.deriveAddress = function (chain, network, xpubKey, addressIndex, isChange) {
        return this.get(chain).deriveAddress(network, xpubKey, addressIndex, isChange);
    };
    DeriverProxy.prototype.derivePrivateKey = function (chain, network, privKey, addressIndex, isChange) {
        return this.get(chain).derivePrivateKey(network, privKey, addressIndex, isChange);
    };
    DeriverProxy.prototype.pathFor = function (chain, network, account) {
        if (account === void 0) { account = 0; }
        var normalizedChain = chain.toUpperCase();
        var accountStr = account + "'";
        var chainConfig = paths_1.Paths[normalizedChain];
        if (chainConfig && chainConfig[network]) {
            return chainConfig[network] + accountStr;
        }
        else {
            return paths_1.Paths.default.testnet + accountStr;
        }
    };
    return DeriverProxy;
}());
exports.DeriverProxy = DeriverProxy;
exports.default = new DeriverProxy();
//# sourceMappingURL=index.js.map