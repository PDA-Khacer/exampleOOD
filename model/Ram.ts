import {Component} from "./Component";
import {IRam} from "../interface/IRam";

export class Ram2226 extends Component implements IRam {
    info(): void {
        console.log('Init ram 2226 ..... Done!')
    }
}

