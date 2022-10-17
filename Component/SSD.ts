import {Component} from "./Component";
import {Provider} from "../Provider";
import {RamBus} from "./Ram";
import {IComponent} from "../Interface/IComponent";

export enum SSDType {
    ALL='all',
    PCI='pci',
    NVME='nvme'
}

export class SSD extends Component  implements IComponent<SSD>{
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

    constructor(provider: Provider, price: number, storage: number, type: SSDType) {
        super(provider, price);
        this._storage = storage;
        this._type = type;
    }

    build(storage: number, type: SSDType, nameProvider: string, price: number): SSD {
        return new SSD(new Provider(nameProvider),price, storage, type)
    }

    detail(): void {
        console.log("===== SSD detail ====")
        console.log("Provider: ", this.provider.name)
        console.log("Price: ", this.price)
        console.log("Storage: ", this.storage)
        console.log("Type: ", this.type)
    }
}
