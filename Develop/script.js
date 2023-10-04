// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Ask user what character types they'd like to include in their password
var lowerCharBool = confirm("Would you like to include lowercase letters in your randomly generated password? If so, select 'confirm': \n\nFor reference: {abcdefghijklmnopqrstuvwxyz}");
var upperCharBool = confirm("Would you like to include uppercase letters in your randomly generated password? If so, select 'confirm': \n\nFor reference: {ABCDEFGHIJKLMNOPQRSTUVWXYZ}");
var numCharBool = confirm("Would you like to include numbers in your randomly generated password? If so, select 'confirm': \n\nFor reference: {0123456789}");
var specialCharBool = confirm("Would you like to include special characters in your randomly generated password? If so, select 'confirm': \n\nFor reference: {~!@#$%^&*()-+=?><,.:;}");

 // Pass function an int, receive back a random int of that length
 var input = prompt("Enter the length you'd like your random password to be, 8-128 characters.");
 var passwordRange = parseInt(input);
 console.log(typeof input);
 console.log(typeof passwordRange);
 console.log(passwordRange);


// Character options for password
var charChoices = ["A", "B", "C", "D","E","F","G"];
// var upperCharArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var upperCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharString = "abcdefghijklmnopqrstuvwxyz";
var numString = "0123456789";
var speCharString = "~!@#$%^&*()-+=?><,.:;";

// Initialize empty string which we will concat user's selections into
var selectionString = "";

// :)
    
// Random choice of charChoices
RanArraySelection = function(array) {
    var multiplier = Math.floor(array.length) * Math.random();
    var ranNum = array[parseInt(multiplier)]
  return ranNum;
  }
    

// Placeholder initializations for our for loops
var passwordArray = [];
var generatedPassword = "";

// Push random char from charChoices one at a time to passwordArray
for (i = 0 ; i < passwordRange ; i++) {
  passwordArray.push(RanArraySelection(charChoices));
}

// Convert passwordArray to string and set in tempString
var tempString = passwordArray.toString();

// comma remover
for (i = 0 ; i < tempString.length ; i++) {
  tempString = tempString.replace(",","");
}

// Set tempString as password - might be able to set as password from the start
generatedPassword = tempString;

console.log("Your password is: " + generatedPassword);
