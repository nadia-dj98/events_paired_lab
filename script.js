const enter = document.querySelector("#enter");
//method for creating a new <li> element
const toDoListForm = document.querySelector("#to-do-list-form"); //grabbing the input

//form
const addToDoItem = (event) => {
    // event.preventDefault();
    // const toDoItem = document.createElement("li");
    // // toDoItem.textContent = event.target.newtodo.value; 
    // const inputValue = document.getElementById("#newtodo").value;
    // const toDoList = document.querySelector("#list");
    // toDoList.appendChild(toDoItem);
    console.log(event.target);
    event.preventDefault();
    const toDoItem = document.createElement("li");
    toDoItem.textContent = event.target.newItem.value;
    const toDoList= document.querySelector("#list");
    toDoList.appendChild(toDoItem);
} 

toDoListForm.addEventListener('submit', addToDoItem);
