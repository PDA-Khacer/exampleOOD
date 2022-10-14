interface AppendItem {
    appendRam(i: string): AppendItem;
    appendSSD(i: string): AppendItem;
}

interface PCBuilder{
    buildChip(i: string): void;
    buildMain(i: string): void;
    buildAdapter(i: string): void;
    buildGPU(i: string): void;
}

class PC implements AppendItem, PCBuilder{
    ram: string[];
    ssd: string[];
    chip: string;
    main: string;
    gpu: string;

    constructor(ram: string[], ssd: string[], chip: string, main: string, gpu: string) {
        this.ram = ram;
        this.ssd = ssd;
        this.chip = chip;
        this.main = main;
        this.gpu = gpu;
    }

    appendRam(i: string): AppendItem {
        this.ram.push(i)
        return this;
    }

    appendSSD(i: string): AppendItem {
        return this;
    }

    buildAdapter(i: string): void {
    }

    buildChip(i: string): void {
    }

    buildGPU(i: string): void {
    }

    buildMain(i: string): void {
    }
}

