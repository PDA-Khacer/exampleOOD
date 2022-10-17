"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuilderPC_1 = require("./BuilderPC");
const GPU_1 = require("./Component/GPU");
const builder = new BuilderPC_1.BuilderPC();
const gpu = new GPU_1.GPU();
builder.buildGPU(gpu.build('RTX2080', GPU_1.GPUMonitor._60HZ, 'NVIDIA', 100));
builder.detailPC();
//# sourceMappingURL=main.js.map