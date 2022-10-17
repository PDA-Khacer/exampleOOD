"use strict";
exports.__esModule = true;
exports.Component = void 0;
var Provider_1 = require("../Provider");
var Component = /** @class */ (function () {
    function Component(provider, price) {
        this._provider = provider || new Provider_1.Provider();
        this._price = price || 0;
    }
    Object.defineProperty(Component.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        set: function (value) {
            this._provider = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return Component;
}());
exports.Component = Component;
