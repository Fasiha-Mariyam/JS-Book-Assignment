//1. Write a program that displays current date and time 
// document.write(Date());

// 2. Write a program that alerts the current month in words.
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var monthNumber =new Date().getMonth();
// alert("Current Month: "+monthNames[monthNumber]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.
// var dayName = ['sun','mon','tues','wed','thurs','fri','sat'];
// var dayNumber =new Date().getDay();
// alert("Today is "+dayName[dayNumber]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today
// var dayName = ['sun','mon','tues','wed','thurs','fri','sat'];
// var dayNumber =new Date().getDay();
// var day=dayName[dayNumber];
// if(day==='sun'||day==='sat')
// {
//     document.write("Its Fun Day");
// }
// else if(day==='mon')
// {
//     document.write("First Day Of working ");
// }
// else{
//     document.write("Its not Fun Day");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var date=new Date().getDate();
// console.log(date);
// if(date<=15)
// {
//     document.write("First fifteen days of the month");
// }
// else if(date>=16)
// {
//     document.write("Last days of the month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// var date = new Date();
// var milliseconds = new Date().getTime();
// var minutes =Math.floor( milliseconds/(1000*60));
// document.write("<br>Current Date: "+date);
// document.write("<br>Elapsed milliseconds since January 1,1970: "+milliseconds);
// document.write("<br>Elapsed minutes since January 1,1970: "+minutes);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var hour=new Date().getHours();
// if(hour>=00 && hour<=12)
// {
// alert("Its AM")
// }
// else if (hour>=13 && hour <=23)
// { 
//     alert("Its PM")
// }
// document.write(hour);

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var laterDate = new Date(2020,11,31);
// document.write("LaterDate : "+laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var Ramadan =new Date(2023,2,23);
// var date = new Date();
// var daysLeft = Math.floor((date.getTime() - Ramadan.getTime())/(1000*60*60*24));
// document.write(daysLeft+" days have passed since 1st Ramadan , 2023");
// console.log(daysLeft);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var date = new Date();
// var beginning = new Date(2023,0,1);
// console.log(beginning);
// var seconds = Math.floor((date.getTime() - beginning.getTime())/(1000));
// document.write("On reference date " +date+ " <br>") ;
// document.write(seconds +" seconds had passed since the beginning of 2023"); 

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var date = new Date();
// document.write("Current date: " +date+" <br><br>");
// var hour = new Date().getHours();
// var setHour = date.setHours(hour - 1);
// document.write("1 hour ago, it was " + date);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// var date = new Date();
// document.write("Current date: " +date+" <br><br>");
// var year = new Date().getFullYear();
// var setYear = date.setYear(year - 100);
// document.write("100 years ago, it was " + date);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// var age = prompt("Enter your age:"); 
// document.write("your age is "+age+"<br>");
// var year = new Date().getFullYear() ;
// var birthYear = year - age ;
// document.write("Your birth year is: " + birthYear); 

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date) Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//  var Name = prompt("Enter your name:");
//  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  var monthNumber =new Date().getMonth();
//  var month = monthNames[monthNumber];
// var Units = +prompt("Enter the number of units:"); 
// var priceUnit = +prompt("Enter the price of units:");
// var net = Units * priceUnit; 
// var latecharge = 250;
// var gross = net + latecharge;
// document.write("<h1>K-Electric Bill</h1><br>");
// document.write("Customer Name:  <b>" + Name + " </b><br>");
// document.write("Month:  <b>" + month + " </b><br>");
// document.write("Number of units: <b>" + Units + "</b><br>");
// document.write("Charges per unit:  <b>" + priceUnit + " </b><br>");
// document.write("<br><br>Net Amount Payable <u>(within Due Date)</u>:  <b>"+net.toFixed(2)+"</b>");
// document.write("<br>Late Payment Surcharge: <b>"+latecharge + "</b>");
// document.write("<br>Gross Amount Payable <u>(after Due Date)</u>:  <b>"+gross.toFixed(2) + "</b>");