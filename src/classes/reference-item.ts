import { timeout } from '../decorators';

export class ReferenceItem {
    private _publisher: string;
    #id: number;
    static department: string = 'Classical Literature';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected newYear: number) {
        console.log('Creating a new referenceItem');
        this.#id = id;
    }
    //@timeout(1000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.newYear}`);
        console.log(ReferenceItem.department);
    }

    getID(): number {
        return this.#id;
    }
}

//Abstract classes
export abstract class ReferenceItem1 {
    private _publisher: string;
    #id: number;

    static department: string = 'Classical Literature';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}
