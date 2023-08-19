
// https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil){

  good = good.split(" ").map(e=> parseInt(e));
  evil = evil.split(" ").map(e=> parseInt(e));

  const goodPowerValues = [1,2,3,3,4,10];
  const evilPowerValues = [1,2,2,2,3,5,10];

  var totalGoodForces = 0;
  var totalEvilForces = 0;

  for(var i =0; i< good.length; i++){
    totalGoodForces += goodPowerValues[i] * good[i];
  }

  for(var i =0; i< evil.length; i++){
    totalEvilForces += evilPowerValues[i] * evil[i];
  }

  if(totalEvilForces > totalGoodForces){
    return "Battle Result: Evil eradicates all trace of Good";
  }
  else if(totalEvilForces < totalGoodForces){
    return "Battle Result: Good triumphs over Evil";
  }
  else{
    return "Battle Result: No victor on this battle field";
  }
}

console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
