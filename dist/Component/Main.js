"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Component_1 = require("./Component");
const Provider_1 = require("../Provider");
class Main extends Component_1.Component {
    constructor(provider, price, type, socketWorked, busWorked, monitorWorked) {
        super(provider, price);
        this._type = type || '';
        this._socketWorked = socketWorked || [];
        this._busWorked = busWorked || [];
        this._monitorWorked = monitorWorked || [];
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get socketWorked() {
        return this._socketWorked;
    }
    set socketWorked(value) {
        this._socketWorked = value;
    }
    get busWorked() {
        return this._busWorked;
    }
    set busWorked(value) {
        this._busWorked = value;
    }
    get monitorWorked() {
        return this._monitorWorked;
    }
    set monitorWorked(value) {
        this._monitorWorked = value;
    }
    build(type, socketWorked, busWorked, monitorWorked, nameProvider, price) {
        return new Main(new Provider_1.Provider(nameProvider), price, type, socketWorked, busWorked, monitorWorked);
    }
    detail() {
        console.log("===== Main detail ====");
        console.log("Provider: ", this.provider.name);
        console.log("Price: ", this.price);
        console.log("Type: ", this.type);
        console.log("Socket worked: ", this.socketWorked.reduce((p, c) => p + c + ' ', ''));
        console.log("Bus worked: ", this.busWorked.reduce((p, c) => p + c + ' ', ''));
        console.log("Monitor worked: ", this.monitorWorked.reduce((p, c) => p + c + ' ', ''));
    }
}
exports.Main = Main;
//# sourceMappingURL=Main.js.map