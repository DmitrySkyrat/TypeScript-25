import { Category } from './enums';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import { ReferenceItem, UniversityLibrarian, RefBook, RefBook as Encyclopedia, Shelf } from './classes';
import { Author, Book, Librarian, Logger, Magazine } from './interfaces';
import {
    bookTitleTransform,
    calcTotalPages,
    createCustomer,
    createCustomerID,
    getAllBooks,
    getBookAuthorByIndex,
    getBookByID,
    getBookTitlesByCategory,
    getProperty,
    getTitles,
    logBookTitles,
    logFirstAvailable,
    printBook,
    сheckOutBooks,
    purge,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import type { Library } from './classes';

// Task 02.01

// logFirstAvailable(getAllBooks());
// const titles = getBookTitlesByCategory(Category.CSS);
// logBookTitles(titles);
// console.log(getBookAuthorByIndex(2));
// console.log(calcTotalPages());

// Task 03.01
// let myID = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (p1: string, p2: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;

// idGenerator = createCustomerID;

// const myID = idGenerator('Boris', 2);
// console.log(myID);

// Task 03.02
// createCustomer('Ann', 30, 'Kyiv');
//logFirstAvailable();
// console.log(getBookByID(1));
// const myBooks = сheckOutBooks('Ann', 1, 2, 4);
// const myBooks = сheckOutBooks('Ann', 3, 6);
// console.log('myBooks', myBooks);

//Task 3.03
// const checkedOutBooks = getTitles(true);

// console.log(checkedOutBooks);

//Task 03.04
// console.log(bookTitleTransform('javascript'));
//console.log(bookTitleTransform(12));

// Task 04.01
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3
    pages: 200,
    // markDamaged(reason) {
    //     console.log(`Damaged ${reason}`);

    // },
    markDamaged: (reason: string) => console.log(`Damaged ${reason}`),
};

// printBook(myBook);

// task 04.02
// let logDamage: Logger;

// logDamage = (reason: string) => console.log(`Damaged ${reason}`);
// logDamage(`missing back cover`);

//task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example',
//     numBooksPublished: 3,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: (custName: string) => console.log(custName),
// };

//task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// task 04.05
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));

//Task 05.01
// const ref: ReferenceItem = new ReferenceItem(100, 'I love Typescript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'ABC Publisher';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 05.03, 06.03
// const refBook = new Encyclopedia(1, 'I love TypeScript', 2021, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

//Task 05.04
// const favoriteLibrarian2: Librarian = new UniversityLibrarian();
// favoriteLibrarian2.name = 'Anna';
// favoriteLibrarian2.assistCustomer('Boris');

// Task 05.05
// const pb: PersonBook = {
//     author: 'Dzmitry',
//     available: false,
//     category: Category.Angular,
//     email: 'blabla',
//     id: 1,
//     name: 'dima',
//     title: 'gears',
//     pages: 1000,
//     markDamaged: null,
// };

// console.log(pb);

//Task 06.05
// const flag = true;
// if (flag) {
//     import('./classes').then(m => {
//         const reader = new m.Reader();
//         reader.name = 'Anna';
//         reader.take(getAllBooks()[2]);
//         console.log(reader);
//     });
// }
// Task 06.06
let libObj: Library;
//let libObj2: Library = new Library();
// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];
// const result = purge(inventory);
// const result2 = purge([1, 2, 3]);
// console.log(result);
// console.log(result2);
// Task 07.02, 07.03
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// bookShelf.add(...inventory);
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook);
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazineShelf.add(...magazines);
// const firstMagazine: Magazine = magazineShelf.getFirst();
// console.log(firstMagazine);
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
//console.log(getProperty(magazines[0], 'titlegg'));
//console.log(getProperty(getAllBooks()[0], 'title'));

//Task 07.04
// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: true,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 1000,
//     title: 'I like programming',
// };

// const updatedBook: UpdatedBook = {
//     id: 2,
//     category: Category.JavaScript,
// };

// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];

// createCustomer(...params);

//Task 08.01, 08.02, 08. 03
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
//console.log(obj);
//obj.a = 'bla';
//const prototype = Object.getPrototypeOf(obj);
//prototype.b = 'hello';
//console.log(obj);
//obj['printLibrarian']();

// obj.assistFaculty = null;
// console.log(obj);
// obj.teachCommunity = null;

//Task 08.04
// const enc = new RefBook(1, 'I love TypeScript', 2021, 2);
// enc.printItem();

//Task 08.05, 08.06
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// obj.assistCustomer('Boris');
// console.log(obj);

//Task 08.07
//const enc = new RefBook(1, 'I love TypeScript', 2021, 2);
//enc.copies = 10;
//console.log(enc);

//Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

//Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(data => {
//         console.log(data);
//         return data.length;
//     })
//     .then(length => console.log(length))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Complete'));

// getBooksByCategoryPromise(Category.Software)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Complete'));
// console.log('End');

//Task 09.03
//console.log('Begin');
//const p = logSearchResults(Category.Software).then(data => console.log(data));
// const p = logSearchResults(Category.Software).catch(err => console.log(err));
// console.log(p);
// console.log('End');

//Task 10.1
// Создайте interface Game, в котором будут обязательные поля:
// title: string, description: string, released: boolean.
// Используя интерфейс Game и Utility Type Pick создайте тип,
// только с 2-мя обязательными параметрами title и released

// interface Game {
//     title: string;
//     description: string;
//     released: boolean;
// }

// type GamePreview = Pick<Game, 'title' | 'released'>;

// const todo: GamePreview = {
//     title: 'Mario',
//     released: true,
// };

//Task 10.2
// Имеется кортеж - const tuple = ['first', 'second', 'third', 'fourth'] as const
// Создайте тип, который будет преобразовывать tuple
//в объект, где ключи и значения будут иметь такие же типы
// Выведите получившейся объект в консоль

// const initialTuple = ['first', 'second', 'third', 'fourth'] as const;

// type MappedObject<T extends readonly any[]> = {
//     [K in T[number]]: K;
// };
// const result: MappedObject<typeof initialTuple> = {
//     first: 'first',
//     second: 'second',
//     third: 'third',
//     fourth: 'fourth',
// };
