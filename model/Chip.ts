import {Component} from "./Component";

export enum ChipSocket {
    ALL='all',
    LGA370='LGA370',
    LGA473='LGA473',
    LGA478='LGA478',
    AMD462='AMD462',
    AMD754='AMD754',
    AMD939='AMD939'
}

export class Chip extends Component {
    private _core: string;
    private _socket: ChipSocket;

    get core(): string {
        return this._core;
    }

    set core(value: string) {
        this._core = value;
    }

    get socket(): ChipSocket {
        return this._socket;
    }

    set socket(value: ChipSocket) {
        this._socket = value;
    }

    constructor(core: string, socket: ChipSocket) {
        super();
        this._core = core;
        this._socket = socket;
    }
}
