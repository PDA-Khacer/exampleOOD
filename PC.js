"use strict";
exports.__esModule = true;
exports.PC = void 0;
var Ram_1 = require("./Component/Ram");
var Chip_1 = require("./Component/Chip");
var GPU_1 = require("./Component/GPU");
var Adapter_1 = require("./Component/Adapter");
var Main_1 = require("./Component/Main");
var PC = /** @class */ (function () {
    function PC(ssd, ram, chip, gpu, adapter, main) {
        this._ssd = ssd || [];
        this._ram = ram || [];
        this._chip = chip || new Chip_1.Chip();
        this._gpu = gpu || new GPU_1.GPU();
        this._adapter = adapter || new Adapter_1.Adapter();
        this._main = main || new Main_1.Main();
    }
    Object.defineProperty(PC.prototype, "ssd", {
        get: function () {
            return this._ssd;
        },
        set: function (value) {
            this._ssd = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PC.prototype, "ram", {
        get: function () {
            return this._ram;
        },
        set: function (value) {
            this._ram = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PC.prototype, "chip", {
        get: function () {
            return this._chip;
        },
        set: function (value) {
            this._chip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PC.prototype, "gpu", {
        get: function () {
            return this._gpu;
        },
        set: function (value) {
            this._gpu = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PC.prototype, "adapter", {
        get: function () {
            return this._adapter;
        },
        set: function (value) {
            this._adapter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PC.prototype, "main", {
        get: function () {
            return this._main;
        },
        set: function (value) {
            this._main = value;
        },
        enumerable: false,
        configurable: true
    });
    PC.prototype.getTotalCost = function () {
        return this.chip.price + this.gpu.price + this.adapter.price + this.main.price
            + this.ssd.reduce(function (p, c) { return p + c.price; }, 0)
            + this.ram.reduce(function (p, c) { return p + c.price; }, 0);
    };
    PC.prototype.checkCompatible = function (con) {
        switch (con.constructor.name) {
            case Main_1.Main.name: {
                console.log("Checking main ....");
                var main_1 = con;
                // check has ram, chip, gpu
                if (this.ram.length > 0 && main_1.busWorked.indexOf(Ram_1.RamBus.ALL) < 0) {
                    var busRams = this.ram.reduce(function (p, c) { p.push(c); return p; }, []);
                    if (!busRams.reduce(function (p, c) {
                        if (p && main_1.busWorked.indexOf(c.bus) < 0) {
                            return false;
                        }
                        return p;
                    }, true)) {
                        return false;
                    }
                }
                if (this.chip.price > 0 && main_1.socketWorked.indexOf(Chip_1.ChipSocket.ALL) < 0 && main_1.socketWorked.indexOf(this.chip.socket) < 0) {
                    return false;
                }
                if (this.gpu.price > 0 && main_1.monitorWorked.indexOf(GPU_1.GPUMonitor.ALL) < 0 && main_1.monitorWorked.indexOf(this.gpu.monitor) < 0) {
                    return false;
                }
                return true;
            }
            case Ram_1.Ram.name: {
                console.log("Checking ram ....");
                // if pc have main
                if (this.main.price > 0 && this.main.busWorked.indexOf(con.bus) < 0) {
                    return false;
                }
                return true;
            }
            case Chip_1.Chip.name: {
                console.log("Checking chip ....");
                // if pc have main
                if (this.main.price > 0 && this.main.socketWorked.indexOf(con.socket) < 0) {
                    return false;
                }
                return true;
            }
            case GPU_1.GPU.name: {
                console.log("Checking GPU ....");
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
    };
    return PC;
}());
exports.PC = PC;
