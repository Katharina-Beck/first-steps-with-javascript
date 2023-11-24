// Implement a oddNumbers function.

//  The function has two parameters, both are numbers.

function oddNumbers(number1, number2) {
  let count = number1;
  let value = "";
  do {
    if (count % 2 !== 0) {
      value += count;
      if (count != number2 && count != number2 - 1) value += ",";
    }
    count++;
  } while (count <= number2);
  return value;
}

// function oddNumbers(number1, number2) {
//   let count = number1;
//   let value = "";
//   while (count <= number2) {
//     if (count % 2 !== 0) {
//       value += count;
//       if (count != number2 && count != number2 - 1) value += ",";
//     }
//     count++;
//   }
// }

// function oddNumbers(number1, number2) {
//   let value = "";
//   for (let index = number1; index < number2; index++) {
//     if (index % 2 !== 0) {
//       value += index;
//       if (index != number2 && index != number2 - 1) value += ",";
//     }
//   }
//   return value;
// }

//  Iterate over all numbers between first number and the second number.
//  Store all oddNumbers in string, seperated by a comma and return the string.
//  Allowed are only positive numbers, add a check.
// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// Implement a charCount function.

//  The function has a first parameter for a word which is a string.
//  The function has a second parameter which contains the character to search for which is a string.
//  Check if the second parameter consists of only one character, if not, quit the function.
//  The function returns the number of times the character from the second parameter is present in the word.
//  The function should be case insensitive.
// TODO: Implement the charCount function

function charCount(string, char) {
  let value = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) value++;
  }
  return value;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
