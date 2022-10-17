"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSD = exports.SSDType = void 0;
const Component_1 = require("./Component");
const Provider_1 = require("../Provider");
var SSDType;
(function (SSDType) {
    SSDType["ALL"] = "all";
    SSDType["PCI"] = "pci";
    SSDType["NVME"] = "nvme";
})(SSDType = exports.SSDType || (exports.SSDType = {}));
class SSD extends Component_1.Component {
    constructor(provider, price, storage, type) {
        super(provider, price);
        this._storage = storage;
        this._type = type;
    }
    get storage() {
        return this._storage;
    }
    set storage(value) {
        this._storage = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    build(storage, type, nameProvider, price) {
        return new SSD(new Provider_1.Provider(nameProvider), price, storage, type);
    }
    detail() {
        console.log("===== SSD detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Storage: ", this.storage);
        console.log("Type: ", this.type);
    }
}
exports.SSD = SSD;
//# sourceMappingURL=SSD.js.map