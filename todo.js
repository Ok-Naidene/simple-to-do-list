//element selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', AddTask);
todoList.addEventListener('click', CompleteDelete);

//functions
function AddTask(event)
{
//prevent form from refreshing page
event.preventDefault();
//display message if task not present 
if(todoInput.value == "")
{
alert ("Please enter a To-do item:");
}
else
{
//create to-do <div>
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

//create to-do list item <li>
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//create mark completed or tick icon
const completedButton = document.createElement('button');
completedButton.innerHTML = "<i class='fas fa-check'></i>";
completedButton.classList.add('complete-btn');
todoDiv.appendChild(completedButton);
//create bin icon or delete button
const deleteButton = document.createElement('button');
deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
deleteButton.classList.add('trash-btn');
todoDiv.appendChild(deleteButton);
//append all of the above to our <ul> ELEMENT 
todoList.appendChild(todoDiv);
//clear input value 
todoInput.value="";

}
}//end function
function CompleteDelete(e)
{
//save click when user clicks on trash icon 
const item = e.target;

//delete the item when icon is clicked 
if(item.classList[0] === 'trash-btn')
{
    const todo = item.parentElement;
    todo.remove(); 
}
// when tick icon is click mark item as completed 
if(item.classList[0] === 'complete-btn')
{
    const todo = item.parentElement;
    todo.classList.toggle('completed');
}
}