// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var userInput=+prompt("Enter positive integer:");
// document.write("Number: "+userInput);
// document.write("<br>Round off value of the number: "+Math.round(userInput));
// document.write("<br>Floor value of the number: "+Math.floor(userInput));
// document.write("<br>Ceil value of the number: "+Math.ceil(userInput));

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var userInput=prompt("Enter negative floating point number: ");
// document.write("Number: "+userInput);
// document.write("<br>Round off value of the number: "+Math.round(userInput));
// document.write("<br>Floor value of the number: "+Math.floor(userInput));
// document.write("<br>Ceil value of the number: "+Math.ceil(userInput));

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var userInput=prompt("enter number:");
// document.write("absolute value of: "+userInput+" is "+Math.abs(userInput));

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var dice = Math.floor( Math.random() * 7 );
// document.write("The value of dice is: "+ dice);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser
// var coin = Math.floor(Math.random()*3);
// if(coin===1)
// document.write(coin+"<br>Random coin value: Tails");
// else if (coin===2)
// document.write(coin+"<br>Random coin value: Heads");
// else
// document.write(coin+"<br>coin lost :(");

// 6. Write a program that shows a random number between 1 & 100 in your browser.
// var random=Math.floor(Math.random()*100)+1;
// document.write('random number between 1 & 100 is '+random );

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var weight=prompt("Enter Your Weight:");
// document.write('The weight of user is '+weight);

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var randomSecretNumber=Math.floor(Math.random()*10)+1;
// var userInput=+prompt("Enter a number between 1 and 10:");
// if(userInput===randomSecretNumber)
// {
//     alert("Congratulation!");
// }
// else
// {
//     alert("Try Again!");
// }