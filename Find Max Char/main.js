let input;

function maxCharacter(){
    input = document.querySelector("#input").value;
    const charMap = {};
    let maxNum = 0;
    let maxChar = "";

    input.split("", 256).forEach(function(char){
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char] = 1;
        }
    });
    
    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    console.log(maxChar);
    document.querySelector("#output").innerHTML = maxChar +" ("+maxNum+"x)";
    return maxChar;
}


