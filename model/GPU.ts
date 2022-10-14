import {Component} from "./Component";

export enum GPUMonitor {
    ALL='all',
    _60HZ = '60hz',
    _75HZ = '75hz',
    _144HZ = '144hz'
}

export class GPU extends Component {
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

    constructor(type: string, monitor: GPUMonitor) {
        super();
        this._type = type;
        this._monitor = monitor;
    }
}
