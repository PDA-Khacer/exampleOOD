"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPU = exports.GPUMonitor = void 0;
const Component_1 = require("./Component");
const Provider_1 = require("../Provider");
var GPUMonitor;
(function (GPUMonitor) {
    GPUMonitor["NONE"] = "None";
    GPUMonitor["ALL"] = "all";
    GPUMonitor["_60HZ"] = "60hz";
    GPUMonitor["_75HZ"] = "75hz";
    GPUMonitor["_144HZ"] = "144hz";
})(GPUMonitor = exports.GPUMonitor || (exports.GPUMonitor = {}));
class GPU extends Component_1.Component {
    constructor(provider, price, type, monitor) {
        super(provider, price);
        this._type = type || '';
        this._monitor = monitor || GPUMonitor.NONE;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get monitor() {
        return this._monitor;
    }
    set monitor(value) {
        this._monitor = value;
    }
    build(type, monitor, nameProvider, price) {
        return new GPU(new Provider_1.Provider(nameProvider), price, type, monitor);
    }
    detail() {
        console.log("===== GPU detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Type: ", this.type);
        console.log("Monitor: ", this.monitor);
    }
}
exports.GPU = GPU;
//# sourceMappingURL=GPU.js.map