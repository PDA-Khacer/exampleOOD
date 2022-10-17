import {Component} from "./Component";
import {Provider} from "../Provider";
import {IComponent} from "../Interface/IComponent";

export class Adapter extends Component implements IComponent<Adapter>{
    private _output: number // w


    get output(): number {
        return this._output;
    }

    set output(value: number) {
        this._output = value;
    }

    constructor(provider?: Provider, price?: number, output?: number) {
        super(provider, price);
        this._output = output || 0;
    }

    build(output: number, nameProvider: string, price: number): Adapter {
        return new Adapter(new Provider(nameProvider),price, output)
    }

    detail(): void {
        console.log("===== Adapter detail ====")
        console.log("Provider: ", this.provider.name)
        console.log("Price: ", this.price)
        console.log("Output: ", this.output)
    }
}
