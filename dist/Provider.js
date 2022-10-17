"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
class Provider {
    constructor(name) {
        this._name = name || '';
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map