const palindromes = function (str) {
//    console.log("\nstring is: "+ str);

    let arr = str.split("");
//    console.log("\narr is: "+ arr);


    let int_A = "A".charCodeAt(0);
    let int_Z = "Z".charCodeAt(0);
    let int_a = "a".charCodeAt(0);
    let int_z = "z".charCodeAt(0);

    for (let i=0; i<arr.length; i++){
        let chCode = arr[i].charCodeAt(0);

        if ((chCode < int_A || chCode >int_z) | (chCode < int_a && chCode > int_Z)){
            arr.splice(i, 1);
            i--;
            continue;
        }

    }

//    console.log("\nmod arr is: "+ arr);


    let flag = true;

    for(let i=0; i< arr.length/2; i++){
        
//        console.log("for i = " + i +"   ====COMAPRE====   "+ arr[i] + "   !==     " + arr[arr.length-i-1]);
        
        if(arr[i] !== arr[arr.length-i-1]){
            flag = false;
        }
    }
//    console.log("\nflag is: "+ flag);
    return flag;
};

//palindromes("he.l,leh");

// Do not edit below this line
module.exports = palindromes;
