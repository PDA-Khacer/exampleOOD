import {BuildPC} from "../interface/BuildPC";
import {Ram} from "./Ram";
import {Adapter} from "./Adapter";
import {Chip} from "./Chip";
import {GPU} from "./GPU";
import {Main} from "./Main";
import {SSD} from "./SSD";
import {PC} from "./PC";

export class ComposePC implements BuildPC {
    private _pc: PC;

    get pc(): PC {
        return this._pc;
    }

    set pc(value: PC) {
        this._pc = value;
    }

    constructor(pc: PC) {
        this._pc = pc;
    }

    buildAdapter(adapter: Adapter): void {
    }

    buildChip(chip: Chip): void {
    }

    buildGPU(gpu: GPU): void {
    }

    buildMain(main: Main): void {
    }

    buildRAM(ram: Ram): void {
    }

    buildSSD(ssd: SSD): ComposePC {
        return undefined;
    }

    getPC(): PC {
        return this._pc;
    }
}
