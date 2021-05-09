import { Category } from './enums';

interface DamageLogger {
    (p: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customerName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

interface Callback<Error, T> {
    (err: Error, titles: T): void;
}

export { Book, LibMgrCallback, Callback, DamageLogger as Logger, Person, Author, Librarian, Magazine, ShelfItem };
