import {Component} from "./Component/Component";
import {SSD} from "./Component/SSD";
import {Ram, RamBus} from "./Component/Ram";
import {Chip, ChipSocket} from "./Component/Chip";
import {GPU, GPUMonitor} from "./Component/GPU";
import {Adapter} from "./Component/Adapter";
import {Main} from "./Component/Main";

export class PC {
    private _ssd: SSD[];
    private _ram: Ram[];
    private _chip: Chip;
    private _gpu: GPU;
    private _adapter: Adapter;
    private _main: Main;

    get ssd(): SSD[] {
        return this._ssd;
    }

    set ssd(value: SSD[]) {
        this._ssd = value;
    }

    get ram(): Ram[] {
        return this._ram;
    }

    set ram(value: Ram[]) {
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

    constructor(ssd?: SSD[], ram?: Ram[], chip?: Chip, gpu?: GPU, adapter?: Adapter, main?: Main) {
        this._ssd = ssd || [];
        this._ram = ram || [];
        this._chip = chip || new Chip();
        this._gpu = gpu || new GPU();
        this._adapter = adapter || new Adapter();
        this._main = main || new Main();
    }

    getTotalCost() :number {
        return this.chip.price + this.gpu.price + this.adapter.price + this.main.price
            + this.ssd.reduce((p,c) => p + c.price, 0)
            + this.ram.reduce((p,c) => p + c.price, 0)
    }

     checkCompatible(con : Component): boolean {
        switch (con.constructor.name) {
            case Main.name: {
                console.log("Checking main ....");
                const main = con as Main;
                // check has ram, chip, gpu
                if (this.ram.length > 0 && main.busWorked.indexOf(RamBus.ALL) < 0) {
                    const busRams = this.ram.reduce((p,c) => {p.push(c); return p} , [] as Ram[])
                    if (!busRams.reduce((p, c) => {
                        if(p && main.busWorked.indexOf(c.bus) < 0) {
                            return false;
                        }
                        return p;
                    }, true)) {
                        return false
                    }
                }

                if (this.chip.price > 0 && main.socketWorked.indexOf(ChipSocket.ALL) < 0 && main.socketWorked.indexOf(this.chip.socket) < 0) {
                    return false
                }

                if (this.gpu.price > 0 && main.monitorWorked.indexOf(GPUMonitor.ALL) < 0 && main.monitorWorked.indexOf(this.gpu.monitor) < 0) {
                    return false
                }

                return true;
            }
            case Ram.name: {
                console.log("Checking ram ....");
                // if pc have main
                if (this.main.price > 0 && this.main.busWorked.indexOf((con as Ram).bus) < 0) {
                    return false;
                }
                return true;
            }
            case Chip.name: {
                console.log("Checking chip ....");
                // if pc have main
                if (this.main.price > 0 && this.main.socketWorked.indexOf((con as Chip).socket) < 0) {
                    return false;
                }
                return true;
            }
            case GPU.name: {
                console.log("Checking GPU ....");
                // if pc have main
                if (this.main.price > 0 && this.main.monitorWorked.indexOf((con as GPU).monitor) < 0) {
                    return false;
                }
                return true;
            }
            default: {
                return true;
            }
        }
    }
}
