"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var BTCTxProvider = (function () {
    function BTCTxProvider() {
        this.lib = require('bitcore-lib');
    }
    BTCTxProvider.prototype.selectCoins = function (recipients, utxos, fee) {
        utxos = utxos.sort(function (a, b) {
            return a.utxo.mintHeight - b.utxo.mintHeight;
        });
        var index = 0;
        var utxoSum = 0;
        var recepientSum = recipients.reduce(function (sum, cur) { return sum + Number(cur.amount); }, fee);
        while (utxoSum < recepientSum) {
            var utxo = utxos[index];
            utxoSum += Number(utxo.value);
            index += 1;
        }
        var filteredUtxos = utxos.slice(0, index);
        return filteredUtxos;
    };
    BTCTxProvider.prototype.create = function (_a) {
        var _this = this;
        var recipients = _a.recipients, _b = _a.utxos, utxos = _b === void 0 ? [] : _b, change = _a.change, wallet = _a.wallet, _c = _a.fee, fee = _c === void 0 ? 20000 : _c;
        change = change || (wallet.deriveAddress(wallet.addressIndex, true));
        var filteredUtxos = this.selectCoins(recipients, utxos, fee);
        var btcUtxos = filteredUtxos.map(function (utxo) {
            var btcUtxo = Object.assign({}, utxo, {
                amount: utxo.value / 1e8
            });
            return new _this.lib.Transaction.UnspentOutput(btcUtxo);
        });
        var tx = new this.lib.Transaction().from(btcUtxos).fee(Number(fee));
        if (change) {
            tx.change(change);
        }
        for (var _i = 0, recipients_1 = recipients; _i < recipients_1.length; _i++) {
            var recipient = recipients_1[_i];
            tx.to(recipient.address, recipient.amount);
        }
        return tx.uncheckedSerialize();
    };
    BTCTxProvider.prototype.getSignature = function (params) {
        throw new Error('No implemented for UTXO coins');
    };
    BTCTxProvider.prototype.applySignature = function (params) {
        throw new Error('No implemented for UTXO coins');
    };
    BTCTxProvider.prototype.getHash = function (params) {
        throw new Error('No implemented for UTXO coins');
    };
    BTCTxProvider.prototype.sign = function (params) {
        var tx = params.tx, keys = params.keys;
        var utxos = params.utxos || [];
        var inputAddresses = this.getSigningAddresses({ tx: tx, utxos: utxos });
        var bitcoreTx = new this.lib.Transaction(tx);
        var applicableUtxos = this.getRelatedUtxos({
            outputs: bitcoreTx.inputs,
            utxos: utxos
        });
        var outputs = this.getOutputsFromTx({ tx: bitcoreTx });
        var newTx = new this.lib.Transaction().from(applicableUtxos).to(outputs);
        var privKeys = _.uniq(keys.map(function (key) { return key.privKey.toString(); }));
        var signedTx = newTx.sign(privKeys).toString();
        return signedTx;
    };
    BTCTxProvider.prototype.getRelatedUtxos = function (_a) {
        var _this = this;
        var outputs = _a.outputs, utxos = _a.utxos;
        var txids = outputs.map(function (output) { return output.toObject().prevTxId; });
        var applicableUtxos = utxos.filter(function (utxo) { return txids.includes(utxo.txid); });
        return applicableUtxos.map(function (utxo) {
            var btcUtxo = Object.assign({}, utxo, {
                amount: utxo.value / Math.pow(10, 8)
            });
            return new _this.lib.Transaction.UnspentOutput(btcUtxo);
        });
    };
    BTCTxProvider.prototype.getOutputsFromTx = function (_a) {
        var tx = _a.tx;
        return tx.outputs.map(function (_a) {
            var script = _a.script, satoshis = _a.satoshis;
            var address = script;
            return { address: address, satoshis: satoshis };
        });
    };
    BTCTxProvider.prototype.getSigningAddresses = function (_a) {
        var tx = _a.tx, utxos = _a.utxos;
        var bitcoreTx = new this.lib.Transaction(tx);
        var applicableUtxos = this.getRelatedUtxos({
            outputs: bitcoreTx.inputs,
            utxos: utxos
        });
        return applicableUtxos.map(function (utxo) { return utxo.address; });
    };
    return BTCTxProvider;
}());
exports.BTCTxProvider = BTCTxProvider;
//# sourceMappingURL=index.js.map