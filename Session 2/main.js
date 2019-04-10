// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  let result = [];
  let str = sen.replace(',', '').replace('.', '').replace(':', '').replace(';', '');
  let arr = str.split(' ');
  
  arr.sort((a,b) => b.length - a.length);

  for(let i = 0; i < arr.length; i++){
    if(arr[i].length == arr[0].length){
      result.push(arr[i]);
    };
  };
  if(result.length == 1){
    result = arr[0];
  };
  return result;
};

console.log(longestWord('Hello there, my name is Brad'));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  let result = [];
  // const count = Math.ceil(arr.length / len);
  for(let i = 0; i < len; i++){
    result.push(arr.splice(i, len));
  };
  return result;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  let result = [];
  for(let i = 0; i < arrays.length; i++){
    for(let j = 0; j < arrays[i].length; j++){
      result.push(arrays[i][j]);
    };
  };
  return result;
};
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  let result = true;
  const arr1 = [...str1].sort();
  const arr2 = [...str2].sort();

  if(JSON.stringify(arr1) === JSON.stringify(arr2)){
    result = true;
  }
  else{
    result = false;
  };
  return result;
};

// isAnagram('Dormitory', 'dirty room###');
console.log(isAnagram('elbow', 'below'));

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  const arr1 = [...str];
  let arr2 = [];
  let arr3 = [];
  let result = '';
  for(let char of arr1){
    arr2.push(char.charCodeAt(char));
  };

  for(let code of arr2){
    if(code == 122){
      arr3.push(97);
    }
    else if(code == 32){
      arr3.push(32);
    }
    else{
      arr3.push(code+1);
    };
  };

  for(let code of arr3){
    result += String.fromCharCode(code)
  };
  return result;
};

console.log(letterChanges('hello there'));
