import {Component} from "./Component";

export enum SSDType {
    ALL='all',
    PCI='pci',
    NVME='nvme'
}

export class SSD extends Component {
    private _storage: number;
    private _type:SSDType;


    get storage(): number {
        return this._storage;
    }

    set storage(value: number) {
        this._storage = value;
    }

    get type(): SSDType {
        return this._type;
    }

    set type(value: SSDType) {
        this._type = value;
    }

    constructor(storage: number, type: SSDType) {
        super();
        this._storage = storage;
        this._type = type;
    }
}
