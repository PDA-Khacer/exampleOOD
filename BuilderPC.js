"use strict";
exports.__esModule = true;
exports.BuilderPC = void 0;
var PC_1 = require("./PC");
var BuilderPC = /** @class */ (function () {
    function BuilderPC(pc) {
        this._pc = pc || new PC_1.PC();
    }
    Object.defineProperty(BuilderPC.prototype, "pc", {
        get: function () {
            return this._pc;
        },
        enumerable: false,
        configurable: true
    });
    BuilderPC.prototype.buildAdapter = function (adapter) {
        console.log("Building Adapter .....");
        adapter.detail();
        if (!this.pc.checkCompatible(adapter)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.adapter = adapter;
        }
    };
    BuilderPC.prototype.buildChip = function (chip) {
        console.log("Building Chip .....");
        chip.detail();
        if (!this.pc.checkCompatible(chip)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.chip = chip;
        }
    };
    BuilderPC.prototype.buildGPU = function (gpu) {
        console.log("Building GPU .....");
        gpu.detail();
        if (!this.pc.checkCompatible(gpu)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.gpu = gpu;
        }
    };
    BuilderPC.prototype.buildMain = function (main) {
        console.log("Building Main .....");
        main.detail();
        if (!this.pc.checkCompatible(main)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.main = main;
        }
    };
    BuilderPC.prototype.AddRAM = function (ram) {
        console.log("Insert Ram .....");
        ram.detail();
        if (!this.pc.checkCompatible(ram)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.ram.push(ram);
        }
        return this;
    };
    BuilderPC.prototype.AddSSD = function (ssd) {
        console.log("SSD Ram .....");
        ssd.detail();
        if (!this.pc.checkCompatible(ssd)) {
            console.log("Not compatible ! Build Fail");
        }
        else {
            this._pc.ssd.push(ssd);
        }
        return this;
    };
    BuilderPC.prototype.detailPC = function () {
        console.log("*********************** Detail PC ********************");
        this._pc.adapter.detail();
        this._pc.gpu.detail();
        this._pc.main.detail();
        this._pc.chip.detail();
        console.log("========== List Ram ===========");
        this._pc.ram.forEach(function (value) { return value.detail(); });
        console.log("========== List SSD ===========");
        this._pc.ssd.forEach(function (value) { return value.detail(); });
        console.log('\n Total cost: ', this.pc.getTotalCost());
        console.log("***************************************************");
    };
    return BuilderPC;
}());
exports.BuilderPC = BuilderPC;
