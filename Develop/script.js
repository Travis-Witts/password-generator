// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (8-128)");
  // Asking for a password length then it will continue to ask until it is a character between 8-128
  while (passLength > 128 || passLength < 8) {
    alert("Invalid choice! Please pick a value between 1-128");
    passLength = prompt("How long would you like your password to be? (8-128)");
  }
  // Confirm values to decide what types of characters will be used in the password.
  var upper = confirm("Would you like to include uppercase numbers?");
  var special = confirm("Would you like to include special characters?");
  var numeric = confirm("Would you like to include numbers?");
  // An initial array is created containing lowercase numbers.
  var genArray = arrayBuilder(97, 122);
  // Empty array to house the generated password after the for loop
  var passwordArr = [];
  // Multiple if statements to concatenate extra characters which were chosen in the above values.
  if (upper) {
    genArray = genArray.concat(arrayBuilder(65, 90));
  }
  if (numeric) {
    genArray = genArray.concat(arrayBuilder(48, 57));
  }
  if (special) {
    var symbols = arrayBuilder(33, 47).concat(58, 64).concat(91,96).concat(123, 126);
    genArray = genArray.concat(symbols);
  }
  // The main for loop of the function, randomly selects a number in the array using the ASCII numbering scheme and the inbuilt Math function.
  for (i = 0; i < passLength; i++) {
    var character = genArray[Math.floor(Math.random() * genArray.length)];
    // Uses the string functions to translate to ASCII, can also be done by concatenating "&#" + char + ";"
    passwordArr.push(String.fromCharCode(character));
  }
  // Building the new string to be displayed as the password.
  var newPassword = passwordArr.join('');
  return newPassword;
}
// This function takes a highest and lowest value and creates an array of all the numbers inclusively.
function arrayBuilder(lowVal, highVal) {
  var array = [];
  while (lowVal <= highVal) {
    array.push(lowVal++);
  }
  return array
}