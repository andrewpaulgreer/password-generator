  
// Assignment Code
var generateBtn = document.querySelector("#generate");

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
              'your password must have at least 8 characters, please refresh the page and enter a length between "8" and "128"'
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
 var confirmPass = "";
  for (var i = 0; i < passInput; i++) {
    var choice = choices[Math.floor(Math.random() * choices.length)];
    var randomChar = choice[Math.floor(Math.random() * choice.length)];
    // if (passInputChar && passInputNum && passInputLetters && passInputCapLetters){

    // }

    password += randomChar;
    confirmPass += randomChar;

  }

// do a split on the password, with a minimum of 4 characters, for the given criteria: numbers, characters, uppercase and lowercase
// slice method in JS, depending on the number for input, slice out first 3 letters of input. 

var confirmCriteria = password.slice(0,3);
var pass = confirmPass.slice(3,password.length); 

for (var i = 0; i < confirmCriteria.length; i++) {
    if (passInputLetters) {
        confirmCriteria[0] = lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
        console.log(confirmCriteria[0]);
    }
    if (passInputCapLetters) {
        confirmCriteria[1] = upperLetters[Math.floor(Math.random() * upperLetters.length)]
        console.log(confirmCriteria[1]);
    }
    if (passInputNum) {
        confirmCriteria[2] = numbers[Math.floor(Math.random() * numbers.length)]
        console.log(confirmCriteria[2]);
    }
    if (passInputChar) {
        confirmCriteria[3] = characters[Math.floor(Math.random() * characters.length)]
        console.log(confirmCriteria[3]);
    }
}
console.log(confirmCriteria+pass);

console.log(password);
  return password;

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