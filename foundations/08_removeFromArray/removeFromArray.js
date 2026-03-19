const removeFromArray = function() {

    if (arguments.length <2) {
        return null;
    }

    let argLen = arguments.length;
    let arr = arguments[0].slice(); //imp to clone, or else accessed by reference? which may modify the input arg?

    for (let i = 1; i< argLen; i++){
        targetVal = arguments[i];
        
        let tgtIndex = arr.indexOf(targetVal);

        while (tgtIndex != -1) {        
            
            arr.splice(tgtIndex, 1);

            // tries to search again, for multiple instances of tgt value            
            tgtIndex = arr.indexOf(targetVal); 
        }
    }


    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
