
// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

function primeFactors(n){

  var factors = {};

  var i = 2;
  while (n != 1) {
    var counts = 0;

    while(n % i == 0){
      n /= i;
      counts++;
    }
    if(counts != 0) factors[i.toString()] = counts;
    i++;
  }

  return stringfy(factors);

}

function stringfy(factors){
  var result = "";

  for(const pair of Object.entries(factors)){
    if(pair[1] == 1){
      result += `(${pair[0]})`;
    }
    else{
      result += `(${pair[0]}**${pair[1]})`;
    }
  }
  return result;
}


console.log(primeFactors(140));


