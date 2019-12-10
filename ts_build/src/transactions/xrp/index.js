"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ripple_lib_1 = require("ripple-lib");
var XRPTxProvider = (function () {
    function XRPTxProvider() {
    }
    XRPTxProvider.prototype.create = function (params) {
        var recipients = params.recipients, tag = params.tag, sourceAddress = params.sourceAddress, invoiceID = params.invoiceID, fee = params.fee, nonce = params.nonce;
        var _a = recipients[0], address = _a.address, amount = _a.amount;
        var payment = {
            source: {
                address: sourceAddress,
                tag: tag || undefined,
                maxAmount: {
                    value: amount.toString(),
                    currency: 'XRP'
                }
            },
            destination: {
                address: address,
                tag: tag || undefined,
                amount: {
                    value: amount.toString(),
                    currency: 'XRP'
                }
            },
            invoiceID: invoiceID || undefined,
        };
        var instructions = {
            fee: fee,
            sequence: nonce,
            maxLedgerVersion: null,
        };
        var rippleAPI = new ripple_lib_1.RippleAPI();
        return rippleAPI.preparePayment(sourceAddress, payment, instructions).then(function (preparedTx) {
            return preparedTx.txJSON;
        }).catch(function (err) {
            return;
        });
    };
    XRPTxProvider.prototype.sign = function (params) {
        var tx = params.tx, key = params.key;
        var txJSON = tx;
        var rippleAPI = new ripple_lib_1.RippleAPI();
        var signedTx = rippleAPI.sign(txJSON, {
            privateKey: key.privKey,
            publicKey: key.pubKey,
        });
        return signedTx;
    };
    return XRPTxProvider;
}());
exports.XRPTxProvider = XRPTxProvider;
//# sourceMappingURL=index.js.map