// Assignment Code
var generateBtn = document.querySelector("#generate");
// Generates a random number to pull a random character from an array
function randomNumber(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}
// Generates random character from the lists by using the random number generated above
function getRandomObject(list) {
  return list[randomNumber(list.length)]
}
//Generates the password
function generatePassword() {
  // Asks user for password length
  var userInput = window.prompt("How long do you want your password to be?")
  
  var passwordLength = parseInt(userInput)
 // Tells user that they entered something that is not a number
  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  } 
  // Tells user how long the password must be if they enter an amount to big or too small
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }
  // Allows user to choose what kind of characters they want included in their password
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symblos in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")
  // Lists of characters
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  // Applies the users choices of characters to the generated password
  var possibleOutcome = []

  if (userWantsNumbers === true) {
    possibleOutcome.push(numberList)
  }

  if (userWantsSymbols === true) {
    possibleOutcome.push(symbolsList)
  }
  
  if (userWantsLowercase === true) {
    possibleOutcome.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    possibleOutcome.push(uppercaseList)
  }

  if(possibleOutcome.length === 0) {
    possibleOutcome.push(symbolsList)
  }

  var generatedPassword = ""
  //Creates the random password
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomObject(possibleOutcome)
    var randomChar = getRandomObject(randomList)
    generatedPassword += randomChar
  }
  return generatedPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
