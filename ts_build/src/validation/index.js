"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bch_1 = require("./bch");
var btc_1 = require("./btc");
var eth_1 = require("./eth");
var xrp_1 = require("./xrp");
var validation = {
    BTC: new btc_1.BtcValidation(),
    BCH: new bch_1.BchValidation(),
    ETH: new eth_1.EthValidation(),
    XRP: new xrp_1.XrpValidation(),
    STRAT: new btc_1.BtcValidation()
};
var ValidationProxy = (function () {
    function ValidationProxy() {
    }
    ValidationProxy.prototype.get = function (chain) {
        var normalizedChain = chain.toUpperCase();
        return validation[normalizedChain];
    };
    ValidationProxy.prototype.validateAddress = function (chain, network, address) {
        return this.get(chain).validateAddress(network, address);
    };
    ValidationProxy.prototype.validateUri = function (chain, addressUri) {
        return this.get(chain).validateUri(addressUri);
    };
    return ValidationProxy;
}());
exports.ValidationProxy = ValidationProxy;
exports.default = new ValidationProxy();
//# sourceMappingURL=index.js.map