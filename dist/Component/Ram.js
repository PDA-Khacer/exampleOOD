"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ram = exports.RamBus = void 0;
const Component_1 = require("./Component");
const Provider_1 = require("../Provider");
var RamBus;
(function (RamBus) {
    RamBus["NONE"] = "None";
    RamBus["ALL"] = "all";
    RamBus[RamBus["_2226"] = 2260] = "_2226";
    RamBus[RamBus["_2400"] = 2400] = "_2400";
    RamBus[RamBus["_3200"] = 3200] = "_3200";
})(RamBus = exports.RamBus || (exports.RamBus = {}));
class Ram extends Component_1.Component {
    constructor(provider, price, storage, bus) {
        super(provider, price);
        this._storage = storage || 0;
        this._bus = bus || RamBus.NONE;
    }
    get bus() {
        return this._bus;
    }
    set bus(value) {
        this._bus = value;
    }
    get storage() {
        return this._storage;
    }
    set storage(value) {
        this._storage = value;
    }
    build(storage, bus, nameProvider, price) {
        return new Ram(new Provider_1.Provider(nameProvider), price, storage, bus);
    }
    detail() {
        console.log("===== GPU detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Storage: ", this.storage);
        console.log("Bus: ", this.bus);
    }
}
exports.Ram = Ram;
//# sourceMappingURL=Ram.js.map