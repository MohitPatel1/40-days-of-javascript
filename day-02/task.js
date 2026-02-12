//  a person’s name, age, isStudent status, and favorite programming language.

let personName = "John Doe";
let personAge = 25;
let isStudent = true;
let favoriteLanguage = "JavaScript";

console.log(personName, personAge, isStudent, favoriteLanguage);

personName = "Mohit Patel";
personAge = 30;
isStudent = false;
favoriteLanguage = "Python";

const a = {
    food: "Pizza",
    color: "Red",
}

const b = a;
b.food = "Burger";
b.color = "Blue";

console.log(a.food, a.color);
console.log(b.food, b.color);

const c = [1, 2, 3];
const d = c;
d[0] = 100;
console.log(c[0], d[0]);

