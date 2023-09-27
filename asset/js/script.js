var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

const generatePassword = () => {
  var length = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please insert a valid number between 8 and 128.");
    return "";
  }

  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var numbers = confirm("Do you want to include numeric characters?");
  var specialChars = confirm("Do you want to include special characters?");

  if (!lowercase && !uppercase && !numbers && !specialChars) {
    alert("Please select at least one character type.");
    return "";
  }

  var char = "";
  if (lowercase) char += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) char += "0123456789";
  if (specialChars) char += "!@#$%^&*()_+";

  var password = "";
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * char.length);
    password += char.charAt(random);
  }
  return password;
};

generateBtn.addEventListener("click", writePassword);
