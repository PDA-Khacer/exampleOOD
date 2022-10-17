import {Component} from "./Component";
import {ChipSocket} from "./Chip";
import {RamBus} from "./Ram";
import {GPUMonitor} from "./GPU";
import {Provider} from "../Provider";
import {IComponent} from "../Interface/IComponent";

export class Main extends Component implements IComponent<Main>{
    private _type: string;
    private _socketWorked: ChipSocket[];
    private _busWorked: RamBus[];
    private _monitorWorked: GPUMonitor[];

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get socketWorked(): ChipSocket[] {
        return this._socketWorked;
    }

    set socketWorked(value: ChipSocket[]) {
        this._socketWorked = value;
    }

    get busWorked(): RamBus[] {
        return this._busWorked;
    }

    set busWorked(value: RamBus[]) {
        this._busWorked = value;
    }

    get monitorWorked(): GPUMonitor[] {
        return this._monitorWorked;
    }

    set monitorWorked(value: GPUMonitor[]) {
        this._monitorWorked = value;
    }

    constructor(provider?: Provider, price?: number, type?: string, socketWorked?: ChipSocket[], busWorked?: RamBus[], monitorWorked?: GPUMonitor[]) {
        super(provider, price);
        this._type = type || '';
        this._socketWorked = socketWorked || [];
        this._busWorked = busWorked || [];
        this._monitorWorked = monitorWorked || [];
    }

    build(type: string, socketWorked: ChipSocket[], busWorked: RamBus[], monitorWorked: GPUMonitor[], nameProvider: string, price: number): Main {
        return new Main(new Provider(nameProvider), price, type, socketWorked, busWorked, monitorWorked);
    }

    detail(): void {
        console.log("===== Main detail ====")
        console.log("Provider: ", this.provider.name)
        console.log("Price: ", this.price)
        console.log("Type: ", this.type)
        console.log("Socket worked: ", this.socketWorked.reduce((p, c) => p + c + ' ',''))
        console.log("Bus worked: ", this.busWorked.reduce((p, c) => p + c + ' ',''))
        console.log("Monitor worked: ", this.monitorWorked.reduce((p, c) => p + c + ' ',''))
    }
}
