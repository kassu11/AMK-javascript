// Write a program that asks for the names of six dogs. 
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

const numbers = [];
while(true) {
  const number = +prompt("Give a number");
  if(number == 0) break;
  numbers.push(number);
}

numbers.sort((v1, v2) => v2 - v1);
console.log(numbers.join("\n"));
document.querySelector("pre").textContent = numbers.join("\n")