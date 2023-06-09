// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// var character = prompt("enter any character");
// if (character >=48 || character < 58   ) {
//     alert(character+' is a number');
// }
// else if (character >='A' && character <= 'Z'){
//     alert(character+' is an uppercase letter');
// }
// else if (character >='a'  || character <='z' ){
//     alert(character+' is a lowercase letter');
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// var num = +prompt("Enter first number: ");
// var num2= +prompt("Enter second number: ");
// if (num > num2) 
// {
//     document.write(num + "  is larger than  " + num2)
// }
//  else if (num < num2) 
//  {
//     document.write(num2 + "  is larger than  " + num)
//  }
// else if(num === num2)
// {
//     document.write("Both numbers are equal.");
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// var number = +prompt("Enter any number: ")
// if (number > 0) 
// {
//     alert("The number is positive.")
// }
// else if (number < 0)
// {
//     alert("The number is negative.")
// }
// else if(number===0)
// {
//     alert("The number is zero.")
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
// var character=prompt("Enter any character:");
// if (character==="a"||character==="e"||character==="i"||character==="o"||character==="u")
// {
//     document.write(character+" is a vowel");
// }
// else
// {
//     document.write(character+" is not a vowel");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
// var correctPassword = "6233nfsm"; 
// var userPassword = prompt("Enter your password: ");
// if (userPassword==0) 
// {
//    alert('Please enter your password');
// } 
//  else if (userPassword === correctPassword) 
// {
//   alert('Correct! The password you entered matches the original password');
// } 
// else 
// {
//   alert('Incorrect password');
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var greeting;
// var hour = 13;
// if (hour < 18) 
// {
// greeting = "Good day";
// alert(greeting);
// }
// else
// {
// greeting = "Good evening";
// alert(greeting);
// }

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// var Time=+prompt("Enter time in 24hrs format\n(e.g 7pm=1900):");
// if(Time>=0000 && Time < 1200)
// {
//     alert("Good Morning");
// }
// else if(Time>=1200 && Time < 1700)
// {
//     alert("Good Afternoon");
// }
// else if(Time>=1700 && Time < 2100)
// {
//     alert("Good Evening");
// }
// else if(Time>=2100 && Time < 2359)
// {
//     alert("Good Night");
// }