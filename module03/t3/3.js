"use strict";
const names = ["John", "Paul", "Jones"];

const target = document.querySelector("#target");
names.forEach(name => {
  target.innerHTML += `<li>${name}</li>`;
});