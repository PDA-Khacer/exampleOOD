"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const Provider_1 = require("../Provider");
class Component {
    constructor(provider, price) {
        this._provider = provider || new Provider_1.Provider();
        this._price = price || 0;
    }
    get provider() {
        return this._provider;
    }
    set provider(value) {
        this._provider = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}
exports.Component = Component;
//# sourceMappingURL=Component.js.map