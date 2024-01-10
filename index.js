function Student(firstname, lastname, age, grade) {
  this.fname = firstname,
  this.lname = lastname,
  this.age = age,
  this.grade = grade,

  this.greeting = function() {
    return `Hello! My name is ${this.fname} ${this.lname}. I am ${this.age} years old. My grade is ${this.grade}`
  }
}

// First student instance
const student1 = new Student('John', 'Smith', 40, 85)
console.log(student1.greeting())

// Second student instance
const student2 = new Student('Jane', 'Doe', 30, 91)
console.log(student2.greeting())

// Third student instance
const student3 = new Student('Billy', 'Williams', 24, 82)
console.log(student3.greeting())


//////


class Employee {
  static country = 'Canada'
  // Captures the arguments passed
  // Set the default variables for the class
  constructor(firstname, lastname, age, position) {
    this.fname = firstname
    this.lname = lastname
    this.age = age
    this.position = position
    // private variable cannot be access outside of constructor
    const companyName = `ABC Company`
    this.fullTitle = `${this.position} of ${companyName}`
  }

  greeting() {
    return `Hi! My name is ${this.fname} ${this.lname}. I am ${this.age} years old. I work as a ${this.fullTitle}.`
  }
}

// Employee 1 instance
const employee1 = new Employee('John', 'Smith', 35, 'Carpenter')
console.log(employee1.greeting())

// Employee 2 instance
const employee2 = new Employee('Jane', 'Doe', 40, 'Admin assistant')
console.log(employee2.greeting())

// Employee 3 instance
const employee3 = new Employee('Joe', 'Moe', 36, 'CEO')
console.log(employee3.greeting())

// Calculator class
class Calculator {
  static PI = '3.14'

  static add(a, b) {
    return a + b
  }

  static subtract(a, b) {
    return a - b
  }
}

let result = Calculator.subtract(5, 1)
console.log(result)
console.log(Calculator.PI)


// Person class
class Person {
  constructor(firstname, lastname, age, address) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.address = address
  }

  ageInNYears(years) {
    return `Age is ${this.age + years} years old.`
  }

  greeting(message){
    return `Hello, my name is ${this.firstname} ${this.lastname}. I live in ${this.address}. ${message}.`
  }
}

// Initialize person class
const person1 = new Person('John', 'Smith', 40, 'Vancouver')
console.log(person1.greeting('I like to play basketball'))
console.log(person1.ageInNYears(10))

// Initialize person 2 class
const person2 = new Person('Jane', 'Doe', 30, 'Burnaby')
console.log(person2.greeting('I like to study'))
console.log(person2.ageInNYears(5))



// ASYNC method inside of class
class Pet {
  static carnivores = true

  constructor(name, type, age, country) {
    this.petName = name
    this.petType = type
    this.petAge = age
    this.petCountry = country
  }

  introduction() {
    return `My pet name is ${this.petName} and I am a ${this.petType}. I am ${this.petAge} years old. I was raised in ${this.petCountry}.`
  }

  async getPetCountry() {
    const res = await fetch(`https://restcountries.com/v3.1/name/${this.petCountry}`)
    const data = await res.json()
    return data
  }
}

//Create instance
const pet1 = new Pet('Jimmy', 'Parrot', 2, 'Brazil')
console.log(pet1.introduction())
pet1.getPetCountry().then((res) => {
  console.log(res[0].subregion)
})

// Pet 2 instance
const pet2 = new Pet('Jolly', 'Dog', 3, 'Peru')
console.log(pet2.introduction())
pet2.getPetCountry().then((res) => {
  console.log(res[0].subregion)
})

console.log(Pet.carnivores)