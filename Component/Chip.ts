import {Component} from "./Component";
import {Provider} from "../Provider";
import {IComponent} from "../Interface/IComponent";

export enum ChipSocket {
    NONE='None',
    ALL='all',
    LGA370='LGA370',
    LGA473='LGA473',
    LGA478='LGA478',
    AMD462='AMD462',
    AMD754='AMD754',
    AMD939='AMD939'
}

export class Chip extends Component implements IComponent<Chip>{
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

    constructor(provider?: Provider, price?: number, core?: string, socket?: ChipSocket) {
        super(provider, price);
        this._core = core || '';
        this._socket = socket || ChipSocket.NONE;
    }

    build(core: string, socket: ChipSocket, nameProvider: string, price: number): Chip {
        return new Chip(new Provider(nameProvider),price, core, socket)
    }

    detail(): void {
        console.log("===== Chip detail ====")
        console.log("Provider: ", this.provider.name)
        console.log("Price: ", this.price)
        console.log("Type: ", this.core)
        console.log("Socket: ", this.socket)
    }
}
