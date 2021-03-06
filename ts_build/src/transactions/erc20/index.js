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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_1 = __importDefault(require("web3"));
var eth_1 = require("../eth");
var abi_1 = require("./abi");
var ERC20TxProvider = (function (_super) {
    __extends(ERC20TxProvider, _super);
    function ERC20TxProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ERC20TxProvider.prototype.getERC20Contract = function (tokenContractAddress) {
        var web3 = new web3_1.default();
        var contract = new web3.eth.Contract(abi_1.ERC20Abi, tokenContractAddress);
        return contract;
    };
    ERC20TxProvider.prototype.create = function (params) {
        var tokenAddress = params.tokenAddress;
        var data = this.encodeData(params);
        var recipients = [{ address: tokenAddress, amount: '0' }];
        var newParams = __assign({}, params, { recipients: recipients, data: data });
        return _super.prototype.create.call(this, newParams);
    };
    ERC20TxProvider.prototype.encodeData = function (params) {
        var tokenAddress = params.tokenAddress;
        var _a = params.recipients[0], address = _a.address, amount = _a.amount;
        var amountStr = Number(amount).toLocaleString('en', { useGrouping: false });
        var data = this.getERC20Contract(tokenAddress)
            .methods.transfer(address, amountStr)
            .encodeABI();
        return data;
    };
    return ERC20TxProvider;
}(eth_1.ETHTxProvider));
exports.ERC20TxProvider = ERC20TxProvider;
//# sourceMappingURL=index.js.map