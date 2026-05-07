// Problem 1 

const filterEvenNumbers = (arr: number[]): number[] => {
    return arr.filter(num => num % 2 === 0)
}

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6])




// Problem 2

const reverseString = (str: string): string => {
    return str.split('').reverse().join('')
}

const result2 = reverseString("typescript")




// Problem 3

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




// Problem 4

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




// Problem 5

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



// Problem 6

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



// Problem 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    return arr1.filter(num => arr2.includes(num))
}

const result7 = getIntersection([1, 2, 3, 4], [3, 4, 5, 6])




