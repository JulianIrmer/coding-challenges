let input;
let output; 
let arr1;
let arr2 = [];
let length;


function stringReversal(){
    input = document.querySelector("#input").value;
    arr1 = input.split("");
    length = arr1.length-1;
    
    for(let i = 0; i < arr1.length; i++){
        arr2[length] = arr1[i];
        length--;
    }
    output = arr2.join("");
    document.querySelector("#output").innerHTML = output;
    arr1.splice("");
    arr2.splice("");
    return output;
}

// function stringToArray(input){
//     arr1 = input.split("");
//     length = arr1.length-1;
//     return arr1;
// }

// function reverseString(arr1){
//     for(let i = 0; i < arr1.length; i++){
//         arr2[length] = arr1[i];
//         length--;
//     }
//     return arr2;
// }

// function arrayToString(arr2){
//     output = arr2.join("");
//     return output;
// }