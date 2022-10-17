import {Provider} from "../Provider";

export class Component{
    private _provider: Provider;
    private _price: number;


    get provider(): Provider {
        return this._provider;
    }

    set provider(value: Provider) {
        this._provider = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    constructor(provider?: Provider, price?: number) {
        this._provider = provider || new Provider();
        this._price = price || 0;
    }
}
