const reverseString = function(string) {
    if (string.length <= 0){
        return "";
    }

    let arr = new Array(string.length);
    for (let i=0; i<string.length; i++){
        arr[i] = string.charAt((string.length) - (i+1));
    }

    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
