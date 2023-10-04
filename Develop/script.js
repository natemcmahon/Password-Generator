// Placeholder initializations for our for loops
var looper = true;
var generatedPassword = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(selectionArray);
  var passwordText = document.querySelector("#password");
  passwordText.setAttribute("placeholder", password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Ask user what character types they'd like to include in their password
// logic check loop to make sure they confirmed at least one charTypeArray
while (looper) {
  var lowerCharBool = confirm("Would you like to include lowercase letters in your randomly generated password? If so, select 'confirm': \n\nFor reference: {abcdefghijklmnopqrstuvwxyz}");
  var upperCharBool = confirm("Would you like to include uppercase letters in your randomly generated password? If so, select 'confirm': \n\nFor reference: {ABCDEFGHIJKLMNOPQRSTUVWXYZ}");
  var numCharBool = confirm("Would you like to include numbers in your randomly generated password? If so, select 'confirm': \n\nFor reference: {0123456789}");
  var specialCharBool = confirm("Would you like to include special characters in your randomly generated password? If so, select 'confirm': \n\nFor reference: {~!@#$%^&*()-+=?><,.:;}");
  if ((lowerCharBool === false) && (upperCharBool === false) && (numCharBool === false) && (specialCharBool === false)) {
    alert("You can't have a password if you don't allow me to use any characters! Try again!");
  }
  else {
    looper = false;
  }
}

// var upperCharArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var upperCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharString = "abcdefghijklmnopqrstuvwxyz";
var numString = "0123456789";
var specialCharString = "~!@#$%^&*()-+=?><,.:;";

// Initialize empty string which we will concat user's selections into
var selectionString = "";

// concatenate charTypeArrays into charChoices based on windows confirms (user input) above
if (lowerCharBool){
  selectionString = selectionString.concat(lowerCharString);
}
if (upperCharBool){
  selectionString = selectionString.concat(upperCharString);
}
if (numCharBool){
  selectionString = selectionString.concat(numString);
}
if (specialCharBool){
  selectionString = selectionString.concat(specialCharString);
}
    
// Convert selectionString to type charArray to be passed into our password randomizer
var selectionArray = Array.from(selectionString);

// Pass function an int, receive back a random int of that length
var input = prompt("Enter the length you'd like your random password to be, 8-128 characters.");
var passwordRange = parseInt(input);


// Random choice of array, will pass it our selection array based on user criteria
RanArraySelection = function(array) {
    var multiplier = Math.floor(array.length) * Math.random();
    var ranNum = array[parseInt(multiplier)]
  return ranNum;
  }

function generatePassword(array){
  
  // Initialize passwordArray as empty
  // Initializing inside the function allows us to re generate password
  var passwordArray = [];

  // Push random char from charChoices one at a time to passwordArray
  for (i = 0 ; i < passwordRange ; i++) {
    passwordArray.push(RanArraySelection(selectionArray));
  }

  // Convert passwordArray to string and set in tempString
  var tempString = passwordArray.toString();

  // comma remover
  for (i = 0 ; i < tempString.length ; i++) {
    tempString = tempString.replace(",","");
  }

  // Set tempString as password - might be able to set as password from the start
  generatedPassword = tempString;

  return generatedPassword;
}
