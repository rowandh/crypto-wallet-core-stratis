"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BitcoreLib = require('bitcore-lib');
var AbstractBitcoreLibDeriver = (function () {
    function AbstractBitcoreLibDeriver() {
    }
    AbstractBitcoreLibDeriver.prototype.deriveAddress = function (network, pubKey, addressIndex, isChange) {
        var xpub = new this.bitcoreLib.HDPublicKey(pubKey, network);
        var changeNum = isChange ? 1 : 0;
        var path = "m/" + changeNum + "/" + addressIndex;
        return this.bitcoreLib
            .Address(xpub.derive(path).publicKey, network)
            .toString();
    };
    AbstractBitcoreLibDeriver.prototype.derivePrivateKey = function (network, xPriv, addressIndex, isChange) {
        var xpriv = new BitcoreLib.HDPrivateKey(xPriv, network);
        var changeNum = isChange ? 1 : 0;
        var path = "m/" + changeNum + "/" + addressIndex;
        var privKey = xpriv.derive(path).privateKey;
        var pubKey = privKey.publicKey;
        var address = this.bitcoreLib.Address(pubKey, network).toString();
        return { address: address, privKey: privKey.toString(), pubKey: pubKey.toString() };
    };
    return AbstractBitcoreLibDeriver;
}());
exports.AbstractBitcoreLibDeriver = AbstractBitcoreLibDeriver;
var BtcDeriver = (function (_super) {
    __extends(BtcDeriver, _super);
    function BtcDeriver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bitcoreLib = BitcoreLib;
        return _this;
    }
    return BtcDeriver;
}(AbstractBitcoreLibDeriver));
exports.BtcDeriver = BtcDeriver;
//# sourceMappingURL=index.js.map