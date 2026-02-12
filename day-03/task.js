const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number: "))
if (num % 2 === 0) {
    console.log(num + " is Even")
} else {
    console.log(num + " is Odd")
}

let age = parseInt(prompt("Enter your age: "))
if (age >= 18) {
    console.log("You are eligible for driving license")
} else {
    console.log("You are not eligible for driving license")
}

const salary = 12300;
const bonus = salary * 0.2;
const ctc = salary + bonus;
console.log("CTC: " + ctc);

const color = prompt("Enter a color: ");
if (color === "red") {
    console.log("STOP")
} else if (color === "green") {
    console.log("GO")
} else {
    console.log("Invalid color")
}

const units = parseInt(prompt("Enter the number of units you consume everyday: "));
const monthlyElectricityBill = units * 150 * 30;
console.log("Monthly Electricity Bill: " + monthlyElectricityBill);
const annualElectricityBill = monthlyElectricityBill * 12;
console.log("Annual Electricity Bill: " + annualElectricityBill);
const discount = annualElectricityBill * 0.2;
console.log("Discount: " + discount);
console.log("Annual Electricity Bill after discount: " + (annualElectricityBill - discount));

const year = parseInt(prompt("Enter a year: "));
(year % 4 === 0) ? console.log(year + " is a leap year") : console.log(year + " is not a leap year")

const p = parseInt(prompt("Enter p: "));
const q = parseInt(prompt("Enter q: "));
const r = parseInt(prompt("Enter r: "));

console.log("Max: " + Math.max(p, q, r));

const count = parseInt(prompt("Enter count: "));
console.log(count << 1);
