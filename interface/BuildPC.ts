import {SSD} from "../model/SSD";
import {PC} from "../model/PC";
import {Ram} from "../model/Ram";
import {Chip} from "../model/Chip";
import {GPU} from "../model/GPU";
import {Adapter} from "../model/Adapter";
import {Main} from "../model/Main";

export interface BuildPC {
    /**
     *  Build SSD
     * @param ssd want add
     */
    buildSSD(ssd: SSD) : BuildPC;
    buildRAM(ram: Ram): void;
    buildChip(chip: Chip): void;
    buildGPU(gpu: GPU): void;
    buildAdapter(adapter: Adapter): void;
    buildMain(main: Main): void;
    getPC(): PC;
}
