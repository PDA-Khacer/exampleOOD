import {SSD} from "../Component/SSD";
import {Ram} from "../Component/Ram";

export interface IComponentAppendable<T> {
    /**
     * Add SSD
     * @param ssd want add
     */
    AddSSD(ssd: SSD) : T;

    /**
     * Add Ram
     * @param ram want add
     */
    AddRAM(ram: Ram): T;
}
