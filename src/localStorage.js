import { refreshProjectList } from "./index"
import updateMain from "./mainContent"
import { projectArray, todoArray } from "./todoObjects"

let todoJSONHolder = ""
let projectJSONHolder = ""





function retrieveTodos () {
    todoJSONHolder = localStorage.getItem("storedTodos")
    if (todoJSONHolder !== null){
        todoArray = JSON.parse(todoJSONHolder)
        console.log("retrieve todos is firing")
        if (todoArray !== null) {
            updateMain()
        }
    }
}
function retrieveProjects () {
    projectJSONHolder = localStorage.getItem("storedProjects")
    if (projectJSONHolder !== null){
        projectArray = JSON.parse(projectJSONHolder)
        if (projectArray !== null) {
            refreshProjectList()
        }
    }
}



function storeTodos (){
    if (todoArray !== null){
        const todoJSON = JSON.stringify(todoArray);
        localStorage.setItem("storedTodos", todoJSON)
    } 
}
function storeProjects () {
    if (projectArray !== null){
        const projectJSON = JSON.stringify(projectArray);
        localStorage.setItem("storedProjects", projectJSON)
    }
}



export {
    storeTodos,
    storeProjects,
    retrieveTodos,
    retrieveProjects,
}