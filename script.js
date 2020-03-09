// // Assignment Code
var results = ""
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*","-","?"];
var selectedOptions= []

var plength = prompt("How many characters would you like your password to be?")

if (plength < 8 || plength > 128){
    alert("Length must be 8-128 characters")
}

if (plength >= 8 && plength <= 128){
var uppercase = confirm("Would you like to use uppercase letters?")
var lowercase = confirm("Would you like to use lowercase letters?")
var numbers = confirm("would you like to use numbers?")
var symbols = confirm("would you like to use special characters?")
}    

if (uppercase != true && lowercase != true && numbers != true && symbols != true){
    alert("You must select at least one character type!")
}

const resultEl = document.getElementById('password');




document.getElementById('generate').addEventListener('click', () => {	
	const hasLower = lowercase.true;
	const hasUpper = uppercase.true;
	const hasNumber = numbers.true;
	const hasSymbol = symbols.true;
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

document.getElementById('generate').addEventListener('click', () => {
	const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    password.textContent = resultEl.innerText;

});


function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

 	
     for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
    return finalPassword;
}


function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}