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
exports.Ram = exports.RamBus = void 0;
var Component_1 = require("./Component");
var Provider_1 = require("../Provider");
var RamBus;
(function (RamBus) {
    RamBus["NONE"] = "None";
    RamBus["ALL"] = "all";
    RamBus[RamBus["_2226"] = 2260] = "_2226";
    RamBus[RamBus["_2400"] = 2400] = "_2400";
    RamBus[RamBus["_3200"] = 3200] = "_3200";
})(RamBus = exports.RamBus || (exports.RamBus = {}));
var Ram = /** @class */ (function (_super) {
    __extends(Ram, _super);
    function Ram(provider, price, storage, bus) {
        var _this = _super.call(this, provider, price) || this;
        _this._storage = storage || 0;
        _this._bus = bus || RamBus.NONE;
        return _this;
    }
    Object.defineProperty(Ram.prototype, "bus", {
        get: function () {
            return this._bus;
        },
        set: function (value) {
            this._bus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ram.prototype, "storage", {
        get: function () {
            return this._storage;
        },
        set: function (value) {
            this._storage = value;
        },
        enumerable: false,
        configurable: true
    });
    Ram.prototype.build = function (storage, bus, nameProvider, price) {
        return new Ram(new Provider_1.Provider(nameProvider), price, storage, bus);
    };
    Ram.prototype.detail = function () {
        console.log("===== Ram detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Storage: ", this.storage);
        console.log("Bus: ", this.bus);
    };
    return Ram;
}(Component_1.Component));
exports.Ram = Ram;
