//1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser:
// var num=6;
// document.write("Result:<br>");
// document.write("<br>The Value of a is "+num);
// document.write("<br>.......................................<br>");
// document.write("<br>The Value of ++a is "+(++num));
// document.write("<br>Now the Value of a is "+num+'<br>');
// document.write("<br>The Value of a++ is "+(num++));
// document.write("<br>Now the Value of a is "+num+'<br>');
// document.write("<br>The Value of --a is "+(--num));
// document.write("<br>Now the Value of a is "+num+'<br>');
// document.write("<br>The Value of a-- is "+(num--));
// document.write("<br>Now the Value of a is "+num+'<br>');

//2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write('<br>'+ --a);
// document.write('<br>'+ (--a - --b));
// document.write('<br>'+ (--a - --b + ++b));
// document.write('<br>'+ (--a - --b + ++b + b--));

// 3. Write a program that takes input a name from user & greet the user.
// function greet(name){
//     document.write("hello "+name)
// }
// greet("nimo")

//5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// var num=+prompt("enter your number");
// if(num>0){
//     for(var i=1;i<11;i++)
//     {
//     document.write(num+" x "+i+" = "+num*i+'<br>')
//     }

// }
// else if (num==""){
//     for(var i=1;i<11;i++)
//     { num=5;
//     document.write(num+" x "+i+" = "+num*i+'<br>')
//     }
// }

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// var sub=prompt("First subject name");
// var sub2=prompt("Second subject name");
// var sub3=prompt("third subject name");
// var tM=100;
// var obt=+prompt("Enter obtained marks for first subject ");
// var obt2=+prompt("Enter obtained marks for second subject ");
// var obt3=+prompt("Enter obtained marks for third subject ");
// var per=(obt/tM)*100;
// var per2=(obt2/tM)*100;
// var per3=(obt3/tM)*100;
// var totalMrks=tM*3;
// var obtMrks=(obt+obt2+obt3);
// var perOf3sub=(obtMrks/totalMrks)*100;
// document.write("<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>"+sub+"</td><td>"+tM+"</td><td>"+obt+"</td><td>"+per+"</td></tr>");
// document.write("<tr><td>"+sub2+"</td><td>"+tM+"</td><td>"+obt2+"</td><td>"+per2+"</td></tr>");
// document.write("<tr><td>"+sub3+"</td><td>"+tM+"</td><td>"+obt3+"</td><td>"+per3+"</td></tr>");
// document.write("<tr><td></td><td>"+totalMrks+"</td><td>"+obtMrks+"</td><td>"+perOf3sub+"</td></tr>");