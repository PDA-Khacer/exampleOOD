"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PC = void 0;
const Ram_1 = require("./Component/Ram");
const Chip_1 = require("./Component/Chip");
const GPU_1 = require("./Component/GPU");
const Adapter_1 = require("./Component/Adapter");
const Main_1 = require("./Component/Main");
class PC {
    constructor(ssd, ram, chip, gpu, adapter, main) {
        this._ssd = ssd || [];
        this._ram = ram || [];
        this._chip = chip || new Chip_1.Chip();
        this._gpu = gpu || new GPU_1.GPU();
        this._adapter = adapter || new Adapter_1.Adapter();
        this._main = main || new Main_1.Main();
    }
    get ssd() {
        return this._ssd;
    }
    set ssd(value) {
        this._ssd = value;
    }
    get ram() {
        return this._ram;
    }
    set ram(value) {
        this._ram = value;
    }
    get chip() {
        return this._chip;
    }
    set chip(value) {
        this._chip = value;
    }
    get gpu() {
        return this._gpu;
    }
    set gpu(value) {
        this._gpu = value;
    }
    get adapter() {
        return this._adapter;
    }
    set adapter(value) {
        this._adapter = value;
    }
    get main() {
        return this._main;
    }
    set main(value) {
        this._main = value;
    }
    getTotalCost() {
        return this.chip.price + this.gpu.price + this.adapter.price + this.main.price
            + this.ssd.reduce((p, c) => p + c.price, 0)
            + this.ram.reduce((p, c) => p + c.price, 0);
    }
    checkCompatible(con) {
        switch (con.constructor.name) {
            case Main_1.Main.name: {
                const main = con;
                // check has ram, chip, gpu
                if (this.ram.length > 0) {
                    const busRams = this.ram.reduce((p, c) => { p.push(c); return p; }, []);
                    if (!busRams.reduce((p, c) => {
                        if (p && main.busWorked.indexOf(c.bus) < 0) {
                            return false;
                        }
                        return p;
                    }, true)) {
                        return false;
                    }
                }
                if (this.chip.price > 0 && main.socketWorked.indexOf(this.chip.socket) < 0) {
                    return false;
                }
                if (this.gpu.price > 0 && main.monitorWorked.indexOf(this.gpu.monitor) < 0) {
                    return false;
                }
                return true;
            }
            case Ram_1.Ram.name: {
                // if pc have main
                if (this.main.price > 0 && this.main.busWorked.indexOf(con.bus) < 0) {
                    return false;
                }
                return true;
            }
            case Chip_1.Chip.name: {
                // if pc have main
                if (this.main.price > 0 && this.main.socketWorked.indexOf(con.socket) < 0) {
                    return false;
                }
                return true;
            }
            case GPU_1.GPU.name: {
                // if pc have main
                if (this.main.price > 0 && this.main.monitorWorked.indexOf(con.monitor) < 0) {
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
exports.PC = PC;
//# sourceMappingURL=PC.js.map