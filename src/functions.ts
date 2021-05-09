import { Category } from './enums';
import { Author, Book, Callback, LibMgrCallback, Librarian, Logger } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks() {
    //const books: Array<Book> = [
    const books = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.Angular,
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.HTML,
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.TypeScript,
        },
    ];

    return books;
}

export function logFirstAvailable(books?: ReadonlyArray<Book>): void {
    console.log('amount of books', books.length);
    console.log('First book -', books[0].title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(book => book.title);
}

//console.log('getBookTitlesByCategory', getBookTitlesByCategory(Category.Angular));

export function logBookTitles(rows: string[]): void {
    console.log('logBookTitles', rows);
}

//logBookTitles(getBookTitlesByCategory(Category.HTML));

export function getBookAuthorByIndex(index: number): [string, string] {
    const searchedBook: Array<Book> = getAllBooks().filter(book => book.id === index);
    const { title, author } = searchedBook[0];
    return [title, author];
}

//console.log('getBookAuthorByIndex', getBookAuthorByIndex(1));

export function calcTotalPages(): bigint {
    const initialData = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    return initialData.reduce((acc: bigint, item) => {
        return acc + BigInt(item.books) * BigInt(item.avgPagesPerBook);
    }, 0n);
}

//console.log('calcTotalPages', calcTotalPages());

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log('Customer name', name);
    if (age) {
        console.log('Customer age', age);
    }
    if (age) {
        console.log('Customer city', city);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function сheckOutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`Customer name ${customer}`);

    return bookIds
        .map((id: number): Book => getBookByID(id))
        .filter(book => book && book.available) //book?available
        .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: (string | boolean | number)[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

function a(condition: any): asserts condition {
    if (!condition) {
        throw new Error('value should have been a string');
    }
}

function b(title: any): string {
    a(typeof title === 'string');
    return [...title].reverse().join('');
}
//console.log(b('nnnnmmmm'));

export function printBook(book: Book): void {
    console.log(`${book.id} ${book.author}`);
}

// export function getProperty(book: Book, prop: BookProperties): any {
//     if (typeof book[prop] === 'function') {
//         const f = book[prop] as Function;
//         return f['name'];
//     }

//     return book[prop];
// }

export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        const f = obj[prop];
        return f['name'];
    }

    return obj[prop];
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length) {
                callback(null, titles);
            } else {
                throw new Error('No Books Found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log('Error Message', err.message);
    } else {
        console.log(`Titles ${titles}`);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No Books Found');
            }
        }, 2000);
    });

    return p;
}

export async function logSearchResults(category: Category) {
    const titles: string[] = await getBooksByCategoryPromise(category);
    console.log(titles);
    return titles;
}
