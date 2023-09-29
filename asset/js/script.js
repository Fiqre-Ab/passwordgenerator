// Select the HTML element with the id "generate" and store it in the variable "generateBtn"
var generateBtn = document.querySelector("#generate");

// Define a function called "writePassword"
function writePassword() {
  // Call the "generatePassword" function to generate a password
  var password = generatePassword();
  // Select the HTML element with the id "password" and store it in the variable "passwordText"
  var passwordText = document.querySelector("#password");
  // Set the value of the "passwordText" element to the generated password
  passwordText.value = password;
}

// Define a function called "generatePassword"
function generatePassword() {
  // Prompt the user to enter the desired length of the password and convert it to an integer
  var length = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  // Check if the entered length is not a number or is outside the range of 8 to 128
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please insert a valid number between 8 and 128.");
    return "";
  }
  // Ask the user if they want to include lowercase,uppercase,numbers,specialcharacters and store the result in each of them
  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var numbers = confirm("Do you want to include numeric characters?");
  var specialChars = confirm("Do you want to include special characters?");

  // Check if the user has not selected any character types
  if (!lowercase && !uppercase && !numbers && !specialChars) {
    alert("Please select at least one character type.");
    return "";
  }
  //this a  "char" to store the characters based on user choices
  var char = "";
  if (lowercase) char += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) char += "0123456789";
  if (specialChars) char += "!@#$%^&*()_+";
  // Initialize an empty string called "password" to store the generated password
  var password = "";

  // Generate the password by randomly selecting characters from the "char" string
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * char.length);
    password += char.charAt(random);
  }
  // Return the generated password
  return password;
}
// Add a click event listener to the "generateBtn" element, which triggers the "writePassword" function
generateBtn.addEventListener("click", writePassword);
