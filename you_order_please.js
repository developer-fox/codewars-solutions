
function youOrderPlease(words){
  if(words == "") return words;

  const splitted_words = words.split(" ");

  const sorted_words_array = [];

  const digits = [1,2,3,4,5,6,7,8,9];

  for(var i = 0; i < digits.length; i++){
    if(i+1 == sorted_words_array.length) break;
    const filtered_word = splitted_words.find((value)=> value.includes(digits[i].toString()));
    if(filtered_word != undefined) sorted_words_array.push(filtered_word); 
  }

  const result = sorted_words_array.join(" ");
  return result;

}

console.log(youOrderPlease("is2 Thi1s T4est 3a"));
