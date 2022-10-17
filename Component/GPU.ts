import {Component} from "./Component";
import {Provider} from "../Provider";
import {IComponent} from "../Interface/IComponent";
import {ChipSocket} from "./Chip";

export enum GPUMonitor {
    NONE='None',
    ALL='all',
    _60HZ = '60hz',
    _75HZ = '75hz',
    _144HZ = '144hz'
}

export class GPU extends Component implements IComponent<GPU>{
    private _type: string;
    private _monitor: GPUMonitor;


    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get monitor(): GPUMonitor {
        return this._monitor;
    }

    set monitor(value: GPUMonitor) {
        this._monitor = value;
    }

    constructor(provider?: Provider, price?: number, type?: string, monitor?: GPUMonitor) {
        super(provider, price);
        this._type = type || '';
        this._monitor = monitor || GPUMonitor.NONE;
    }

    build(type: string, monitor: GPUMonitor, nameProvider: string, price: number): GPU {
        return new GPU(new Provider(nameProvider),price, type, monitor)
    }

    detail(): void {
        console.log("===== GPU detail ====")
        console.log("Provider: ", this.provider.name)
        console.log("Price: ", this.price)
        console.log("Type: ", this.type)
        console.log("Monitor: ", this.monitor)
    }
}
