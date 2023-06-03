// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var multidimensional=[['mimi','timi','simi'],[9,5,8]];

// 2. Declare and initialize a multidimensional array representing the following matrix:
// var multidimensional=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write("<center><h1>"+multidimensional[0].join(" ")+"<br>")
// document.write(multidimensional[1].join(" ")+"<br>")
// document.write(multidimensional[2].join(" ")+"<br>"+"</h1></center>")

// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=0;i<11;i++)
// {
//     document.write("<h2><b>"+i+"<br></h2>");
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var number = +prompt("Enter the table number: ");
// var length = +prompt("Enter the table length: ");
// for (var i=1; i<=length; i++) 
// {
//     document.write(number + " x " + i + " = " + (number*i)+"<br>");
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// var fruits=['apple', 'banana', 'mango', 'orange','strawberry'];
// console.log(fruits.length);
// for (i=0;i<fruits.length;i++)
// {
//     document.write("<br>"+fruits[i]);

// }
// document.write("<br>")
// for (i=0;i<fruits.length;i++)
// {
//     document.write("<br>Element at index  "+i+" is "+fruits[i]);

// }

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// var Counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var Reverse_counting=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var Even=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// var Odd= [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// var Series= ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];
// document.write("<h2>Counting</h2>")
// for (i=0;i<Counting.length;i++)
// {
//     document.write(Counting[i]+" , ");
// }
// document.write("<h2>Reverse Counting</h2>")
// for (i=0;i<Reverse_counting.length;i++)
// {
//     document.write(Reverse_counting[i]+" , ");
// }
// document.write("<h2>Even</h2>")
// for (i=0;i<Even.length;i++)
// {
//     document.write(Even[i]+" , ");
// }
// document.write("<h2>Odd</h2>")
// for (i=0;i<Odd.length;i++)
// {
//     document.write(Odd[i]+" , ");
// }
// document.write("<h2>Series</h2>")
// for (i=0;i<Series.length;i++)
// {
//     document.write(Series[i]+" , ");
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example: 
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var searching=prompt("Welcome To Royal Bakery\nWhat do you want to order:");
// var index=-1;
// for(i=0;i<A.length;i++)
// {
// if(searching==A[i])
// {document.write(searching+" is <b>available</b> at index "+i+" in our Bakery");
//      index=i;}
// }
// if(index==-1)
// {
//     document.write(searching+" is <b>not available</b> in our Bakery");
// }

// 8. Write a program to identify the largest number in the
// given array. A = [24, 53, 78, 91, 12]
// var A = [24, 53, 78, 91, 12];
// document.write("<h2>Array Items: "+ A +"</h2>")
// var largest = A[0];
// for (i=1;i<A.length;i++) {
//     if (largest<A[i]) 
//     {
//          largest=A[i];
//     }
// }
// document.write("The largest number in the array is " + largest);

// 9. Write a program to identify the smallest number in the
// given array. A = [24, 53, 78, 91, 12]
// var A = [24, 53, 78, 91, 12];
// document.write("<h2>Array Items: "+ A +"</h2>")
// var smallest = A[0];
// for (i=1;i<A.length;i++) {
//     if (smallest>A[i]) 
//     {
//          smallest=A[i];
//     }
// }
// document.write("The smallest number in the array is " + smallest);

// 10. Write a program to print multiples of 5 ranging 1 to 100.
// var number=5;
// for(i=1;i<101;i++)
// {    if(i%number==0)
//     document.write(i+" , ");
// }
