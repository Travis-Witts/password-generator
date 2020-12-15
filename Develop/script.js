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
  while (passLength > 128 || passLength < 8) {
    alert("Please pick a value between 1-128");
    passLength = prompt("How long would you like your password to be? (8-128)");
  }
  var upper = confirm("Would you like to include uppercase numbers?");
  var special = confirm("Would you like to include special characters?");
  var numeric = confirm("Would you like to include numbers?");
  var genArray = arrayBuilder(97, 122);
  var passwordArr = [];
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
  for (i = 0; i < passLength; i++) {
    var character = genArray[Math.floor(Math.random() * genArray.length)];
    passwordArr.push(String.fromCharCode(character));
  }
  var newPassword = passwordArr.join('');
  return newPassword;
}



function arrayBuilder(lowVal, highVal) {
  var array = [];
  for (var i = lowVal; i <= highVal; i++) {
    array.push(i);

  }
  return array
}