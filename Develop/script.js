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


 // Pass function an int, receive back a random int of that length
 var input = prompt("Enter the length you'd like your random password to be, 8-128 characters.");
 var passwordRange = parseInt(input);
 console.log(typeof input);
 console.log(typeof passwordRange);
 console.log(passwordRange);

// MOST LIKELY DELETE 
//  RandomNum = function() {
//     var ranNum = (Math.round(Math.floor(121) * Math.random())) + 7;
//     // var ranNum = (array[parseInt(multiplier)]) + 7;
//     return ranNum;
//   }

// Character options for password
var charChoices = ["A", "B", "C", "D","E","F","G"];
    
// Random choice of charChoices
RanArraySelection = function(array) {
    var multiplier = Math.floor(array.length) * Math.random();
    var ranNum = array[parseInt(multiplier)]
  return ranNum;
  }
    

// Placeholder initializations for our for loops
var passwordArray = [];
var password = "";

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
password = tempString;

console.log("Your password is: " + password);