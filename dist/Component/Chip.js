"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chip = exports.ChipSocket = void 0;
const Component_1 = require("./Component");
const Provider_1 = require("../Provider");
var ChipSocket;
(function (ChipSocket) {
    ChipSocket["NONE"] = "None";
    ChipSocket["ALL"] = "all";
    ChipSocket["LGA370"] = "LGA370";
    ChipSocket["LGA473"] = "LGA473";
    ChipSocket["LGA478"] = "LGA478";
    ChipSocket["AMD462"] = "AMD462";
    ChipSocket["AMD754"] = "AMD754";
    ChipSocket["AMD939"] = "AMD939";
})(ChipSocket = exports.ChipSocket || (exports.ChipSocket = {}));
class Chip extends Component_1.Component {
    constructor(provider, price, core, socket) {
        super(provider, price);
        this._core = core || '';
        this._socket = socket || ChipSocket.NONE;
    }
    get core() {
        return this._core;
    }
    set core(value) {
        this._core = value;
    }
    get socket() {
        return this._socket;
    }
    set socket(value) {
        this._socket = value;
    }
    build(core, socket, nameProvider, price) {
        return new Chip(new Provider_1.Provider(nameProvider), price, core, socket);
    }
    detail() {
        console.log("===== Chip detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Type: ", this.core);
        console.log("Socket: ", this.socket);
    }
}
exports.Chip = Chip;
//# sourceMappingURL=Chip.js.map