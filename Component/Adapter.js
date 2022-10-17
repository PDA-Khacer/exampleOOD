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
exports.Adapter = void 0;
var Component_1 = require("./Component");
var Provider_1 = require("../Provider");
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(provider, price, output) {
        var _this = _super.call(this, provider, price) || this;
        _this._output = output || 0;
        return _this;
    }
    Object.defineProperty(Adapter.prototype, "output", {
        get: function () {
            return this._output;
        },
        set: function (value) {
            this._output = value;
        },
        enumerable: false,
        configurable: true
    });
    Adapter.prototype.build = function (output, nameProvider, price) {
        return new Adapter(new Provider_1.Provider(nameProvider), price, output);
    };
    Adapter.prototype.detail = function () {
        console.log("===== Adapter detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Output: ", this.output);
    };
    return Adapter;
}(Component_1.Component));
exports.Adapter = Adapter;
