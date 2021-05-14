// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Line 17 lets us know that the variable's name is called "number" and the value of number is "1".
// Line 19 is an increment operator and it would not increase the value compared to if it was typed out ++number instead.
// Line 21 is a Conditional which states that if the variable is greater than or equal to 2 that the console.log will display yes in the console.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Line 36 states that the variable's name is "name" and the value is a string called "Dane".
// For the condition on Line 38 the console that would populate would be How do you do? The reason for
// this is this is because the conditions were not met. The variable "name" does not match.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// In Line 55 there is no value stated for the variable "secret" but it is later assigned a string
// value of "super" in Line 60.
// In Line 57 the variable is named "code" and given the value of 123.
// In Line 59 the condition states that the variable code has to be true and an exact match,
// which in this case it is. It is also followed by setting a string value super to the variable
// secret. In line 61 the variable code is given a new value which is 123 multiplied by 2 which is 246.
// The second condition in line 64 states that code is less than 250 and the variable secret is given
// a new string value of duper. Since the condition was not met in Line 64 the console will not populate.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

  //The variable colorOne and colorTwo does not match the description. To correct this you would need to change
  //colorOne's color to blue and colorTwo's color go red. In the condition the variable mix does equal
  //true so this would change colorOne to purple but colorTwo variable is missing in this condition. You
  //would need to add the code +colorTwo = 'purple' between the colorOne variable and the semicolon.

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

  //Everything is correct minus the compound conditional of "||" which would mean either side
  //or variable can be true to satisfy the condition. It would need to instead be changed to "&&"
  //instead to require both variables to meet the condition per requested in the description.
  //**QUESTION HERE: Does there need to be a "let" before "const time = 4"???
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

  //The request is to pit the age variable to the minAge varible but the condition below
  //is typed out the wrong way. It should look "if(age >= minAge)". The if and else console.log
  //should be switched around. If the condition is met the console.log of enter should appear
  //while the else console.log of no entry should come up if the condition is not met which in
  //this case the condition is met. The console.log enter would appear to match the request. 

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
