// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push (musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts() {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice",
  ];
  var emptyLennonFactsArray = [];
  var i = 0;
  while (i < facts.length) {
    emptyLennonFactsArray.push (facts[i] + "!!!");
    i++;
  }
  return emptyLennonFactsArray;
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  if (num < 10){
    do {emptyArray.push("I Love the Beatles!");
      num++;
    } while (num < 10);
  } else {
    return emptyArray;
  }
  return emptyArray;
}
