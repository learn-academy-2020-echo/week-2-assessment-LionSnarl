// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const divide = (num) => {
  if (num % 3 === 0) {
    return `"${num} is divisible by three"`
// I had single qoutes and not back ticks..... ***
  }else{
    return `"${num} is not divisible by three"`
  }
}
console.log(divide(num1));
console.log(divide(num2));
console.log(divide(num3));



// // --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// need a const that returns every variable capitalized
const capital = (array) => {
  let array42 = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
    //in order for me to signal to the function JUST TO capitalize the first letter, I use index[0] and I want the entire word after capitalization as well to complete my answer as .substring[1] to signal that I need all the letters
  })
  return array42.join(" ")
  // add a space inbetween each word I reaturn in the array
}
console.log(capital(randomNouns));


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlyNums = (array) => {
  // Here I am creating a generic function to take in ANY data type give as (array)
  let sortFilter = array.filter(value => {
    //here I want to label sortFilter as a function that filters (array) to give me a typeof 'value' to strictly equal only "number"
    return (typeof value === "number")
  })
  //console.log(sortFilter); checking sortFilter
  //so now we need to focus on making our sortFilter into an array that is least to greatest
      return sortFilter.sort(function(a, b){return a-b})
      // i forgot the ^r on filter...
}
// for (let i=0; i < array.length; i++)
//   if ([i]<= xxx {
//
//   })


// mixedDataArray.sort(onlyNums)
//mixedDataArray.sort(function(a, b){return a-b})
console.log(onlyNums(mixedDataArray));

// Expected output: [-8, 0, 8, 46, 59, 90, 107]
// my output:[-8,  0,   8, 46, 59, 90, 107]


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3
//Create a function that iterates each letters
//have another function intandem to return the index of only the first vowel indexOf()
//turn string into array of letters
//for loop that checks AEIOU
//return index
var arrayVowel = ["e" , "a" , "o" , "u" , "i"]

const indexr = (string) => {
  let stringSplit = string.split("")
  //console.log(stringSplit);
  for(let i=0; i<stringSplit.length; i++){
    if (arrayVowel.includes(stringSplit[i]))
    return i
  }
  //return stringSplit
  //return stringSplit.indexOf(value === "e" && "a" && "i" && "o" && "u")
  //return stringSplit.indexOf("e" || "a" || "i" || "o" || "u")
}
console.log(indexr(vowelTester1));
console.log(indexr(vowelTester2));

/*
  let vowelFilter = string.map(value )
}

const indexMeVowel = (string) => {
  let vowelFilter = string.indexOf(value => {
    return value === "a" && "e" && "i" && "o" && "u"})
}
console.log();
console.log(indexMeVowel(vowelTester1));
*/

// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"
//                                               2       /         2
// build a function that takes three arguments (num1, (+,-,*,/), num2 )
// if/ else: if num1 & num2 is NOT !== divided by 0 , the return "Can't divide by 0!"
/*}else{ if num1 & num2 is equal === divide by 0, return the operation.
} */
//declare our variables
const calculator = (num1, symbol, num2) => {
  //if else
  //make variables for all symbols and have dividing by zero catch function first.
  if(symbol === "+"){
    return (num1 + num2)
  }else if(symbol === "-"){
    return (num1 - num2)
  }else if(symbol === "*"){
    return (num1 * num2)
  }else if(symbol === "/" && num1 || num2 === 0){
    return "Cant divide by 0!"
  }else{(symbol === "/")
    return (num1 / num2)
}
}
  //calculatorOne = calculator.concat(solution)
//  console.log(calculatorOne);
//console.log(calculator);
// else if(symbol === "/"){
//   return (num1 + num2)
// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

 console.log(calculator(16, "+", 3))
// Expected output: 19

 console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
