const sumAll = function() {

    if (arguments.length != 2){
        return 'ERROR';
    }

    if (arguments[0] == arguments[1]){
        return arguments[0];
    }

    if (arguments[0] < 0 || arguments[1] < 0){
        return 'ERROR';
    }

    if (typeof(arguments[0]) != typeof(1) || typeof(arguments[1]) != typeof(1))
    {
        return 'ERROR';    
    }

    if ((arguments[0] * 10)%10 != 0 || (arguments[1] * 10)%10 != 0){
        return 'ERROR';
    }

    let start = (arguments[0] < arguments[1])? arguments[0] : arguments[1];
    let end = (arguments[0] > arguments[1])? arguments[0] : arguments[1];
    let sum = start+end;

    while (++start < end){
        sum+=start;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
