
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}

const s = add(2)(3)(4)(6);

console.log(s.valueOf());