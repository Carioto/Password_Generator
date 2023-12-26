// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerABC = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*?";
var numbers = "0123456789";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  //Prompt user to input number between 8 and 128
  while(true){
   var pwLength = prompt("How long would you like your password to be? Between 8 and 128 characters");
     if (pwLength >= 8 && pwLength <= 128) {
         break;
    } else {
       alert("Please enter a valid number");
      }
  }
  //Prompt user for password parameters
  var askLower = confirm("Would you like lower case letters in your password?");
  var askCaps = confirm("Would you like upper case letters in your password?");
  var askNum = confirm("Would you like numbers in your password?");
  var askSpecial = confirm("Would you like Symbols in your password?");
  //Verify at least 1 parameter has been chosen
  if (!askLower && !askCaps && !askNum && !askSpecial) {
    alert("At least one option must be chosen, please try again.")
    return writePassword();
  }
  //Create string with all chosen character options
  //Force include at least 1 of each chosen character option
  var qq="";
  let generatePassword = "";
  if (askLower) {
          qq += lowerABC;
          generatePassword += lowerABC.charAt([Math.floor(Math.random() * lowerABC.length)]);
}
if (askCaps) {
          qq += upperABC;
          generatePassword += upperABC.charAt([Math.floor(Math.random() * upperABC.length)]);
}
if (askNum) {
          qq += numbers;
          generatePassword += numbers.charAt([Math.floor(Math.random() * numbers.length)]);
}
if (askSpecial) {
          qq += symbols;
          generatePassword += symbols.charAt([Math.floor(Math.random() * symbols.length)]);
}
  //Complete password creation using parameters of user
for (let i=generatePassword.length; i < pwLength; i++){
  generatePassword += qq.charAt([Math.floor(Math.random() * qq.length)]);
}
 //Shuffle the result
function mixUp(generatePassword) {
  var aRay = generatePassword.split('');
  aRay.sort(function() {
    return 0.5 - Math.random();
  });
  generatePassword = aRay.join('');
  return generatePassword;
  }
generatePassword = mixUp(generatePassword);
  //Send password to HTML
var password = generatePassword;
var passwordText = document.querySelector("#password");
passwordText.value = password;
}