"use strict";
exports.__esModule = true;
exports.Provider = void 0;
var Provider = /** @class */ (function () {
    function Provider(name) {
        this._name = name || '';
    }
    Object.defineProperty(Provider.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Provider;
}());
exports.Provider = Provider;
