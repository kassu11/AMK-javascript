// Write a program that prompts the user for the start and end year. 
// The program prints all leap years from the interval given by the user. 
// Printing is done in an unordered list to the HTML document. (3p)

const startYear = +prompt("Anna alkuvuosi")
const endYear = +prompt("Anna loppuvuosi")

for(let year = startYear; year <= endYear; year++) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    const li = document.createElement("li");
    li.textContent = year;
    document.querySelector("ul").append(li);
  }
}