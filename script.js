// Assignment code here
const lowercase = [
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
const uppercase = [
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
const special = [
  "!",
  "#",
  "$",
  "&",
  "%",
  "'",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "~",
  "`",
  "{",
  "|",
  "}",
  ".",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var finalPassword = "";
  var finalArray = [];
  var length = prompt("Please enter your length of your password");

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter value between 8 and 128!");
    length = prompt("Please enter your length of your password");
  }

  var lowercaseConfirm = confirm("Would you like to included one lowercase?");
  var uppercaseConfirm = confirm("Would you like to included one uppercase?");
  var numericConfirm = confirm("Would you like to included one numeric?");
  var specialConfirm = confirm(
    "Would you like to included one special characters?"
  );

  if (lowercaseConfirm) {
    finalArray.push(...lowercase);
  }

  if (uppercaseConfirm) {
    finalArray.push(...uppercase);
  }

  if (numericConfirm) {
    finalArray.push(...numbers);
  }

  if (specialConfirm) {
    finalArray.push(...special);
  }

  if (
    !lowercaseConfirm &&
    !uppercaseConfirm &&
    !numericConfirm &&
    !specialConfirm
  ) {
    alert("Please choose at least one type of character!");
    return;
  }

  for (let index = 0; index < length; index++) {
    finalPassword += finalArray[Math.floor(Math.random() * finalArray.length)];
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = "Please make sure you follow the instructions!";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
