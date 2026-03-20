const add = function() {
	return arguments[0]+arguments[1];
};

const subtract = function() {
	return arguments[0]-arguments[1];	
};

const sum = function() {
	let sum = 0;
  for(let i = 0; i< arguments[0].length; i++){
    sum=add(sum, arguments[0][i]);
  }
  return sum;
};

const multiply = function() {
  let multi = 1;

  for(let i = 0; i< arguments[0].length; i++){
    multi*=arguments[0][i];
  }
  return multi;
};

const power = function() {
	let pow = 1;
  if (arguments[1]>=0){
    for (let i = 0; i<arguments[1]; i++){
      pow*=arguments[0];
    }
  }

  else if (arguments[1]<0){
    for (let i = 0; i>arguments[1]; i--){
      pow/=arguments[0];
    }    
  }

  return pow;
};

const factorial = function() {
	if (arguments[0] == 1 || arguments[0] == 0){
    return 1;
  }
  return arguments[0]*factorial(arguments[0]-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
