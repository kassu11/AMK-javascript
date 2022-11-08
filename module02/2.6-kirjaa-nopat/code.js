// Write a function that returns a random dice roll between 1 and 6. 
// The function should not have any parameters. 
// Write a main program that rolls the dice until the result is 6. 
// The main program should print out the result of each roll in an unordered list (<ul>). (2p)

function rollDice() {
  return Math.ceil(Math.random() * 6);
}

while(true) {
  const roll = rollDice();
  const li = document.createElement("li");
  li.textContent = roll;
  document.querySelector("ul").appendChild(li);
  if(roll == 6) break;
}