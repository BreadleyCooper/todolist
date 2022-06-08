// importing the arrays and the DOM element
import todoLoop from "./todoLoop";
import {filtered, projectArray,todoArray } from "./todoObjects";
import todoForm from "./form";

// function to create and append the main section with each todo
function updateMain () {
    todoArray.forEach(element => {
        const main = document.querySelector(".main")
        const todoContainer = document.querySelector(".todoContainer")
        const todo = document.createElement("div")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todoCompleteBtn.classList.toggle("todoCompletBtn")
        todoCompleteBtn.textContent = "✔️"
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        main.appendChild(todoContainer)
        todoContainer.appendChild(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            todoArray.splice(todoArray.indexOf(element), 1);
            console.log(todoArray)
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todo.append()
        }
    });
}

function updateMainFiltered () {
    filtered.forEach(element => {
        const main = document.querySelector(".main")
        const todoContainer = document.createElement("div")
        const todo = document.createElement("div")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todoContainer.classList.toggle("todoContainer")
        todo.classList.toggle("todo")
        todoCompleteBtn.classList.toggle("todoCompletBtn")
        todoCompleteBtn.textContent = "✔️"
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        main.appendChild(todoContainer)
        todoContainer.appendChild(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            todoArray.splice(todoArray.indexOf(element), 1);
            console.log(todoArray)
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todo.append()
        }
    });
}

// function to clear the todo list, used when filtering by projects
function clearTodos () {
    const todoContainer = document.getElementsByClassName("todoContainer")
    while (todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.lastChild)
    }
    console.log(todoContainer, "clearTodos is firing")
}


export default updateMain
export {
    updateMainFiltered,
    clearTodos
}