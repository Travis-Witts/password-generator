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
  var passLength = prompt("How long would you like your password to be? (8-128)")
  var upper = confirm("Would you like to include uppercase numbers?")
  var special = confirm("Would you like to include special characters?")
  var numeric = confirm("Would you like to include numbers?")
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var genArray = []
  if (upper) {
    genArray = genArray.concat(lower.map(letter => letter.toUpperCase()))
  }
  if (special) {

  }
}