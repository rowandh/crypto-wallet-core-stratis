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
var btc_1 = require("../btc");
var StratDeriver = (function (_super) {
    __extends(StratDeriver, _super);
    function StratDeriver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bitcoreLib = BitcoreLib;
        return _this;
    }
    return StratDeriver;
}(btc_1.AbstractBitcoreLibDeriver));
exports.StratDeriver = StratDeriver;
//# sourceMappingURL=index.js.map