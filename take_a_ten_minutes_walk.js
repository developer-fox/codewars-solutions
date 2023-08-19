
// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {

  if(walk.length != 10) return false;

  var [n, s, e, w] = [0,0,0,0];

  for(const step of walk){
    if(step == "n"){
      if(s > 0){
        s--;
      }
      else{
        n++;
      }
    }
    else if(step == "s"){
      if(n > 0){
        n --;
      }
      else{
        s++;
      }
    }
    else if(step == "w"){
      if(e > 0){
        e --;
      }
      else{
        w++;
      }
    }
    else{
      if(w > 0){
        w --;
      }
      else{
        e++;
      }
    }
  }

  return Object.values([n,s,w,e]).every(e => e == 0);
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));