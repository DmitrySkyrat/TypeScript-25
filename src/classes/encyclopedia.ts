import { positiveInteger } from '../decorators';
import { ReferenceItem, ReferenceItem1 } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    constructor(id: number, title: string, newYear: number, public edition: number) {
        super(id, title, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.newYear}`);
    }
    printCitation(): void {
        console.log(`${this.title} - ${this.newYear}`);
    }
}

class Encyclopedia1 extends ReferenceItem1 {
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
