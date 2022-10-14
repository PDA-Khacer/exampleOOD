import {Component} from "./Component";

export class Adapter extends Component {
    private _output: number // w


    get output(): number {
        return this._output;
    }

    set output(value: number) {
        this._output = value;
    }


    constructor(output: number) {
        super();
        this._output = output;
    }
}
