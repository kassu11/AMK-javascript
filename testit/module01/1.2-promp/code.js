// Write a program that prompts for user's name and then greets the user. Print the result to the HTML document: Hello, Name! (2p)

const userName = prompt("Kirjoita nimesi")
document.body.textContent = `Hello, ${userName}!`