export class Component {
    private _price: number;
    private _provider: string;


    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get provider(): string {
        return this._provider;
    }

    set provider(value: string) {
        this._provider = value;
    }

    constructor() {
        this._price = 0;
        this._provider = 'none';
    }
}
