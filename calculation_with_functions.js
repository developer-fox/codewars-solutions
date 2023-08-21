
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39


function conditionalNumber(number, cb){
  if(cb == undefined){
    return number;
  }
  else if(typeof cb == "object"){
    if(cb.name == "plus"){
      return number + cb.value;
    }
    else if(cb.name == "minus"){
      return number - cb.value;
    }
    else if(cb.name == "times"){
      return number * cb.value;
    }
    else{
      const division =  number / cb.value;
      return Math.floor(division);
    }
  }
  else{
    return cb();
  }  
}

function zero(cb) {
  return conditionalNumber(0, cb);
}
function one(cb) {
  return conditionalNumber(1, cb);
}
function two(cb) {
  return conditionalNumber(2, cb);
}
function three(cb) {
  return conditionalNumber(3, cb);
}
function four(cb) {
  return conditionalNumber(4, cb);
}
function five(cb) {
  return conditionalNumber(5, cb);
}
function six(cb) {
  return conditionalNumber(6, cb);
}
function seven(cb) {
  return conditionalNumber(7, cb);
}
function eight(cb) {
  return conditionalNumber(8, cb);
}
function nine(cb) {
  return conditionalNumber(9, cb);
}

function plus(cb) {
  if(typeof cb == "number"){
    return {name: "plus", value: cb};
  }
  return cb();
}
function minus(cb) {
  if(typeof cb == "number"){
    return {name: "minus", value: cb};
  }

  return cb();
}
function times(cb) {
  if(typeof cb == "number"){
    return {name: "times", value: cb};
  }
  return cb();
}
function dividedBy(cb) {
  if(typeof cb == "number"){
    return {name: "dividedBy", value: cb};
  }
  return cb();
}

console.log(seven(dividedBy(four())));
