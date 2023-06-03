// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// function power(a,b){
//     document.write(a+" to the power "+b+" is "+a**b);
// }
// var number = +prompt("Enter number");
// var powerOfNumber = +prompt("Enter power of a number"); 
// power(number,powerOfNumber)

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
// function leapYear(year){
//     if(year%4==0)
//     {
//         document.write(year+" is a leap year")
//     }
//     else
//     document.write(year+" is not a leap year")
// }
// var year = prompt("enter year to check \nwhether the year is a leap year or not:");
// leapYear(year);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// function area(a,b,c,s){
//      var area_Of_tri = s*(s - a)*(s - b)*(s - c);
//      var Area = Math.sqrt(area_Of_tri);
//      document.write("Area is  "+Area);
// }
// function forS(a,b,c){
//     var s = (a+b+c) / 2;
//     console.log(s);
//     return s;
// }
// var side1= +prompt("Enter First side :")
// var side2= +prompt("Enter Second side :")
// var side3= +prompt("Enter Third side :")
// var valueOfS = forS(side1,side2,side3);
// area(side1,side2,side3,valueOfS);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
// function marks(f,s,t){
//     function average(f,s,t){
//     return ((f+s+t)/300);
//     }
//     function percentage(f,s,t){
//         return average(f,s,t)*100; 
//     }
//    var finalPercentage = percentage(f,s,t);
//    document.write("Percentage of 3 subjects :"+finalPercentage+"%"); 
// }
// var marks1 = +prompt("enter marks of First subject");
// var marks2 = +prompt("enter marks of Second subject");
// var marks3 = +prompt("enter marks of Third subject");
// marks(marks1,marks2,marks3);

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
// function indexOf(word,value)
// {
//     var sentence = word.split("");
//     var index = 0;
//     for(var i=0;i<sentence.length;i++)
//     {
//         if(sentence[i]==value){
//             index = i;        }
//     }
//     console.log(index);
//     document.write("Index of "+value+" is "+index);
// }
// var string = prompt("enter any string :");
// var letter = prompt("enter the letter which index value you want to find");
// indexOf(string,letter);

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
// function vowels(string){
//     var aeiou = [ 'a', 'e', 'i', 'o', 'u', 
//                'A', 'E', 'I', 'O', 'U' ];
//     var result = "";
      
//     for( i = 0; i < string.length; i++) 
//     {
          
//         if (!aeiou.includes(string[i]))
//         {
//             result += string[i];
//         }
//     }  
//    document.write("without Vowels string is "+result);
// }
// var string = prompt("Enter string:");
// vowels(string);

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// function occurrences(){
//     var aeiou = [ 'a', 'e', 'i', 'o','u'];
//     var count =0;
//     for(i=0;i<string.length;i++){
//     switch(string[i])
// {   case 'a':
//     {if(aeiou.includes(string[i+1]))
//     {count++}
//     break;}
//     case 'e':
//         {if(aeiou.includes(string[i+1]))
//             {count++}
//             break;}
//     case 'i':
//         {if(aeiou.includes(string[i+1]))
//             {count++}
//             break;}
//     case 'o':
//         {if(aeiou.includes(string[i+1]))
//             {count++}
//             break;}
//     case 'u':
//         {if(aeiou.includes(string[i+1]))
//             {count++}
//             break;}
//     default:
//         break;
//     } 
// }
// document.write(" Vowels occurence in string is "+count)}
// var string = prompt("Enter string:");
// occurrences(string);

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
// function meters(km){
//     var meter = km* 1000;
//     document.write("<br> Distance in meter is "+meter);
// }
// function feet(km){
//     var f = km*3281;
//     document.write("<br> Distance in feet is "+f);
// }
// function inches(km){
//     var inche = km*39370;
//     document.write("<br> Distance in inches is "+inche);
// }
// function centimeters(km){
//     var centi=km*100000;
//     document.write("<br> Distance in centimeter is "+centi);
// }
// var distance = +prompt("Enter the distance between two cities (in km.):");
// document.write("<br> Distance in Kilometer is "+distance);
// meters(distance);
// centimeters(distance);
// feet(distance);
// inches(distance);

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
// function OvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
//     var ExtraPay = 0;
  
//     if (hoursWorked > regularHours) {
//       var ExtraHours = hoursWorked - regularHours;
//       ExtraPay = ExtraHours * overtimeRate;
//     }
  
//     document.write("Overtime Pay is "+ExtraPay.toFixed(2));
//   }
  
//   var hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
  
//   OvertimePay(hoursWorked);

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
// function CurrencyNotes(amount) {
//     var Note100 = amount/ 100;
//     var Note50 = amount / 50;
//     var Note10 = amount / 10;
  
// document.write("<br>Note of 100: "+Note100);
// document.write("<br>Note of 50: "+Note50);
// document.write("<br>Note of 10: "+Note10);
// }
// var amount = +(prompt("Enter the amount to be withdrawn in hundreds:"));
//   CurrencyNotes(amount);
  
  

