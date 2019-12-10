"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BCHTxProvider = (function () {
    function BCHTxProvider() {
        this.lib = require('bitcore-lib-cash');
    }
    BCHTxProvider.prototype.create = function (_a) {
        var recipients = _a.recipients, utxos = _a.utxos, change = _a.change, fee = _a.fee;
        var tx = new this.lib.Transaction().from(utxos).fee(Number(fee));
        for (var _i = 0, recipients_1 = recipients; _i < recipients_1.length; _i++) {
            var recipient = recipients_1[_i];
            tx.to(recipient.address, recipient.amount);
        }
        if (change) {
            tx.change(change);
        }
        return tx;
    };
    return BCHTxProvider;
}());
exports.BCHTxProvider = BCHTxProvider;
//# sourceMappingURL=index.js.map