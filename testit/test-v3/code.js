const taulu = ["a", "b"];

console.log(taulu)

for(let numero of taulu) {
  console.log(numero);
}

taulu.forEach((numero, index) => {
  console.log(numero, index);
});

taulu.sort((arvo1, arvo2) => arvo1 - arvo2);
taulu.sort((arvo1, arvo2) => {
  if(arvo1 < arvo2) return -1
  else if(arvo1 > arvo2) return 1
  return 0
});

taulu.sort(lajittele);

function lajittele(arvo1, arvo2) {
  return arvo1 - arvo2;
}

for(const [arvo, index] of Object.entries(taulu)) {
  console.log(arvo, index)
}

function testi() {
  console.log("testi");
}