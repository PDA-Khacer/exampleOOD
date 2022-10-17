"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderPC = void 0;
const PC_1 = require("./PC");
class BuilderPC {
    constructor(pc) {
        this._pc = pc || new PC_1.PC();
    }
    get pc() {
        return this._pc;
    }
    buildAdapter(adapter) {
        console.log("Building Adapter .....");
        adapter.detail();
        if (!this.pc.checkCompatible(adapter)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.adapter = adapter;
        }
    }
    buildChip(chip) {
        console.log("Building Chip .....");
        chip.detail();
        if (!this.pc.checkCompatible(chip)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.chip = chip;
        }
    }
    buildGPU(gpu) {
        console.log("Building GPU .....");
        gpu.detail();
        if (!this.pc.checkCompatible(gpu)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.gpu = gpu;
        }
    }
    buildMain(main) {
        console.log("Building Main .....");
        main.detail();
        if (!this.pc.checkCompatible(main)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.main = main;
        }
    }
    AddRAM(ram) {
        console.log("Insert Ram .....");
        ram.detail();
        if (!this.pc.checkCompatible(ram)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.ram.push(ram);
        }
        return this;
    }
    AddSSD(ssd) {
        console.log("SSD Ram .....");
        ssd.detail();
        if (!this.pc.checkCompatible(ssd)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.ssd.push(ssd);
        }
        return this;
    }
    detailPC() {
        console.log("*********************** Detail PC ********************");
        this._pc.adapter.detail();
        this._pc.gpu.detail();
        this._pc.main.detail();
        this._pc.chip.detail();
        console.log("========== List Ram ===========");
        this._pc.ram.forEach(value => value.detail());
        console.log("========== List SSD ===========");
        this._pc.ssd.forEach(value => value.detail());
        console.log('\n Total cost: ', this.pc.getTotalCost());
        console.log("***************************************************");
    }
}
exports.BuilderPC = BuilderPC;
//# sourceMappingURL=BuilderPC.js.map