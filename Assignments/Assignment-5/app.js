// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// var no = 6;
// var no2 = 6;
// var result = no+no2;
// document.write("<br>Sum Of "+no+" & "+no2+" is "+result);

//2. Repeat task1 for subtraction, multiplication, division & modulus.
// var no = 6;
// var no2 = 6;
// var result = no+no2;
// var result2 = no-no2;
// var result3 = no*no2;
// var result4 = no/no2;
// document.write("<br>Sum Of "+no+" & "+no2+" is "+result);
// document.write("<br>subtraction Of "+no+" & "+no2+" is "+result2);
// document.write("<br>Multiplication Of "+no+" & "+no2+" is "+result3);
// document.write("<br>division Of "+no+" & "+no2+" is "+result4);

//3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
// var variable;
// document.write("<br><br>Value after variable declaration is "+variable);
// variable=6;
// document.write("<br>Initial Value is: "+variable);
// variable++;
// document.write("<br>Value after increment is: "+variable);
// variable+=7;
// document.write("<br>Value after addition is: "+variable);
// variable--;
// document.write("<br>Value after decrement is: "+variable);
// variable%=3;
// document.write("<br> Output : The remainder is : "+variable);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:
// var ticketPrice=600;
// var result = 4*ticketPrice;
// document.write("<br>Total cost to buy 4 tickets to a movie is "+result+" PKR");

//5. Write a script to display multiplication table of any number in your browser. E.g
// document.write("<br>6 x 1 = "+6*1);
// document.write("<br>6 x 2 = "+6*2);
// document.write("<br>6 x 3 = "+6*3);
// document.write("<br>6 x 4 = "+6*4);
// document.write("<br>6 x 5 = "+6*5);
// document.write("<br>6 x 6 = "+6*6);
// document.write("<br>6 x 7 = "+6*7);
// document.write("<br>6 x 8 = "+6*8);
// document.write("<br>6 x 9 = "+6*9);
// document.write("<br>6 x 10 = "+6*10);

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// var cTemp=25;
// var CtoF=(cTemp*9/5)+32;
// var fTemp=77;
// var FtoC=(fTemp-32)*5/9;
// document.write("<br>"+cTemp+"'C  is  "+CtoF+"'F");
// document.write("<br>"+fTemp+"'F  is  "+FtoC+"'C");

//7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// var price0=90;
// var price2=400;
// var qp0=3;
// var qp2=2;
// var shipchr=30;
// var totl=(price0*qp0)+(price2*qp2)+shipchr;
// document.write("<br><h1>Shopping Cart</h1>");
// document.write("<br>Price of item 1 is "+price0);
// document.write("<br>Ordered quantity of item 1 is "+qp0);
// document.write("<br>Price of item 2 is "+price2);
// document.write("<br>Ordered quantity of item 2 is "+qp2);
// document.write("<br>Shipping charges  "+shipchr);
// document.write("<br><br><br> The total cost of your order is "+totl);

//8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in your browser
// var tM=1000;
// var sM=980;
// var Per=(sM/tM)*100;
// document.write("<br> Total Marks = "+tM);
// document.write("<br> Student Marks = "+sM);
// document.write("<br> Percentage = "+Per);

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
// var us=10;
// var sr=25;
// var uTop=us*104.80;
// var sTop=sr*28;
// var result=uTop+sTop;
// document.write("<br><h1>Currency In PKR</h1>");
// document.write("Total Currency of PKR is " +result);

//10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// var num = 6;
// var result = ((num+5)*10)/2;
// document.write("<br>"+result);

//11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.
// var currentYear = "2023";
// var birthYear = "2002";
// var age = currentYear - birthYear ;
// document.write('<br>You are either ' + age + ' or ' + (age - 1) + ' ' + 'years old');

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// var radius=6;
// var circum=2*radius*3.142;
// var area=2*3.142*radius*radius;
// document.write('<br> Circumference of a circle = '+circum);
// document.write('<br> Area of a circle = '+area);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need
// // NNNN to last you until the ripe old age of NN”.
// var favorite_snack='chips';
// var age=20;
// var maximum_age=60;
// var  per_day=5;
// var result=(maximum_age-age)*per_day;
// document.write('<br>You will need  '+result+'  '+favorite_snack +' to last you until the ripe old age of  '+maximum_age);