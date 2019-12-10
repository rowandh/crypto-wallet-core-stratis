"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require('web3-utils');
var EthValidation = (function () {
    function EthValidation() {
    }
    EthValidation.prototype.validateAddress = function (_network, address) {
        return utils.isAddress(address);
    };
    EthValidation.prototype.validateUri = function (addressUri) {
        var address = this.sanitizeEthereumUri(addressUri);
        return utils.isAddress(address);
    };
    EthValidation.prototype.sanitizeEthereumUri = function (data) {
        var address = data;
        var ethereum = /ethereum:/;
        if (!ethereum.exec(data)) {
            return data;
        }
        var value = /[\?\&]value=(\d+([\,\.]\d+)?)/i;
        var gas = /[\?\&]gas=(\d+([\,\.]\d+)?)/i;
        var gasPrice = /[\?\&]gasPrice=(\d+([\,\.]\d+)?)/i;
        var gasLimit = /[\?\&]gasLimit=(\d+([\,\.]\d+)?)/i;
        var params = [ethereum, value, gas, gasPrice, gasLimit];
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var key = params_1[_i];
            address = address.replace(key, '');
        }
        return address;
    };
    return EthValidation;
}());
exports.EthValidation = EthValidation;
//# sourceMappingURL=index.js.map