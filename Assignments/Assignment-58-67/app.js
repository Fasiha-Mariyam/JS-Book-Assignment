// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// var content = document.getElementById("main-content");
// var child_elements = content.children;
// console.log(child_elements);
// var element = document.getElementsByClassName("render");
// for(var i=0;i<element.length;i++)
// {
//     document.write(element[i].innerHTML);
// }
// document.getElementById("first-name").value="my";
// document.getElementById("last-name").value="bro";
// document.getElementById('email').value="cde@outlook.com";

//                      <!-- question 2   -->
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

// var formContent = document.getElementById("form-content").nodeType;
// console.log(formContent);

// var lastName = document.getElementById("lastName");
// console.log(lastName.nodeType );
// console.log( lastName.firstChild);

// lastName.firstChild.nodeValue = "new lastName" ;

// var main_content = document.getElementById("main-content");
// console.log(main_content.firstChild + main_content.lastChild);

// var lastName = document.getElementById("lastName");
// console.log(lastName.nextSibling + lastName.previousSibling);

// var email = document.getElementById("email");
// console.log(email.parentNode + email.nodeType);

