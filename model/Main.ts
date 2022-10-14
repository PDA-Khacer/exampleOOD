import {Component} from "./Component";
import {ChipSocket} from "./Chip";
import {RamBus} from "./Ram";
import {GPUMonitor} from "./GPU";

export class Main extends Component {
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

    constructor(type: string, socketWorked: ChipSocket[], busWorked: RamBus[], monitorWorked: GPUMonitor[]) {
        super();
        this._type = type;
        this._socketWorked = socketWorked;
        this._busWorked = busWorked;
        this._monitorWorked = monitorWorked;
    }
}
