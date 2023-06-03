// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var studentName=[];

// 2. Declare an empty array using JS object notation to store
// student names in future.\
// var studentName = new Array();

// 3. Declare and initialize a strings array
// var string = ['fruit'];

//4. Declare and initialize a numbers array.
// var numberArray=[5,6,7,8,9,0];

//5. Declare and initialize a boolean array.
// var boolean=[true];

//6. Declare and initialize a mixed array.
// var mixArray = ['mix',6,false];

//7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:
// var qualifications =['1)SSC', '2)HSC', '3)BCS','4)BS','5)BCOM', '6)MS', '7)M.Phil.', '8)PhD'];
// document.write("<br><h1>Qualification</h1>");
// document.write("<br>"+qualifications[0]+"<br>"+qualifications[1]+"<br>"+qualifications[2]+"<br>"+qualifications[3]+"<br>"+qualifications[4]+"<br>"+qualifications[5]+"<br>"+qualifications[6]+"<br>"+qualifications[7]);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// var studentName = ['misbi','john','minii'];
// var studentScore = [489,466,476];
// var totalMrks = 500;
// document.write("<br>Score Of "+studentName[0]+" is "+studentScore[0]+". Percentage is  "+(studentScore[0]/totalMrks)*100);
// document.write("<br>Score Of "+studentName[1]+" is "+studentScore[1]+". Percentage is  "+(studentScore[1]/totalMrks)*100);
// document.write("<br>Score Of "+studentName[2]+" is "+studentScore[2]+". Percentage is  "+(studentScore[2]/totalMrks)*100);

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser
// var colorNames = ['Yellow','Blue','White','Black'];
// document.write("<br>"+colorNames[0]+" "+colorNames[1]+" "+colorNames[2]+" "+colorNames[3])
// var user = prompt("What color you want to add at the beginning:");
// colorNames.unshift(user);
// document.write("<br>"+colorNames);
// var userEnd = prompt("What color you want to add at the End:");
// colorNames.push(userEnd);
// document.write("<br>"+colorNames);
// var user = prompt("What color you want to add at the beginning:");
// var userStrt = prompt("What color you want to add at the beginning:");
// colorNames.unshift(user,userStrt);
// document.write("<br>"+colorNames);
// colorNames.shift();
// document.write("<br>"+colorNames);
// colorNames.pop();
// document.write("<br>"+colorNames);
// var userIndex=+prompt("Enter the index:");
// var userColor=prompt("Enter the color u want to add");
// colorNames.splice(userIndex,0,userColor);//add Index,delete number,element you want to add
// document.write("<br>"+colorNames);
// var userIndex=+prompt("Enter the index:");
// var userNumber=prompt("Enter the number of colors You want to delete:");
// colorNames.splice(userIndex,userNumber);//add Index,delete number,element you want to add
// document.write("<br>"+colorNames);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// var studentScore=[89,93,49.5,65,76];
// document.write("<br>Students Scores: "+studentScore);
// document.write("<br>Sorted Students Scores: "+studentScore.sort());

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var cityNames=['Karachi','Multan','Islamabad','Lahore'];
// var selectedCities=cityNames.slice(0,1);
// document.write("<br>"+cityNames);
// document.write("<br>"+selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = ['This','is','my' ,'cat'];
// document.write("<br>Array:<br>"+arr);
// document.write("<br><br>String:<br>"+arr.join(" ")); 

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// var devices=new Array(" keyboard", " mouse", "  moniter", " printer");
// document.write("Devices:<br>"+devices);
// document.write("<br><br>Out <br>  "+devices.shift());
// document.write("<br>Out <br>  "+devices.shift());
// document.write("<br>Out <br>  "+devices.shift());
// document.write("<br>Out <br>  "+devices.shift());

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
// var devices=new Array(" keyboard", " mouse", "  moniter", " printer");
// document.write("Devices:<br>"+devices);
// document.write("<br><br>Out <br>  "+devices.pop());
// document.write("<br>Out <br>  "+devices.pop());
// document.write("<br>Out <br>  "+devices.pop());
// document.write("<br>Out <br>  "+devices.pop());

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// var phone_manufacturers=['Apple','Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'];
// document.write("<select><option>Select</option><option>"+phone_manufacturers[0]+"</option><option>"+phone_manufacturers[1]+"</option><option>"+phone_manufacturers[2]+"</option><option>"+phone_manufacturers[3]+"</option><option>"+phone_manufacturers[4]+"</option><option>"+phone_manufacturers[5]+"</option></select>");
