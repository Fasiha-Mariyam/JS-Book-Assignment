//1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// var city=prompt("enter your city name");
// if (city==="Karachi"||city==="karachi")
// { 
//     document.write("welcome to city of lights ")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// var gender=prompt("enter your gender");
// if(gender==="male"){
//     document.write("Good Morning Sir");
// }
// else if(gender ==="female")
// {
//   document.write("Good Morning Ma’am");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// var userColor=prompt("Enter signal color");
// if (userColor==="green"||userColor==="Green")
// {
//     document.write("Move now");
// }
// else if (userColor==="red"||userColor==="Red")
// {
//     document.write("Must Stop");
// }
// else if (userColor==="yellow"||userColor==="Yellow")
// {
//     document.write("Ready to move");
// }

// 4. Write a program to take input remaining fuel in car (in
//  litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
// var userFuel=prompt("Enter remaining fuel in liters");
// if (userFuel<0.25)
// {
//     document.write("Please refill the fuel in your car");
// }
    
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// var obt=+prompt("Enter obtained marks for first subject ");
// var obt2=+prompt("Enter obtained marks for second subject ");
// var obt3=+prompt("Enter obtained marks for third subject ");
// var obtMrks=(obt+obt2+obt3);
// var totalMrks=300;
// var percentage=(obtMrks/totalMrks)*100;
// document.write("<h1>Marks Sheet</h1><br><br>");
// document.write("Total marks : "+totalMrks+"<br>");
// document.write("Marks Obtained : "+obtMrks+"<br>");
// document.write("Percentage : "+percentage+"%"+"<br>");
// if(percentage>=80)
// {    
//     document.write("Grade : A-one<br>");
//     document.write("Remarks : Excellent<br>");
// }
// else if(percentage>=70)
// {    
//     document.write("Grade : A<br>");
//     document.write("Remarks : Good<br>");
// }
// else if(percentage>=60)
// {    
//     document.write("Grade : B<br>");
//     document.write("Remarks : You Need Improvement");
// }
// if(percentage<60)
// {    
//     document.write("Grade : Fail<br>");
//     document.write("Remarks : Sorry<br>");
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// var secretNumber = 6;
// var number = +prompt("Guess a secret number (ranging from 1 to 10)")
// if (number === secretNumber)
// {
//      alert("Bingo! Correct answer")
// }
// else if ((number+1) === secretNumber)
// {
//      alert("Close enough to the correct answer")
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// var number = +prompt("Enter a number: ");
// if (number % 3 === 0)
//     alert("The number is divisible by 3")
// else{
//     alert("The number is not divisible by 3")
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// var number = +prompt("Enter a number: ");
// if (number % 2 === 0)
//     alert("The number is even")
// else
// {
//    alert("The number is odd")
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var temperature = +prompt("Enter the temperature: ")
// if (temperature > 40)
//     alert("It is too hot outside.")
// else if (temperature > 30)
//     alert("The weather today is normal.")
// else if (temperature > 20)
//     alert("Today's weather is cool.")
// else if (temperature > 10)
//     alert("OMG! Today's weather is so cool.")

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
// var firstNumber = +prompt("Enter the first number: ")
// var secondNumber= +prompt("Enter the second number: ")
// var operation = prompt("Enter the operation (+, -, *, /, %): ")
// var result;
// if (operation === "+"){
//     result = firstNumber + secondNumber;
//     alert("Addition of two number is : "+ result)
// }
// else if (operation === "-"){
//     result = firstNumber - secondNumber;
//     alert("Subtraction of two number is: "+ result)
// }
// else if (operation === "*"){
//     result = firstNumber * secondNumber;
//     alert("Multiplication of two number is: "+ result)
// }
// else if (operation === "/"){
//     result = firstNumber / secondNumber;
//     alert("Division of two number is: "+ result)
// }
// else if (operation === "%"){
//     result = firstNumber % secondNumber;
//     alert("Remainder of two number is: "+ result)
// }

