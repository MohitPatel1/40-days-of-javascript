const prompt = require("prompt-sync")();

// 1
// it's a normal day (case sensitive )

const a = parseInt(prompt("How much money do you want to withdraw? Give input in the multiple of 100"));

if (a % 100 === 0) {
    console.log("Withdrawal successful")
} else {
    console.log("Withdrawal failed")
}