function count(){
let i = 1;
    for(let j = 0; j < 100; j++){

        if(i % 3 == 0 && i % 15 !== 0){
            let newH2 = document.createElement("h3"); 
            let newContent = document.createTextNode("FIZZ"); 
            newH2.appendChild(newContent);  
            let currentDiv = document.querySelector("#wrapper"); 
            document.body.insertBefore(newH2, currentDiv.nextSibling);
            console.log("FIZZ");
            if(i < 100){
                i++;
            }
        }
        else if(i % 5 == 0 && i % 15 !== 0){
            let newH2 = document.createElement("h3"); 
            let newContent = document.createTextNode("BUZZ"); 
            newH2.appendChild(newContent);  
            let currentDiv = document.querySelector("#wrapper"); 
            document.body.insertBefore(newH2, currentDiv.nextSibling);
            console.log("BUZZ");
            if(i < 100){
                i++;
            }
        }
        else if(i % 15 == 0){
            let newH2 = document.createElement("h3"); 
            let newContent = document.createTextNode("FIZZBUZZ"); 
            newH2.appendChild(newContent);  
            let currentDiv = document.querySelector("#wrapper"); 
            document.body.insertBefore(newH2, currentDiv.nextSibling);
            console.log("FIZZBUZZ");
            if(i < 100){
                i++;
            }
        }
        else{
            let newH2 = document.createElement("h3"); 
            let newContent = document.createTextNode(i); 
            newH2.appendChild(newContent);  
            let currentDiv = document.querySelector("#wrapper"); 
            document.body.insertBefore(newH2, currentDiv.nextSibling);
            console.log(i);
            if(i < 100){
                i++;
            }
        }
    }
}



