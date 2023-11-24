let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return userName.length;
  // return (result = userName.length);
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true#

// Implement a isString function.

//  The function has one parameter which could be any kind of data type

//  The function is written as a function expression

//  The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false
// TODO: Implement the isString function

function isString(data) {
  return typeof data === "string";
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
