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
exports.GPU = exports.GPUMonitor = void 0;
var Component_1 = require("./Component");
var Provider_1 = require("../Provider");
var GPUMonitor;
(function (GPUMonitor) {
    GPUMonitor["NONE"] = "None";
    GPUMonitor["ALL"] = "all";
    GPUMonitor["_60HZ"] = "60hz";
    GPUMonitor["_75HZ"] = "75hz";
    GPUMonitor["_144HZ"] = "144hz";
})(GPUMonitor = exports.GPUMonitor || (exports.GPUMonitor = {}));
var GPU = /** @class */ (function (_super) {
    __extends(GPU, _super);
    function GPU(provider, price, type, monitor) {
        var _this = _super.call(this, provider, price) || this;
        _this._type = type || '';
        _this._monitor = monitor || GPUMonitor.NONE;
        return _this;
    }
    Object.defineProperty(GPU.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GPU.prototype, "monitor", {
        get: function () {
            return this._monitor;
        },
        set: function (value) {
            this._monitor = value;
        },
        enumerable: false,
        configurable: true
    });
    GPU.prototype.build = function (type, monitor, nameProvider, price) {
        return new GPU(new Provider_1.Provider(nameProvider), price, type, monitor);
    };
    GPU.prototype.detail = function () {
        console.log("===== GPU detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Type: ", this.type);
        console.log("Monitor: ", this.monitor);
    };
    return GPU;
}(Component_1.Component));
exports.GPU = GPU;
