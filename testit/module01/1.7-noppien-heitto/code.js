// Write a program that asks the user for the number of dice.
// The program throws all the dice once and prints the sum of the numbers. (2p)

const dice = +prompt("How many dice do you want to throw?")
let sum = 0

for (let i = 0; i < dice; i++) {
  sum += Math.ceil(Math.random() * 6)
}

document.querySelector("h1").textContent += `The sum of the dice is ${sum}`