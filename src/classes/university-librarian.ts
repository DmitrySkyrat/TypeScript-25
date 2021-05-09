import { format, Logger, logMethod, logParameter, sealed, writable } from '../decorators';
import { Librarian } from '../interfaces';

//@sealed('UniversityLibrarian')
//@Logger
export class UniversityLibrarian implements Librarian {
    @format() name: string;
    email: string;
    department: string;
    f: number = 100;

    //@logMethod
    assistCustomer(/* @logParameter*/ customerName: string): void {
        console.log(`${name} is assisting ${customerName}`);
    }

    //@writable(true)
    assistFaculty(): void {
        console.log(`Assisting faculty`);
    }

    //@writable(false)
    teachCommunity() {
        console.log(`Teaching community`);
    }
}
