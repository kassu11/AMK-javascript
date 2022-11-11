// Write a program that asks the user for the number of participants. 
// After this, the program asks for the names of all participants. 
// Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in the same order as they were entered. (2p)

const numberOfNames = +prompt("How many participants do you want?");

for(let i = 0; i < numberOfNames; i++) {
  const participantsName = prompt("Give a name");
  const li = document.createElement("li")
  li.textContent = participantsName;
  document.querySelector("ol").append(li);
}