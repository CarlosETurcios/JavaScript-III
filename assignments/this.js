/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. when in global binding  "this" will be the wondow/console Object;
 * 2. Implicit bindinng when you put a dot the left fo the object the dot gets "this"
 * 3. new binding is used with a constructor function , "this" this refers to the instance of the object that is created and returned
 * 4. Explicit Binding whenever you use the call or apply methods . this is explicitly defined
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this);
  return name;
}
sayName('Carlos');
// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Carlos');
// Principle 3

// code example for New Binding

function superHero(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const batman = new superHero('superman');
const superman = new superHero('batman');

batman.speak();
superman.speak();
// Principle 4

// code example for Explicit Binding
// function villian(steal) {
//     this.greeting = 'Hello ' ;
//     this.steal = steal;
//     this.speak = function() {
//         console.log(this.greeting + this.steal)
//         console.log(this);
//     }

// }

// const joker

batman.speak.call(superman);
superman.speak.apply(batman);
