import "./style.css"
import Todo, { filtered, projectArray, todoArray } from "./todoObjects"
import updateMain, { clearTodos, updateMainFiltered } from "./mainContent"
import { toggleForm, todoForm, newProjectForm } from "./form"
import { renderShowCompletedBtn } from "./showCompleted"
// import {todoArray, projectArray} from "./todoObjects"
// grabbing the root node element

window.addEventListener("DOMContentLoaded", () => {
    refreshProjectList()
    renderShowCompletedBtn()
})

const content = document.querySelector("#content")

// grid container
const container = document.createElement("div")
container.classList.toggle("container")

// header
const header = document.createElement("div")
header.classList.toggle("header")
header.textContent = "To Do"

// left sidebar
const leftSidebar = document.createElement("div")
leftSidebar.classList.toggle("leftSidebar")
const viewAll = document.createElement("button");
viewAll.classList.toggle("viewAll")
viewAll.textContent = "View All Todos"
const projects = document.createElement("div")
projects.classList.toggle("projects")
projects.textContent = "Projects"
const addNewProject = document.createElement("button")
addNewProject.classList.toggle("addNewProject")
addNewProject.textContent = "+ Add New Project"
addNewProject.addEventListener("click", () =>{
    newProjectForm()
    toggleForm()
})
projects.appendChild(addNewProject)

const projectInstructions = document.createElement("div")
projectInstructions.textContent = "List of current projects, click to view Todos"
projectInstructions.classList.toggle("projectInstructions")
projects.appendChild(projectInstructions)

// projects container
const projectListContainer = document.createElement("div")
projectListContainer.classList.toggle("projectListContainer")
projects.appendChild(projectListContainer)


// loop through projects to list them on the side panel
function refreshProjectList() {
    projectArray.forEach((element) => {
        const projectButtonContainer = document.createElement("div")
        projectListContainer.appendChild(projectButtonContainer)
        projectButtonContainer.classList.toggle("projectButtonContainer")
        const projectList = document.createElement("button")
        projectList.classList.toggle("projectButton")
        projectList.textContent = element
        projectListContainer.appendChild(projectList)
        // event listeners for each project button
        projectList.addEventListener("click", () => {
            clearTodos(); //this only works once! doesnt clear after the first click
            todoArray.forEach((element) => {
                if (element.project == projectList.textContent){
                    filtered.push(element)
                    console.log("filtered array before reset", filtered)
                }
                updateMainFiltered();
                
                filtered.length = 0
                console.log("filtered array after reset", filtered)
                
            })
        })
        
        
    })
}
// function to clear the list of projects before looping through to prevent repeating of elements
function clearProjectList () {
    while(projectListContainer.firstChild){
        projectListContainer.removeChild(projectListContainer.lastChild)
    }
}

// need to create a function that clears the filtered array



// main content
const main = document.createElement("div")
main.classList.toggle("main")
const addNewTodo = document.createElement("button")
addNewTodo.classList.toggle("addNewTodo")
addNewTodo.textContent = "+ Add New ToDo"
addNewTodo.addEventListener("click", () => {
    toggleForm()
    todoForm()
})
const todoContainer = document.createElement("div")
todoContainer.classList.toggle("todoContainer")
main.appendChild(todoContainer)
main.insertBefore(addNewTodo, main.firstChild)

// footer
const footer = document.createElement("div")
footer.classList.toggle("footer")
footer.textContent = "Created by Jordan Ulmer, 2022"
// appending to the parent elements
content.appendChild(container)
container.append(header, leftSidebar, main, footer)
leftSidebar.append(viewAll, projects)

// testing a random Todo
const gardening = new Todo("Gardening","Gardening","Urgent","monday")
gardening.pushTodo()

const work = new Todo("Work", "Work", "Urgent", "Today")
work.pushTodo()


export default main
updateMain()

export {
    refreshProjectList,
    clearProjectList
}




