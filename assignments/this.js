/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: "this" will refer to the whole window because it is in global scope
* 2. Implicit Binding: "this" will be the object before the dot preceeding a function
* 3. New Binding: "this" is the keyword that instantiates the constructor function
* and returns the object that the constuctor function creates
* 4. Explicit Binding: you can extend, modify, and override an object's properties
* using .call, .apply, or .bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting}, my name is ${name}`);
    console.log(this);
  }
};

myObj.sayHello('Emily');

// Principle 3

// code example for New Binding

function Greeter(salutation, title) {
  this.greeting = salutation;
  this.title = title;
  this.speak = function() {
    console.log(`${this.greeting + ', ' + this.title}`);
    console.log(this);
  };
}

const spanish = new Greeter('Buenos días', 'Señor');
const german = new Greeter('Guten Tag', 'Fraulein');

spanish.speak();
german.speak();

// Principle 4

// code example for Explicit Binding

const yourObject = {
  name: 'Emily Lagattolla',
  city: 'Chicago',
  favoriteFood: 'tacos'
}

const thingsYouEnjoy = ['reading', 'coding', 'jogging']

function tellUsAboutYourself(thing1, thing2, thing3){
  console.log(this);
  return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
}

console.log(tellUsAboutYourself.apply(yourObject, thingsYouEnjoy));
