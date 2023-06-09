// 1. Create a signup form and display form data in your web
// page on submission.
// function myData(event) {
//     event.preventDefault(); 
//     var name= document.getElementById("name").value;
//     var email=document.getElementById("email").value;
//     var password =document.getElementById("password").value;

//     var gender =document.getElementById("Female","Male").value;
//     var date =document.getElementById("Date").value;
//     var result ="Name= "+name+"\nEmail: " + email +"\nPassword: "+ password +"\n"+date +"\n"+ gender;
//     document.getElementById('Display').value = result;
//   }

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 
// function more(){
//     document.getElementById("moreContent").innerHTML="Content is the information contained within communication media.This includes internet, cinema, television, radio, audio CDs,books, magazines, physical art, and live event content.  It’s directed at an end-user or audience in the sectors of publishing, art, and communication.";
// }

// 3.Create a form which takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
function addStudent(event){
    event.preventDefault();
 var studentName = document.getElementById('name').value;
 console.log(studentName);
 var studentAge = document.getElementById('age').value;
 var row = document.createElement('tr');
 var nameData = document.createElement('td');
 var ageData = document.createElement('td');
 var actionData = document.createElement('td');
nameData.textContent = studentName;
ageData.textContent = studentAge;
 
var deleteButton = document.createElement('button');
deleteButton.textContent = 'delete';
deleteButton.addEventListener('click',removeRow);

var editButton = document.createElement('button');
editButton.textContent = 'edit';
editButton.addEventListener('click',editRow)

actionData.appendChild(editButton);
actionData.appendChild(deleteButton);

row.appendChild(nameData);
row.appendChild(ageData);
row.appendChild(actionData);

var studentTable = document.getElementById("studentTable");
studentTable.appendChild(row);
}
function removeRow(event){
    const row = event.target.parentNode.parentNode;
    // console.log(row.parentNode.removeChild(row));
            row.parentNode.removeChild(row);
}
function cancelEdit(){

    editForm.classList.add("hidden");

}
function editRow(event){
    var row = event.target.parentNode.parentNode;
    console.log(row);
    
    var nameCell = row.getElementsByTagName('td')[0];
    var ageCell = row.getElementsByTagName('td')[1];

    var editName = document.getElementById('editname');
    var editAge = document.getElementById('editage');

    editName.value = nameCell.textContent;
    editAge.value = ageCell.textContent;

    editForm.classList.remove('hidden');
    editForm.dataset.rowIndex = row.rowIndex;
//It sets the data in the attribute and reads this data using JavaScript events.
}
function saveEdit(event){
    event.preventDefault();
    var index = editForm.dataset.rowIndex;
    console.log(index);
    var row = studentTable.rows[index];
    console.log(row);
    var nameCell = row.getElementsByTagName('td')[0];
    var ageCell = row.getElementsByTagName('td')[1];

    var editName = document.getElementById('editname').value;
    var editAge = document.getElementById('editage').value;

    nameCell.textContent = editName;
    ageCell.textContent =   editAge ;
    editForm.classList.add('hidden');
    //return CSS classes
}






