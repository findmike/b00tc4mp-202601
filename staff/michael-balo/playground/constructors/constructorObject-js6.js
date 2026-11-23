class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}

const person1 = new Person("Mike", 31);
const person2 = new Person("Alvaro", 28);
const person3 = new Person("Iu", 28);
