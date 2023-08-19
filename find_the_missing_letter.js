
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2


const alphabet =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function findMissingLetter(array){
  const isArrayLowercase = array[0] == array[0].toLowerCase();

  if(!isArrayLowercase) array = array.map(e=> e.toLowerCase());

  const firsLetter = array[0];
  const indexOfFirstLetterInAlphabet = alphabet.indexOf(firsLetter);
  const subAlphabetArray = alphabet.slice(indexOfFirstLetterInAlphabet, indexOfFirstLetterInAlphabet + array.length + 1);

  for(var i=0; i< subAlphabetArray.length; i++){
    const subArrayItem = subAlphabetArray[i];
    const arrayItem = array[i];

    if(arrayItem != subArrayItem){
      return isArrayLowercase ? subArrayItem : subArrayItem.toUpperCase();
    }
  }
}


console.log(findMissingLetter(['O','Q','R','S']));
