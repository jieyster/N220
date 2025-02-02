let password = "(d0nteatTheScript)"

let space =  password.charAt(0).includes(" ")

let eight = password.length > 8 || password.length == 8

let eat =  password.includes("eat") 
// used let because password and qualifications might change
console.log("starts with a space", space);

console.log("at least eight", eight);

console.log("contains the word eat", eat);

// console.log("do you not eat?", !password.includes("eat") );

// console.log("do you even space bro?", !password.includes(" "));

// console.log("are you 8 or more?", password.length > 8 || password.length == 8);

// if password.indexOf ( ) = 0  then bad

// console.log("is space first",password.charAt(0).includes(" "));

