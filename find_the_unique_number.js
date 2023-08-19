
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {

  var firstNumber = arr[0];
  var secondNumber = arr[1];
  var thirdNumber = arr[2];

  if(firstNumber == secondNumber && secondNumber == thirdNumber){
    for(var i =3;i< arr.length; i++){
      if(arr[i] != firstNumber) return arr[i];
    }
  }
  else{
    if(firstNumber == secondNumber && secondNumber != thirdNumber){
      return thirdNumber;
    }
    else if(firstNumber == thirdNumber && firstNumber != secondNumber){
      return secondNumber;
    }
    else{
      return firstNumber;
    }
  }


}


console.log(findUniq([1.4,1.4,1.4,1.4,1.4,1.4,1.4, 1.2]));