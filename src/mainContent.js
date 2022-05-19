// importing the arrays and the DOM element
import {projectArray,todoArray } from "./todoObjects";
const main = document.querySelector(".main")
console.log("main",main)

// function to create and append the main section with each todo
function updateMain () {
    todoArray.forEach(element => {
        const todo = document.createElement("div")
        todo.classList.toggle("todo")
        main.appendChild(todo)
    });
}


export default updateMain