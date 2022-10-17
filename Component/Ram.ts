import {Component} from "./Component";
import {Provider} from "../Provider";
import {IComponent} from "../Interface/IComponent";

export enum RamBus {
    NONE='None',
    ALL='all',
    _2226=2260,
    _2400=2400,
    _3200=3200
}

export class Ram extends Component implements IComponent<Ram>{
    private _storage: number;
    private _bus: RamBus;

    get bus(): RamBus {
        return this._bus;
    }

    set bus(value: RamBus) {
        this._bus = value;
    }
    get storage(): number {
        return this._storage;
    }

    set storage(value: number) {
        this._storage = value;
    }


    constructor(provider?: Provider, price?: number, storage?: number, bus?: RamBus) {
        super(provider, price);
        this._storage = storage || 0;
        this._bus = bus || RamBus.NONE;
    }

    build(storage: number, bus: RamBus, nameProvider: string, price: number): Ram {
        return new Ram(new Provider(nameProvider),price, storage, bus)
    }

    detail(): void {
        console.log("===== Ram detail ====")
        console.log("Provider: ", this.provider.name)
        console.log("Price: ", this.price)
        console.log("Storage: ", this.storage)
        console.log("Bus: ", this.bus)
    }
}
