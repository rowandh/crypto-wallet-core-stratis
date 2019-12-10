"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var src_1 = require("../src");
describe('Address Validation', function () {
    var btcAddress = '1NuKwkDtCymgA1FNLUBaUWLD8s4kdKWvgn';
    var btcTestAddress = 'mkUNMewkQsHKRcUvv5HLKbqmepCqNH8goc';
    var bchAddress = 'qr8uujscckc56ancdkmqnyyl2rx6pnp24gmdfrf8qd';
    var bchTestLegacyAddress = 'mms6yCDGo3fDdapguTSMtCyF9XGfWJpD6H';
    var ethAddress = '37d7B3bBD88EFdE6a93cF74D2F5b0385D3E3B08A';
    var prefixEthAddress = '0x37d7B3bBD88EFdE6a93cF74D2F5b0385D3E3B08A';
    var xrpAddress = 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh';
    var btcUri = 'bitcoin:1NuKwkDtCymgA1FNLUBaUWLD8s4kdKWvgn';
    var bchUri = 'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g';
    var ethUri = 'ethereum:0x37d7B3bBD88EFdE6a93cF74D2F5b0385D3E3B08A';
    var ethUriParams = 'ethereum:0x37d7B3bBD88EFdE6a93cF74D2F5b0385D3E3B08A?value=123&gasPrice=123&gas=123&gasLimit=123';
    var btcTestUri = 'bitcoin:mkUNMewkQsHKRcUvv5HLKbqmepCqNH8goc';
    var bchTestUri = 'bchtest:qq083kgf3wjg7ya8nun36e8nf24g9xgvachahfnyle';
    var invalidBtcAddress = '1NuKwkDtCymgA1FNLUBaUWLD8s4kKWvgn';
    var invalidBchAddress = 'r8uujscckc56ancdkmqnyyl2rx6pnp24gmdfrf8qd';
    var invalidEthAddress = '37d7B3bBD88EFdE6a93cF74D2F5b0385D3E3B08';
    var invalidXrpAddress = 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTH';
    it('should be able to validate an BTC address', function () { return __awaiter(_this, void 0, void 0, function () {
        var isValidAddress, isValidTestAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateAddress('BTC', 'mainnet', btcAddress)];
                case 1:
                    isValidAddress = _a.sent();
                    return [4, src_1.Validation.validateAddress('BTC', 'testnet', btcTestAddress)];
                case 2:
                    isValidTestAddress = _a.sent();
                    chai_1.expect(isValidAddress).to.equal(true);
                    chai_1.expect(isValidTestAddress).to.equal(true);
                    return [2];
            }
        });
    }); });
    it('should be able to validate an BCH address', function () { return __awaiter(_this, void 0, void 0, function () {
        var isValidAddress, isValidTestLegacyAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateAddress('BCH', 'mainnet', bchAddress)];
                case 1:
                    isValidAddress = _a.sent();
                    return [4, src_1.Validation.validateAddress('BCH', 'testnet', bchTestLegacyAddress)];
                case 2:
                    isValidTestLegacyAddress = _a.sent();
                    chai_1.expect(isValidAddress).to.equal(true);
                    chai_1.expect(isValidTestLegacyAddress).to.equal(true);
                    return [2];
            }
        });
    }); });
    it('should be able to validate an ETH address', function () { return __awaiter(_this, void 0, void 0, function () {
        var isValidAddress, isValidPrefixAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateAddress('ETH', 'mainnet', ethAddress)];
                case 1:
                    isValidAddress = _a.sent();
                    return [4, src_1.Validation.validateAddress('ETH', 'mainnet', prefixEthAddress)];
                case 2:
                    isValidPrefixAddress = _a.sent();
                    chai_1.expect(isValidAddress).to.equal(true);
                    chai_1.expect(isValidPrefixAddress).to.equal(true);
                    return [2];
            }
        });
    }); });
    it('should be able to validate an XRP address', function () { return __awaiter(_this, void 0, void 0, function () {
        var isValidAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateAddress('XRP', 'mainnet', xrpAddress)];
                case 1:
                    isValidAddress = _a.sent();
                    chai_1.expect(isValidAddress).to.equal(true);
                    return [2];
            }
        });
    }); });
    it('should be able to validate an BTC Uri', function () { return __awaiter(_this, void 0, void 0, function () {
        var isValidUri, isValidTestUri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateUri('BTC', btcUri)];
                case 1:
                    isValidUri = _a.sent();
                    return [4, src_1.Validation.validateUri('BTC', btcTestUri)];
                case 2:
                    isValidTestUri = _a.sent();
                    chai_1.expect(isValidUri).to.equal(true);
                    chai_1.expect(isValidTestUri).to.equal(true);
                    return [2];
            }
        });
    }); });
    it('should be able to validate an BCH Uri', function () { return __awaiter(_this, void 0, void 0, function () {
        var isValidUri, isValidTestUri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateUri('BCH', bchUri)];
                case 1:
                    isValidUri = _a.sent();
                    return [4, src_1.Validation.validateUri('BCH', bchTestUri)];
                case 2:
                    isValidTestUri = _a.sent();
                    chai_1.expect(isValidUri).to.equal(true);
                    chai_1.expect(isValidTestUri).to.equal(true);
                    return [2];
            }
        });
    }); });
    it('should be able to validate an ETH Uri', function () { return __awaiter(_this, void 0, void 0, function () {
        var isValidUri, isValidUriParams;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateUri('ETH', ethUri)];
                case 1:
                    isValidUri = _a.sent();
                    return [4, src_1.Validation.validateUri('ETH', ethUriParams)];
                case 2:
                    isValidUriParams = _a.sent();
                    chai_1.expect(isValidUri).to.equal(true);
                    chai_1.expect(isValidUriParams).to.equal(true);
                    return [2];
            }
        });
    }); });
    it('should be able to invalidate an incorrect BTC address', function () { return __awaiter(_this, void 0, void 0, function () {
        var inValidAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateAddress('BTC', 'mainnet', invalidBtcAddress)];
                case 1:
                    inValidAddress = _a.sent();
                    chai_1.expect(inValidAddress).to.equal(false);
                    return [2];
            }
        });
    }); });
    it('should be able to invalidate an incorrect BCH address', function () { return __awaiter(_this, void 0, void 0, function () {
        var inValidAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateAddress('BCH', 'mainnet', invalidBchAddress)];
                case 1:
                    inValidAddress = _a.sent();
                    chai_1.expect(inValidAddress).to.equal(false);
                    return [2];
            }
        });
    }); });
    it('should be able to invalidate an incorrect ETH address', function () { return __awaiter(_this, void 0, void 0, function () {
        var inValidAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateAddress('ETH', 'mainnet', invalidEthAddress)];
                case 1:
                    inValidAddress = _a.sent();
                    chai_1.expect(inValidAddress).to.equal(false);
                    return [2];
            }
        });
    }); });
    it('should be able to invalidate an incorrect XRP address', function () { return __awaiter(_this, void 0, void 0, function () {
        var inValidAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, src_1.Validation.validateAddress('XRP', 'mainnet', invalidXrpAddress)];
                case 1:
                    inValidAddress = _a.sent();
                    chai_1.expect(inValidAddress).to.equal(false);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=validation.js.map