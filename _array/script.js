// The first parameter is an array.
// The second parameter is a number. It's the non-zero-based index of the item that should get deleted.

// Remove the item and return an array.
// Ensure that the original array was not mutated.

// TODO: Implement the removeItem function

function removeItem(data, number) {
  return data.filter((item) => item !== data[number - 1]);
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// The function has one parameter, which is an array.
// Check the type of each array entry. If it's a string then store the count of characters.
// The function returns the total sum of all characters.
// TODO: Implement the sumOfCharacters function

function sumOfCharacters(array) {
  let stringArray = array.filter((item) => typeof item === "string");
  let count = 0;
  for (let index = 0; index < stringArray.length; index++) {
    count += stringArray[index].length;
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];

console.log(sumOfCharacters(arr2));
// result should be: 55

const rightSidePower = {
  m: 4,
  q: 3,
  d: 2,
  z: 1,
};

let leftScore = 0;
let rightScore = 0;

for (let i = 0; i < fight.length; i++) {
  let letter = fight[i];
  if (leftSidePower[letter]) {
    leftScore += leftSidePower[letter];
  } else if (rightSidePower[letter]) {
    rightScore += rightSidePower[letter];
  }
}
if (leftScore > rightScore) return `Left side wins!`;
else if (leftScore < rightScore) return `Right side wins!`;
else return `Let's fight again`;

return "Let's fight again!";

arr1.forEach((element) => {});

//  const deadPeople = ['Lucas', 'Bill'];

// }

// let suspects = 0;
// let lastSeen = 0;

// for (let i = 0; i < dead.length; i++)

// {
//   let name = dead[i];
//   if (suspects[name]) {
//     suspects += allSuspects[name];
//   } else if (lastSeen[name]) {
//     lastSeen += deadPeople[name];
//   }

// }
// // }
// function killer(suspectInfo, dead){

//     const suspectsJames = ['Jacob', 'Bill', 'Lucas'];
//     const suspectJohnny = ['David', 'Kyle', 'Lucas'];
//     const suspectPeter = ['Lucy', 'Kyle'];

//     const deadPeople = ['Lucas', 'Bill'];
//     let James = 0;
//     let Johnny = 0;
//     let Perter = 0;
// }

//     // for (let i = 0; i < dead.length; i++)

//     {
//       let James = dead[i];
//       if (suspects[James]) {
//         suspects += allSuspects[James];
//         return "James is the murder!"
//       } else if (lastSeen[name]) {
//         lastSeen += deadPeople[name];
//       }

//       function sumOfCharacters(array)

// }

function killer(suspectInfo, dead) {
  let stringArray = suspectInfo.filter((item) => typeof item === "string");
  let count = 0;
  for (let index = 0; index < stringArray.length; index++) {
    count += stringArray[index].length;
  }
  return count;
}

function killer(suspectInfo, dead) {
  const allSuspects = suspectInfo;
  {
    const allSuspects = {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    };
    const deadPeople = ["Lucas", "Bill"];
  }

  let suspects = [];
  let lastSeen = [];

  for (let i = 0; i < dead.length; i++) {
    let name = dead[i];
    if (allSuspects[name]) {
      suspects = allSuspects[name];
    } else if (lastSeen[name]) {
      lastSeen = allSuspects[name];
    }
  }
}

const allSuspects = suspectInfo;
{
  const allSuspects = {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  };
  const deadPeople = ["Lucas", "Bill"];
}

let suspects = [];
let lastSeen = [];

for (let i = 0; i < dead.length; i++) {
  let name = dead[i];
  if (allSuspects[name]) {
    suspects = allSuspects[name];
  } else if (lastSeen[name]) {
    lastSeen = allSuspects[name];
  }
}

function killer(suspectInfo, dead) {
  for (const suspectName in suspectInfo) {
    let seenBySuspect = suspectInfo[suspectName];
    let isKiller = true;
    for (let i = 0; i < dead.length; i++) {
      if (seenBySuspect.indexOf(dead[i]) === -1) {
        isKiller = false;
        break;
      }
    }
    if (isKiller) {
      return suspectName;
    }
  }
}
//console.log (killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']), 'Megan');
