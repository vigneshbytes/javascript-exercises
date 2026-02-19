const repeatString = function(string, repetition) {
    
    let str = '';

    if (repetition < 0){
        return "ERROR";
    }

    for (let i = 0; i<repetition; i++){
        str = str + string;
    }
   
    return str;
};

// Do not edit below this line
module.exports = repeatString;
