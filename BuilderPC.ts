import {IBuildPC} from "./Interface/IBuildPC";
import {IComponentAppendable} from "./Interface/IComponentAppendable";
import {Adapter} from "./Component/Adapter";
import {Chip} from "./Component/Chip";
import {GPU} from "./Component/GPU";
import {Main} from "./Component/Main";
import {Ram} from "./Component/Ram";
import {SSD} from "./Component/SSD";
import {PC} from "./PC";

export class BuilderPC implements IBuildPC, IComponentAppendable<BuilderPC>
{
    private _pc: PC;

    get pc(): PC {
        return this._pc;
    }

    constructor(pc?: PC) {
        this._pc = pc || new PC();
    }

    buildAdapter(adapter: Adapter): void {
        console.log("Building Adapter .....");
        adapter.detail();
        if (!this.pc.checkCompatible(adapter)) {
            console.log("Not compatible ! Build Fail")
        } else {
            this._pc.adapter = adapter;
        }
    }

    buildChip(chip: Chip): void {
        console.log("Building Chip .....");
        chip.detail();
        if (!this.pc.checkCompatible(chip)) {
            console.log("Not compatible ! Build Fail")
        } else {
           this._pc.chip = chip;
        }
    }

    buildGPU(gpu: GPU): void {
        console.log("Building GPU .....");
        gpu.detail();
        if (!this.pc.checkCompatible(gpu)) {
            console.log("Not compatible ! Build Fail")
        } else {
            this._pc.gpu = gpu;
        }

    }

    buildMain(main: Main): void {
        console.log("Building Main .....");
        main.detail();
        if (!this.pc.checkCompatible(main)) {
            console.log("Not compatible ! Build Fail")
        } else {
            this._pc.main = main;
        }
    }

    AddRAM(ram: Ram): BuilderPC {
        console.log("Insert Ram .....");
        ram.detail()
        if (!this.pc.checkCompatible(ram)) {
            console.log("Not compatible ! Build Fail")
        } else {
            this._pc.ram.push(ram);
        }
        return this;
    }

    AddSSD(ssd: SSD): BuilderPC {
        console.log("SSD Ram .....");
        ssd.detail()
        if (!this.pc.checkCompatible(ssd)) {
            console.log("Not compatible ! Build Fail")
        } else {
            this._pc.ssd.push(ssd);
        }
        return this;
    }

    detailPC(): void {
        console.log("*********************** Detail PC ********************");
        this._pc.adapter.detail();
        this._pc.gpu.detail();
        this._pc.main.detail();
        this._pc.chip.detail();
        console.log("========== List Ram ===========")
        this._pc.ram.forEach(value => value.detail())
        console.log("========== List SSD ===========")
        this._pc.ssd.forEach(value => value.detail())
        console.log('\n Total cost: ', this.pc.getTotalCost())
        console.log("***************************************************");
    }
}
