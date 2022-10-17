import {BuilderPC} from "./BuilderPC";
import {GPU, GPUMonitor} from "./Component/GPU";
import {Ram, RamBus} from "./Component/Ram";
import {Main} from "./Component/Main";
import {Chip, ChipSocket} from "./Component/Chip";
import {Adapter} from "./Component/Adapter";

const builder = new BuilderPC();
const gpu = new GPU();
const ram = new Ram();
const main = new Main();
const chip = new Chip();
const adapter = new Adapter();
builder.buildAdapter(adapter.build(50, 'NVIDIA', 10))
builder.buildChip(chip.build('i9', ChipSocket.AMD462, 'NVIDIA', 220))
builder.buildGPU(gpu.build('RTX2080', GPUMonitor._60HZ, 'NVIDIA', 100))
builder.AddRAM(ram.build(128, RamBus._2226, 'NVIDIA', 24)).AddRAM(ram.build(256, RamBus._2400, 'NVIDIA', 35));
builder.buildMain(main.build('b360', [ChipSocket.ALL], [RamBus._2226, RamBus._2400], [GPUMonitor.ALL], 'NVIDIA', 300))
builder.detailPC();
