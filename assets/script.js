// Assignment Code
var generateBtn = document.querySelector("#generate");
// var passInputChar = confirm(
//   "would you like special characters in your password?"
// );
// var passInputNum = confirm("would you like numbers in your password?");
// var passInputLetters = confirm(
//   "would you like lower case letters in your password?"
// );
// var passInputCapLetters = confirm(
//   "would you like capital letters in your password?"
// );
// var passInput = parseInt(prompt("How many characters might you want in your password ?"));

// I researched how to make sure that the correct criteria is entered in the input is not met, and found this while loop method
// after several attempts and making my browser crash several times, I think i have gotten something that works. 



// while(passInput < 8 || passInput > 128 || passInput === NaN){
// if (passInput < 8 ) {
//     alert(
//       'your password must have at least 8 characters, please refresh the page and enter a length between "8" and "128"'
//     );
//     passInput = parseInt(prompt("How many characters might you want in your password ?"));
//   } else if (passInput > 128) {
//     alert(
//       'you must have less than 128 characters please refresh the page and enter a length between "8" and "128"'
//     );
//     passInput = parseInt(prompt("How many characters might you want in your password ?"));
//   } else if  (passInput === isNaN){
//     alert("your input must be a number, please refresh");
//     passInput = parseInt(prompt("How many characters might you want in your password ?"));
//   }
// }
//code for the pass generator
function generatePassword() {
  var passInputChar = confirm(
    "would you like special characters in your password?"
  );
  var passInputNum = confirm("would you like numbers in your password?");
  var passInputLetters = confirm(
    "would you like lower case letters in your password?"
  );
  var passInputCapLetters = confirm(
    "would you like capital letters in your password?"
  );
  var passInput = parseInt(prompt("How many characters might you want in your password ?"));
  
  while(passInput < 8 || passInput > 128 || passInput === NaN){
    if (passInput < 8 ) {
        alert(
          'your password must have at least 8 characters, please enter a length between "8" and "128"'
        );
        passInput = parseInt(prompt("How many characters might you want in your password ?"));
      } else if (passInput > 128) {
        alert(
          'you must have less than 128 characters please refresh the page and enter a length between "8" and "128"'
        );
        passInput = parseInt(prompt("How many characters might you want in your password ?"));
      } else if  (passInput === isNaN){
        alert("your input must be a number, please refresh");
        passInput = parseInt(prompt("How many characters might you want in your password ?"));
      }
    }

  var characters = [
    "!",
    ",",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    "?",
    "@",
    "^",
    "_",
    "~",
  ];
  var lowerLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var choices = [];

  // configured on the fly
  if (passInputChar) {
    choices.push(characters);
  }
  if (passInputNum) {
    choices.push(numbers);
  }

  if (passInputLetters) {
    choices.push(lowerLetters);
  }

  if (passInputCapLetters) {
    choices.push(upperLetters);
  }


 var password = "";

  for (var i = 0; i < passInput; i++) {
    var choice = choices[Math.floor(Math.random() * choices.length)];
    var randomChar = choice[Math.floor(Math.random() * choice.length)];
    password += randomChar;
  //   while(upperLetters === choic){
  //     randomChar += upperLetters[choices.length];
  //     //  return password + upperLetters -1;
  //   }
          
  //   while(lowerLetters === choices){
  //     randomChar += lowerLetters[choices.length];
  //     // return password + lowerLetters -1;
  //   }

  //   while(numbers === choices){
  //     randomChar += numbers[choices.length];
  //     // return password + choices -1;
  //   }

  //   while(characters === choices){
  //     randomChar += characters[choices.length];
  //     // return password + characters;
  //   }
    
  
  console.log(password);
  return password;
  }
}



// console.log(password);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
