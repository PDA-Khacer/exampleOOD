"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
const Component_1 = require("./Component");
const Provider_1 = require("../Provider");
class Adapter extends Component_1.Component {
    constructor(provider, price, output) {
        super(provider, price);
        this._output = output || 0;
    }
    get output() {
        return this._output;
    }
    set output(value) {
        this._output = value;
    }
    build(output, nameProvider, price) {
        return new Adapter(new Provider_1.Provider(nameProvider), price, output);
    }
    detail() {
        console.log("===== Adapter detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Output: ", this.output);
    }
}
exports.Adapter = Adapter;
//# sourceMappingURL=Adapter.js.map