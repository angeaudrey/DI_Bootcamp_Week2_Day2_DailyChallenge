
//question 1
let sentence = " the food is not bad for me";

//question 2
let wordNot = sentence.search("not");
console.log(wordNot);

//question 3
let wordBad = sentence.search("bad");
console.log(wordBad);

//question 4
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
	sentence1= sentence.slice(0, wordNot);
	sentence2=sentence.slice(wordBad + 3);
  let newSentence =sentence1 + "good" + sentence2 ;
  console.log(newSentence);
} else {
  console.log(sentence);
}