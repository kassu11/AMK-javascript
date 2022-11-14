const list = [
  "First item",
  "Second item",
  "Third item"
];

list.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("my-item");
  document.querySelector("#target").appendChild(li);
});