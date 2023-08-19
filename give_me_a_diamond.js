
// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
  if(n <0 || n % 2 == 0) return null;
  if(n == 1) return "*\n";

  var middleRowIndex = n / 2;

  var rows = [];

  for(var i =0; i< middleRowIndex; ++i){
    var currentRow = "";
    var countOfStars = (i * 2) + 1;
    var countOfSpaces = (n - countOfStars) / 2;
    var leftSpaces = " ".repeat(countOfSpaces);

    currentRow += leftSpaces;
    currentRow += "*".repeat(countOfStars);
    rows.push(currentRow);

    console.log(countOfSpaces);
  }

  var bottomRows = rows.slice(0, rows.length-1).reverse();
  var resultRows = [...rows, ...bottomRows];
  var joinedResult = resultRows.join("\n") + "\n";
  return joinedResult;

}


console.log(diamond(101));