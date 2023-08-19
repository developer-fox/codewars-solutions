
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc


function findOutliers(integers){

  var isEvenArray = [];

  var evensCount = 0;
  var oddsCount = 0;

  for(const num of integers){
    isEvenArray.push(num % 2 == 0);
    if(num % 2 == 0){
      evensCount++;
    }
    else{
      oddsCount++;
    }
  }

  if(evensCount> oddsCount) return integers[isEvenArray.indexOf(false)];
  return integers[isEvenArray.indexOf(true)];
}
