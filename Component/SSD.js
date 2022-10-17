"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SSD = exports.SSDType = void 0;
var Component_1 = require("./Component");
var Provider_1 = require("../Provider");
var SSDType;
(function (SSDType) {
    SSDType["ALL"] = "all";
    SSDType["PCI"] = "pci";
    SSDType["NVME"] = "nvme";
})(SSDType = exports.SSDType || (exports.SSDType = {}));
var SSD = /** @class */ (function (_super) {
    __extends(SSD, _super);
    function SSD(provider, price, storage, type) {
        var _this = _super.call(this, provider, price) || this;
        _this._storage = storage;
        _this._type = type;
        return _this;
    }
    Object.defineProperty(SSD.prototype, "storage", {
        get: function () {
            return this._storage;
        },
        set: function (value) {
            this._storage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SSD.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    SSD.prototype.build = function (storage, type, nameProvider, price) {
        return new SSD(new Provider_1.Provider(nameProvider), price, storage, type);
    };
    SSD.prototype.detail = function () {
        console.log("===== SSD detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Storage: ", this.storage);
        console.log("Type: ", this.type);
    };
    return SSD;
}(Component_1.Component));
exports.SSD = SSD;
