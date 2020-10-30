// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// EventListener
document.addEventListener('DOMContentLoaded', getTodos);

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Function

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    /// 후반부: add todo to localstorage
    saveLocalTodos(todoInput.value);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; // innerHTML을 통해 속성을 넣을 수 있다 
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; // innerHTML을 통해 속성을 넣을 수 있다 
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    // Append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value ="";
}

function deleteCheck(e){
    const item = e.target;

    // Delete TODO
    if(item.classList[0] === "trash-btn" ){
        const todo = item.parentElement;

        //Animation

        todo.classList.add("fall");

        /// 후반부 로컬 스토리지 지우기
        removeLocalTodos(todo);

        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.toggle("completed");
       
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = "flex"
                break;
            case 'completed':
                if (todo.classList.contains("completed")) { //특정 문자열을 검사해서 
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    }); 
}

//// 후반부
function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'; // innerHTML을 통해 속성을 넣을 수 있다 
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'; // innerHTML을 통해 속성을 넣을 수 있다 
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    
    // Append to list
    todoList.appendChild(todoDiv);
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
}