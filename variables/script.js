function welcomeMsg(firstName) {
  // return "Welcome " + firstName + "!";
  return `Welcome ${firstName}!`;
}

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));

// TODO: implement calcGrossPrice function

function calcGrossPrice(netPrice, taxRate) {
  const grossPrice = netPrice * (taxRate + 1);
  return grossPrice.toFixed(1);
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

// TODO: Implement the addPositive function

const addPositive = function (a, b) {
  return Math.abs(a) + Math.abs(b);
};

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
