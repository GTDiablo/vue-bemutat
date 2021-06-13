const msg = 'Hello there';

const myAny: any = 1;
const myAny2: any = '1';
const myAny3: any = false;

const myString = 'Hello there';
const myNumber = 111;
const myNumber2 = 111.111;

const age: string | number = '3';
const age2: string | number = 3;

const myList: number[] = [1,2,3];
const myList2: (number|string)[] = [1,2 ,'3'];

enum Gender {
    MALE,
    FEMALE,
}

type ProgramingLanguage = 'python' | 'typescript' | 'kotlin';

type Person = {
    name: string;
    age: number;
    gender?: Gender;
    goodAt?: ProgramingLanguage;
};

const peti: Person = {
    name:  'Peti',
    age: 30,
    gender: Gender.MALE
}

const edit: Person = {
    name: 'Edit',
    age: 24,
    goodAt: 'python'
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype
// Dinamic Object
type MyDict = {
    [key: string] : string,
}
// Összetett
// Részletes Object
type NameType = Pick<Person, 'name'>;

// Functions
const myFunc = (a: number, b: number): number => {
    return a + b
}
// Function types
type CallbackType = () => void;

// HTML Element & Event types

// typeof
const someType = {foo: 'bar'};
const someOtherType: typeof someType = {foo: 'bar2'};

// Generic
// Interface
interface Resource<T> {
    uid: number,
    data: T,
}

// Tuple
const myTuple: [string, number] = ['Zsolt', 20];

export {
    CallbackType,
    myFunc,
    someOtherType,
    myTuple,
    myString,
    myList,
    myNumber,
    myNumber2,
    myAny,
    myAny2,
    myAny3,
    msg,
    Person,
    age,
    age2,
    peti,
    edit,
    myList2,
    Resource
}
