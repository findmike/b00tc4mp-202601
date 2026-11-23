function Person(name, age) {
    this.name = name;
    this.age = age;

    // this.sayHello = function () {
    //     console.log("Hello, my name is " + this.name)
    // };
}

Person.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

const person1 = new Person("Mike", 31);          // person1.sayHello(); = "Hello, my name is Mike"
const person2 = new Person("Alvaro", 28);
const person3 = new Person("Iu", 28);