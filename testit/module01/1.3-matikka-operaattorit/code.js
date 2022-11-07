// Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document. (3p)
  // remember to convert strings to numbers when adding

const num1 = +prompt("Kirjoita eka numero")
const num2 = +prompt("Kirjoita toka numero")
const num3 = +prompt("Kirjoita kolmas numero")

const summa = num1 + num2 + num3

document.querySelector("pre").textContent += `Lukujen summat on: ${summa}\n`
document.querySelector("pre").textContent += `Lukujen tulo on: ${num1 * num2 * num3}\n`
document.querySelector("pre").textContent += `Lukujen keskiarvo on: ${(summa / 3).toFixed(2)}\n`