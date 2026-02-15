/**
 * Day 13: The `this` Keyword - Solutions
 */

// ==========================================
// 1. Table of "this" Situations
// ==========================================
/*
| Situation                                     | Value of `this`                                   | Example                                                                 |
|-----------------------------------------------|--------------------------------------------------|-------------------------------------------------------------------------|
| At the Global (Non-strict)                    | Window (Browser) / Global (Node)                  | console.log(this);                                                      |
| At the Global (Strict mode)                   | Window (Browser) / Global (Node)                  | "use strict"; console.log(this);                                        |
| Inside an Object Method                       | The Object itself                                | const obj = { fn() { console.log(this) } };                             |
| Inside Standalone non-Arrow Function          | Global object (Non-strict) / undefined (Strict)  | function fn() { console.log(this) }; fn();                              |
| Inside an Arrow Function (Standalone)         | Lexical `this` (from parent scope)               | const fn = () => console.log(this);                                     |
| Inside an Arrow Function (As Object Method)   | Lexical `this` (from parent, usually Global)     | const obj = { fn: () => console.log(this) };                            |
| Inside Constructor Function (with `new`)       | The newly created object instance                | function P() { this.name = 'at'; } const p = new P();                   |
*/

// ==========================================
// 2. Fix for Arrow Function as Object Method
// ==========================================
/**
 * Problem: Arrow functions do not have their own `this`. 
 * They inherit `this` from the lexical scope where they are defined.
 * In the code below, `this` inside `greet` refers to the global object (window).
 */
const user2 = {
    name: "tapaScript",
    greet: function () { // Fix: Use regular function
        console.log(`Task 2: Hello, ${this.name}!`);
    },
};

user2.greet(); // Logs: Hello, tapaScript!

// ==========================================
// 3. Fix for Lost Binding
// ==========================================
/**
 * Problem: `const greetFn = obj.greet;` loses the context. 
 * When `greetFn()` is called, it's a standalone function call.
 */
const obj3 = {
    name: "Tom",
    greet: function () {
        console.log(`Task 3: Hello, ${this.name}!`);
    },
};

const greetFn = obj3.greet.bind(obj3); // Fix: Use bind() to preserve context
greetFn();

// ==========================================
// 4. Fix for Inner Function `this`
// ==========================================
/**
 * Problem: A regular function `inner` inside a method does NOT inherit `this`.
 * It defaults to Global/Undefined.
 */
const user4 = {
    name: "Alex",
    greet: function () {
        const inner = () => { // Fix: Use arrow function to inherit `this` from greet
            console.log(`Task 4: Hello, ${this.name}!`);
        };
        inner();
    },
};

user4.greet();

// ==========================================
// 5. Sports Constructor Function
// ==========================================
function Sports(name, players) {
    this.name = name;
    this.players = players;
}

const football = new Sports("Football", 11);
const tennis = new Sports("Tennis", 1);

console.log("Task 5:", football);
console.log("Task 5:", tennis);

// ==========================================
// 6. Attach car1's describe to car2
// ==========================================
const car1 = {
    brand: "Audi",
    model: "A8",
    describe: function () {
        console.log(`Task 6: This car is a ${this.brand} ${this.model}.`);
    },
};

const car2 = {
    brand: "BMW",
    model: "X1",
};

// Solution A: call()
car1.describe.call(car2);

// Solution B: apply()
car1.describe.apply(car2);

// Solution C: bind()
const descCar2 = car1.describe.bind(car2);
descCar2();

// ==========================================
// 7. Output of Code
// ==========================================
/*
const person = {
  name: "Charlie",
  sayHello: function() { console.log(this.name); },
  sayHelloArrow: () => { console.log(this.name); },
};
person.sayHello();      // "Charlie" (Implicit binding)
person.sayHelloArrow(); // undefined (or "" in browser if window.name is defined, but usually undefined in Node)
*/
// Correct Answer: B (or C in some environments where window.name exists)
console.log("Task 7: Option B (Charlie and undefined)");
