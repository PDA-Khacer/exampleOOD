import {Component} from "./Component";
import {SSD} from "./SSD";
import {Ram} from "./Ram";
import {Chip} from "./Chip";
import {GPU} from "./GPU";
import {Adapter} from "./Adapter";
import {Main} from "./Main";

export class PC {
    private _ssd: SSD;
    private _ram: Ram;
    private _chip: Chip;
    private _gpu: GPU;
    private _adapter: Adapter;
    private _main: Main;


    get ssd(): SSD {
        return this._ssd;
    }

    set ssd(value: SSD) {
        this._ssd = value;
    }

    get ram(): Ram {
        return this._ram;
    }

    set ram(value: Ram) {
        this._ram = value;
    }

    get chip(): Chip {
        return this._chip;
    }

    set chip(value: Chip) {
        this._chip = value;
    }

    get gpu(): GPU {
        return this._gpu;
    }

    set gpu(value: GPU) {
        this._gpu = value;
    }

    get adapter(): Adapter {
        return this._adapter;
    }

    set adapter(value: Adapter) {
        this._adapter = value;
    }

    get main(): Main {
        return this._main;
    }

    set main(value: Main) {
        this._main = value;
    }

    constructor(ssd: SSD, ram: Ram, chip: Chip, gpu: GPU, adapter: Adapter, main: Main) {
        this._ssd = ssd;
        this._ram = ram;
        this._chip = chip;
        this._gpu = gpu;
        this._adapter = adapter;
        this._main = main;
    }
}
