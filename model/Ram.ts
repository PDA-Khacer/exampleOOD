import {Component} from "./Component";

export enum RamBus {
    ALL='all',
    _2226=2260,
    _2400=2400,
    _3200=3200
}

export class Ram extends Component {
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

    constructor(storage: number, type: RamBus) {
        super();
        this._storage = storage;
        this._bus = type;
    }
}
