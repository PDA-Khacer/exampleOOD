import {PC} from "../PC";
import {Chip} from "../Component/Chip";
import {GPU} from "../Component/GPU";
import {Adapter} from "../Component/Adapter";
import {Main} from "../Component/Main";

export interface IBuildPC {
    /**
     * Build Chip
     * @param chip
     */
    buildChip(chip: Chip): void;

    /**
     * Build GPU
     * @param gpu
     */
    buildGPU(gpu: GPU): void;

    /**
     * Build Adapet
     * @param adapter
     */
    buildAdapter(adapter: Adapter): void;

    /**
     * Build Main
     * @param main
     */
    buildMain(main: Main): void;

    /**
     * Get all component of PC
     */
    detailPC(): void;
}
