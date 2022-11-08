// Write a program that prompts the user for numbers. 
// When the user enters one of the numbers he previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (2p)

const listOfNumbers = [];

while(true) {
  const number = +prompt("Give a number");
  if(listOfNumbers.includes(number)) {
    alert("Number already given");
    break;
  } else listOfNumbers.push(number);
}

listOfNumbers.sort((v1, v2) => v1 - v2);
listOfNumbers.forEach(number => {
  const li = document.createElement("li");
  li.textContent = number;
  document.querySelector("ul").appendChild(li);
});