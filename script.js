// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length = 12, addUppercase = true, addDigits = true, addSpecialChars = true) {
  var charset = "abcdefghijklmnopqrstuvwxyz";
  if (addUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (addDigits) charset += "0123456789";
  if (addSpecialChars) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
