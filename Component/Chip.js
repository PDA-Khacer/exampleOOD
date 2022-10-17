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
exports.Chip = exports.ChipSocket = void 0;
var Component_1 = require("./Component");
var Provider_1 = require("../Provider");
var ChipSocket;
(function (ChipSocket) {
    ChipSocket["NONE"] = "None";
    ChipSocket["ALL"] = "all";
    ChipSocket["LGA370"] = "LGA370";
    ChipSocket["LGA473"] = "LGA473";
    ChipSocket["LGA478"] = "LGA478";
    ChipSocket["AMD462"] = "AMD462";
    ChipSocket["AMD754"] = "AMD754";
    ChipSocket["AMD939"] = "AMD939";
})(ChipSocket = exports.ChipSocket || (exports.ChipSocket = {}));
var Chip = /** @class */ (function (_super) {
    __extends(Chip, _super);
    function Chip(provider, price, core, socket) {
        var _this = _super.call(this, provider, price) || this;
        _this._core = core || '';
        _this._socket = socket || ChipSocket.NONE;
        return _this;
    }
    Object.defineProperty(Chip.prototype, "core", {
        get: function () {
            return this._core;
        },
        set: function (value) {
            this._core = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chip.prototype, "socket", {
        get: function () {
            return this._socket;
        },
        set: function (value) {
            this._socket = value;
        },
        enumerable: false,
        configurable: true
    });
    Chip.prototype.build = function (core, socket, nameProvider, price) {
        return new Chip(new Provider_1.Provider(nameProvider), price, core, socket);
    };
    Chip.prototype.detail = function () {
        console.log("===== Chip detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Type: ", this.core);
        console.log("Socket: ", this.socket);
    };
    return Chip;
}(Component_1.Component));
exports.Chip = Chip;
