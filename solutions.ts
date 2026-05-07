// Problem 1 : Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const filterEvenNumbers = (arr: number[]): number[] => {
    return arr.filter(num => num % 2 === 0)
}

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6])
// console.log(result1) 




// Problem 2: Write a function reverseString that takes a string as input and returns the reversed version of that string.

const reverseString = (str: string): string => {
    return str.split('').reverse().join('')
}

const result2 = reverseString("typescript")
// console.log(result2)




// Problem 3: Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number

const checkType = (input: StringOrNumber): string => {

    let result: string = ""
    if (typeof input === 'string') {
        return result = "String"
    }
    
    if (typeof input === 'number') {
        return result = "Number"
    }
    return result
}

const result3a = checkType("Hello")
const result3b = checkType(42)

// console.log(result3a) 
// console.log(result3b) 




// Problem 4:

type User = {
    id: number,
    name: string,
    age: number
}

const getProperty = (obj: User, key: keyof User): string | number => {
    return obj[key]
}

const user: User = { id: 1, name: "John Doe", age: 21 }
const result4a = getProperty(user, "name")

// console.log(result4a) 



// Problem 5: Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.
 
interface myBook {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: myBook): myBook & { isRead: boolean } => {
    return { ...book, isRead: true }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

const result5 = toggleReadStatus(myBook)

// console.log(result5)



// Problem 6:

class Person {
    name : string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


class Student extends Person {
    grade: string;

    constructor (name: string, age: number, grade: string) {
        super (name, age);
        this.grade = grade;
    }

    getDetails (){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student1 = new Student("Alice", 20, "A")
// console.log(student1.getDetails())



// Problem 7:

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter(num => arr2.includes(num))
}

const result7 = getIntersection([1, 2, 3, 4], [3, 4, 5, 6])
console.log(result7)