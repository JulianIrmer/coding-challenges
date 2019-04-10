// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
  let sum = 0;
  for (let el of arguments) {
    sum += el;
  }
  return sum;
}
console.log(addAll(1, 2, 3, 10, 4, 10, 40, 5, 5, 5, 5, 9));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(input){
  let sum = 0;

  function isPrime(i){
    for(let j = 2; j < i; j++){
      if(i % j === 0){
        return false;
      };
    };
    return true;
  };

  for(let i = 2; i <= input; i++){
    if(isPrime(i)){
      sum += i;
    };
  };
  return sum;
};


console.log(sumAllPrimes(17));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {
  let deleteArgs = [];
  let input = [];

  for (let i = 1; i < arguments.length; i++) {
    deleteArgs.push(arguments[i]);
  };
  for (let i = 0; i < arguments[0].length; i++) {
    input.push(arguments[0][i]);
  };

  for (let i = 0; i < deleteArgs.length; i++) {
    for (let j = input.length; j >= 0; j--) {
      if (deleteArgs[i] == input[j]) {
        input.splice(j, 1);
      };
    };
  };
  return input;
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(input) {
  let trees = [];
  let result = [];

  for(let i = 0; i < input.length; i++){
    if(input[i] === -1){
      trees.push(i);
    }
    else{
      result.push(input[i]);
    };
  };
  result.sort();

  for(let i = 0; i < trees.length; i++){
    result.splice(trees[i], 0, -1);
  };
  return result;
};
const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));


// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it.
// If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let result;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let input = [...str];
  alphabet = [...alphabet];
  let missing = 0;

  for(let i = 0; i < input.length; i++){
    if(input[i] !== alphabet[i]){
      missing = i;
    }
    else{
      result = undefined;
    };
  };

  if(missing !== 0){
    result = alphabet[missing];
  };
  return result;
};

// const input = 'abce';
console.log(missingLetters('abcdeg'));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  odd = [];
  even = [];
  result = [];
  let sum1 = 0;
  let sum2 = 0;

  for(let num of arr){
    if(num % 2 == 0){
      even.push(num);
    }
    else{
      odd.push(num);
    };
  };
  for(let num of even){
    sum1 += num;
  };
  for(let num of odd){
    sum2 += num;
  };
  result.push(sum1, sum2);
  
  return result;
};

console.log(evenOddSums([50, 60, 60, 45, 71]));