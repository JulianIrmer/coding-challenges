// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  let result = [];
  str = [...str];

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString('hello'));



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let str2 = '';

  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }

  if (str != str2) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

console.log(isPalindrome('lagerregal'));



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let int1 = int.toString();
  let result = [];

  for (let i = int1.length - 1; i >= 0; i--) {
    result += int1[i];
  };
  return result;
};

console.log(reverseInt(123));



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let result = [];
  let arr = [...str];
  result[0] = arr[0].toUpperCase();

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === ' ') {
      result.push(arr[i].toUpperCase());
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(capitalizeLetters('i love javascript'));



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let result = '';
  let arr = [...str];

  console.log(result);
  return result;
}

console.log(maxCharacter('javascript'));



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//  For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let result = '';

  for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) {
      result += 'FizzBuzz';
    }
    else if (i % 5 == 0) {
      result += 'Buzz';
    }
    else if (i % 3 == 0) {
      result += 'Fizz';
    } 
    else {
      result += i;
    };
    console.log(result);
  };
  return result;
};

console.log(fizzBuzz());



// CHALLENGE 7: Alphabet Soup
// Return characters in alphabetical order.
function alphabetSoup(str) {
  str = Array.from(str).sort();
  console.log(str);

  let result = str;
  result = [...result].sort();
  return result;
}
console.log(alphabetSoup('yazb'));


// CHALLENGE 8: 
// Given an array[] of integers , Find the product of the k maximal numbers.
// Example:
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Multiply the two highest numbers with each other.

// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4) 
// (-4 * -1 = 4)

// maxProduct ({10, 3, -1, -27} , 3)  return (-30)
// 10 * 3 * -1 = -30

function maxSum(arr) {
  let result = 1;
  arr[0].sort((a,b) => b-a);

  for(let i = 0; i < arr[1]; i++){
    result *= arr[0][i];
  }
  return result;
}

console.log(maxSum([[10, 3, -1, -27], 3]));