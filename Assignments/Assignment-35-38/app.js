// 1. Write a function that displays current date & time in your browser.
// function date()
// {
//     document.write(new Date());
// }
// date();

//2. Write a function that takes first & last name and then it
// greets the user using his full name.
// function greet(first,last)
// {
//      document.write(first.concat(" ",last));
// }
// greet("misbii","nini");

//3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// function add(a,b)
// {
//     return (a+b);
// }
// var firstNum=+prompt("Enter First Number");
// var secondNum=+prompt("Enter Second Number");
// var result =add(firstNum,secondNum);
// document.write(result);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// function Calculator(a,b,sign)
// {
//     if(sign=='+')
// {
//     return(a+b);
// }
// else if(sign=='-')
// {
//     return(a-b);
// }
// else if(sign=='*')
// {
//     return(a*b);
// }
// else if(operator=='/')
// {
//     return(a/b);
// }
// }
// var firstNum=+prompt("Enter First Number");
// var secondNum=+prompt("Enter Second Number");
// var operator=prompt("Enter Operator +,-,*,/:");
// var result = Calculator(firstNum,secondNum,operator);
//     document.write(result);

//5. Write a function that squares its argument.
// function square(num)
// {
//     return(num*num);
// }
// var number=+prompt("Enter Number");
// var result = square(number);
//     document.write(result);

//6. Write a function that computes factorial of a number
// function factorial(num)
// { var f=1;
//     for(i=1;i<=num;i++)
//     {
//         f*=i;
//     }
//     return f;
// }
// var number=+prompt("Enter Number For Factorial");
// var result = factorial(number);
//     document.write(result);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// function counting(start,end)
// {
//    for(i=start;i<=end;i++)
//    {
//     document.write(i+"<br>");
//    }
// }
// var startNum=+prompt("Enter starting Number");
// var endNum=+prompt("Enter end Number");
// counting(startNum,endNum);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// function calculateHypotenuse(b,p)
// {    
//      function calculateSquare(x)
//      { 
//          return (x*x);
//      }
//      var hypotenuse = calculateSquare(b) + calculateSquare(p);
//         hypotenuse = Math.sqrt(hypotenuse).toFixed(2);
//    return hypotenuse;
// }
// var base=+prompt("Enter Base Number");
// var perpendicular=+prompt("Enter perpendicular Number");
// var hypotenuse = calculateHypotenuse(base,perpendicular);
// document.write("The hypotenuse of a right triangle with base " +base+ " and perpendicular " +perpendicular+ " is " +hypotenuse);

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// function area_of_rectangle(w,h)
// {
//    var A = w * h ;
//    document.write("<br>Area is "+A); 
// }
// var width=+prompt("Enter width Number");
// var height=+prompt("Enter height Number");
// area_of_rectangle(5,6);
// area_of_rectangle(width,height);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// function palindrome(string)
// {    var reverse = string.split('').reverse().join('');
//       console.log(reverse);
//     if(string==reverse)
//         document.write("Its a palindrome")
//     else
//     document.write("Its not a palindrome")
// }
// var string = prompt("Enter String:");
// palindrome(string);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// function upperCase(string)
// {
//     document.write("User Input = "+string+"<br>");
//     var firstLetter=string.slice(0,1).toUpperCase();
//     var string = string.slice(1);
//     console.log();
//     document.write("Title Case = "+firstLetter+string+"<br>");
// }
// var string = prompt("Enter String:");
// upperCase(string);

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// function longestLength(string)
// {  
//   var sentence = string.split(" ");
//   var word = '';
//   for (var i = 0; i < sentence.length; i++) 
//   {
//     if (sentence[i].length > word.length) 
//     {
//       word = sentence[i];
//     }
//   }
//   return word; 
// }
// var string = prompt("Enter String:");
// document.write(" find Longest in Web Development Tutorial is = "+longestLength(string));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// function occurrences(string,letter)
// {
//     var count = 0;
//     var sentence = string.split("");
//     for(var i=0; i<sentence.length; i++)
//     {
//         if(sentence[i] == letter){
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }
// var string = prompt("Enter String:");
// var letter = prompt("Enter letter to find its occurrence");
// document.write("Text: "+string+"<br>");
// document.write("<br>There are "+occurrences(string,letter)+" occurence of the Letter "+letter);

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// function calcCircumference(radius){
//     var Circumference = 2*Math.PI*radius;
//     document.write("The circumference is "+Circumference.toFixed(2));
// }
// function calcArea(radius){
//     var area = 2*radius*radius;
//     document.write("<br>The area is "+area);   
// }
// var radius=prompt("enter the radius: ");
// calcCircumference(radius);
// calcArea(radius);