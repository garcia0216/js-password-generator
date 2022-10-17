


// PSEUDOCODE

// Need a way to store the user's choice for length of password --> variable
// Prompt user for length of password
  // IF the user chooses a number outside the acceptable range, need to do SOMETHING
    // Alert that the validation failed?
    // Return to the prompt, OR
    // Exit out of the function
// Need variables storing each of our character sets--arrays?:
  // Uppercase
  // Lowercase
  // Numbers
  // Special Characters
// Need a variable to store the user's choice for whether to use each character set
// IF the user fails to select any characters, need to do SOMETHING
  // Alert that the validation failed?
  // Return to the prompt, OR
  // Exit out of the function
// Generate a random character from each chosen array
  // May be some IF statements regarding which character arrays were chosen
  // Generate a random array index using Math.floor(Math.random() * array.length)
  // Grab the character at the randomly-generated index
  // Add it to the end of the password string
    // Need a variable to store the generated password
// Repeat ^ for each chosen array
// Join/concatenate the up to four selected character sets
// Iterate until password.length === the length the user chose
  // Generate a random character from the mega-array and add it to the end of the password string on each loop
// Return the generated password




// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

var passwordLength = prompt('Password length must be between 8 and 128 characters?')

if (passwordLength >=8 && passwordLength <=128){
  alert('Valid password length! Please choose characters')
// if (passwordLength.length >= 128){
// prompt('invalid password length!')

}else {
  alert('Invalid password length! Try again')
  return
}


var isUpperCase = confirm('Do you want uppercase letters?')
var isLowerCase = confirm('Do you want lowercase letters?')
var isNumber = confirm ('Do you want numbers?')
var specialCharacters = confirm('Do you want special characters?')
var characterOptions = '';



if (isUpperCase){
  characterOptions +='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}
if (isLowerCase){
  characterOptions +='abcdefghijklmnopqrstuvwxyz'
}
if (specialCharacters){
  characterOptions +='!@#$%&\'()*+,^-./:;<=>?[]_`{~}|'
}
if (isNumber){
characterOptions +='123456789'
}

var password = '';

for(var i = 0; i < passwordLength; i=i+1){
  // Math.floor(Math.random() * array.length)
var randomCharacter = characterOptions[Math.floor(Math.random() * characterOptions.length)]
password += randomCharacter
}
return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (!password){
  return
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
