// Tehtävän anto readme tiedostossa

const numberOfCandidates = +prompt("Give number of candidates");
const candidates = [];

for(let i = 0; i < numberOfCandidates; i++) {
  const name = prompt(`Name for candidate ${i + 1}`);
  if(candidates.some(candidate => candidate.name == name)) {
    alert("Name already given");
    i--;
    continue;
  }
  candidates.push({name: name, votes: 0});
}

const numberOfVotes = +prompt("Give number of votes");

for(let i = 0; i < numberOfVotes; i++) {
  const voteName = prompt(`Vote nro. ${i + 1}: Give name of candidate`);
  const vote = candidates.find(candidate => candidate.name == voteName);
  if(vote) vote.votes++;
}

candidates.sort((c1, c2) => c2.votes - c1.votes);
document.querySelector("pre").textContent += `The winner is ${candidates[0].name} by ${numberOfVotes} votes. \nresults:`
for(const condidate of candidates) {
  document.querySelector("pre").textContent += `\n${condidate.name}: ${condidate.votes} votes`;
}