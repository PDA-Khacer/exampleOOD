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
exports.Main = void 0;
var Component_1 = require("./Component");
var Provider_1 = require("../Provider");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(provider, price, type, socketWorked, busWorked, monitorWorked) {
        var _this = _super.call(this, provider, price) || this;
        _this._type = type || '';
        _this._socketWorked = socketWorked || [];
        _this._busWorked = busWorked || [];
        _this._monitorWorked = monitorWorked || [];
        return _this;
    }
    Object.defineProperty(Main.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "socketWorked", {
        get: function () {
            return this._socketWorked;
        },
        set: function (value) {
            this._socketWorked = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "busWorked", {
        get: function () {
            return this._busWorked;
        },
        set: function (value) {
            this._busWorked = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "monitorWorked", {
        get: function () {
            return this._monitorWorked;
        },
        set: function (value) {
            this._monitorWorked = value;
        },
        enumerable: false,
        configurable: true
    });
    Main.prototype.build = function (type, socketWorked, busWorked, monitorWorked, nameProvider, price) {
        return new Main(new Provider_1.Provider(nameProvider), price, type, socketWorked, busWorked, monitorWorked);
    };
    Main.prototype.detail = function () {
        console.log("===== Main detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Type: ", this.type);
        console.log("Socket worked: ", this.socketWorked.reduce(function (p, c) { return p + c + ' '; }, ''));
        console.log("Bus worked: ", this.busWorked.reduce(function (p, c) { return p + c + ' '; }, ''));
        console.log("Monitor worked: ", this.monitorWorked.reduce(function (p, c) { return p + c + ' '; }, ''));
    };
    return Main;
}(Component_1.Component));
exports.Main = Main;
