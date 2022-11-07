// Write a program that asks for the names of six dogs. 
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

const dogs = [];
for(let i = 0; i < 6; i++) {
  const dogName = prompt("Give a dog name");
  dogs.push(dogName);
}

dogs.sort((v1, v2) => {
  if(v1 < v2) return 1;
  else if(v1 > v2) return -1;
  else return 0;
});

dogs.forEach(dog => {
  const li = document.createElement("li")
  li.textContent = dog;
  document.querySelector("ul").append(li);
});