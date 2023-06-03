// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName = prompt("Enter Your First Name?");
// var lastName = prompt("Enter Your Last Name?");
// alert("hello "+firstName+" "+lastName+" :)");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// var user= prompt("Enter your favourit mobile phone model");
// document.write("The favourite phone is: "+user+"<br>");
// document.write("Length of string :  "+user.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// var word="Pakistani";
// document.write("the word is  :"+word);
// document.write("<br>index of n :"+word.indexOf("n"));

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var word="Hello World";
// document.write("the word is  :"+word);
// document.write("<br><br>last index of 'l' :"+word.lastIndexOf('l'));

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser
// var word="Pakistani";
// document.write("the word is  :"+word+"<br>");
// document.write("<br><br>Value of 3rd index is :"+word.charAt(3));

// 6. Repeat Q1 using string concat() method
// var firstName = prompt("Enter Your First Name?");
// var lastName = prompt("Enter Your Last Name?");
// alert("hello "+firstName.concat(" ",lastName)+" :)");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var word="Hyderabad";
// var Newword=word.replace("Hyder","Islam");
// document.write("City:"+word);
// document.write("<br>After Replacement City:"+Newword);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// var message ='Ali and Sami are best friends.They play cricket and football together';
// var replacement=message.replaceAll("and","&");
// document.write(replacement);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var string="475";
// var number=parseInt(string);
// document.write("value 475 <br>Type :"+typeof(string));
// document.write("<br>value 475 <br>Type :"+typeof(number));

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var userInput=prompt("enter string:");
// document.write(userInput+"<br>")
// document.write(userInput.toUpperCase());

// 11. Write a program that takes user input. Convert and
// show the input in title case.
// var userInput=prompt("enter string:");
// document.write("User Input = "+userInput+"<br>");
// var user=userInput.slice(0,1).toUpperCase();
// var userInput= userInput.slice(1);
// document.write("Title Case = "+user+userInput);

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var num = 35.36 ;
// var string=num.toString();
// var string = string.replace(".","");
// document.write("Number : "+num);
// document.write("<br>String : "+string);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// var userName=prompt("Enter Your Name:");
// if (userName.includes("@")||userName.includes(",")||userName.includes(".")||userName.includes("!"))
// {
//     userName=prompt("Enter a valid Username");
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var searching=prompt("Welcome To Royal Bakery\nWhat do you want to order:");
// var index=-1;
// if(A.includes(searching))
// {document.write(searching+" is <b>available</b> at index "+A.indexOf(searching)+" in our Bakery");
//      index=A.indexOf(searching);}

// if(index==-1)
// {
//     document.write(searching+" is <b>not available</b> in our Bakery");
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// var password=prompt("Enter Your Password:\na. It should contain alphabets and numbers\nb. It should not start with a number\nc. It must at least 6 characters long");
// if(password.length<6 )
//    {
//     document.write("<br>Entered Password is "+password);
//     document.write("<br>Length is too short");
//     document.write("<br>Please Enter a valid password");
//    }
// else if(/^[0-9]/.test(password))
// {     
//     document.write("<br>Entered Password is "+password);
//     document.write("<br>Password can not start with a number");
//     document.write("<br>Please Enter a valid password");
// }
// else if(!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password))
// {     
//     document.write("<br>Entered Password is "+password);
//     document.write("<br>Password must contain a number & alphabets");
//     document.write("<br>Please Enter a valid password");
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university = "Dawood University Of Engineering & Technology";
// var array=university.split("");
// console.log(array);
// for(var i=0; i<array.length; i++)
// {
//     document.write(array[i] + "<br>");
// }

// 17. Write a program to display the last character of a user input.
// var userInput=prompt("Enter your string");
// document.write("user Input :"+userInput);
// document.write("<br>Last character of user input :"+userInput.charAt((userInput.length)-1));

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var string="The quick brown fox jumps over the lazy dog";
// document.write("Text: "+string);
// var count = 1;
// var word = string.split(" ");
// for(var i=0; i<word.length; i++)
// {
//     if(word[i] == "the"){
//         count++;
//     }
// }
// document.write("<br>There are "+count+" occurence of the Word 'the'");