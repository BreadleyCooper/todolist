// // DOM manipulation for input new todo form
import Todo from "./todoObjects"
import { projectArray } from "./todoObjects"

function todoForm (){
    // container elements for form
    const form = document.createElement("form")
    form.classList.toggle("form")
    const overlayForm = document.createElement("div")
    overlayForm.classList.toggle("overlayForm")
    form.appendChild(overlayForm)
    // close form 'x' button
    const closeForm = document.createElement("div")
    closeForm.classList.toggle("closeForm")
    closeForm.addEventListener("click", toggleForm())
    closeForm.innerHTML = "&times"
    overlayForm.appendChild(closeForm)
    // form header
    const formHeader = document.createElement("h1")
    formHeader.textContent = "Add a new ToDo"
    overlayForm.appendChild(formHeader);

    // form element 'Name' container 
    const formElementName = document.createElement("div")
    formElementName.classList.toggle("formElement")
    overlayForm.appendChild(formElementName)
    // 'Name' input fields - textr
    const formNameLabel = document.createElement("label")
    formNameLabel.setAttribute("for", "Name")
    formNameLabel.textContent = "Name of ToDo";
    const formNameInput = document.createElement("input")
    formNameInput.setAttribute("type", "text")
    formNameInput.setAttribute("id", "formName")
    formElementName.append(formNameLabel, formNameInput);
    
    // form 'Project' container
    const formElementProject = document.createElement("div")
    formElementProject.classList.toggle("formElement")
    overlayForm.appendChild(formElementProject)
    // 'Project' input fields - Dropdown
    const formProjectLabel = document.createElement("label")
    formProjectLabel.setAttribute("for", "projectInput")
    formProjectLabel.textContent = "Select project:";
    const formProjectInput = document.createElement("input")
    formProjectInput.setAttribute("list", "projects")
    formProjectInput.setAttribute("id", "projectInput")
    const formProjectList = document.createElement("datalist")
    formProjectList.setAttribute("id", "projects")
    formElementProject.append(formProjectLabel, formProjectInput, formProjectList);
    // loop through project array to grab the projects for the dropdown
    projectArray.forEach(function(element){
        let option = document.createElement("option")
        option.value = element;
        formProjectList.appendChild(option)
    })

    // form 'priority' container
    const formElementPriority = document.createElement("div")
    formElementPriority.classList.toggle("formElement")
    overlayForm.appendChild(formElementPriority)
    // 'Priority' input fields - Dropdown
    const formPriorityLabel = document.createElement("label")
    formPriorityLabel.setAttribute("for", "priorityInput")
    formPriorityLabel.textContent = "Select priority:";
    const formPriorityInput = document.createElement("input")
    formPriorityInput.setAttribute("list", "priority")
    formPriorityInput.setAttribute("id", "priorityInput")
    const formPriorityList = document.createElement("datalist")
    formPriorityList.setAttribute("id", "priority")
    formElementProject.append(formPriorityLabel, formPriorityInput, formPriorityList);
    // priority dropdown options
    const priorityUrgent = document.createElement("option")
    priorityUrgent.setAttribute("value", "Urgent")
    const priorityRoutine = document.createElement("option")
    priorityRoutine.setAttribute("value", "Routine")
    const priorityBackBurner = document.createElement("option")
    priorityBackBurner.setAttribute("value", "Backburner")
    formPriorityList.append(priorityUrgent, priorityRoutine, priorityBackBurner)

    // form 'date due' container
    const formElementDue = document.createElement("div")
    formElementDue.classList.toggle("formElement")
    overlayForm.appendChild(formElementDue)
    // 'date due' input fields - date picker
    const formDueLabel = document.createElement("label")
    formDueLabel.setAttribute("for", "dueInput")
    formDueLabel.textContent = "Due by:"
    const formDueInput = document.createElement("input")
    formDueInput.setAttribute("type", "date")
    formDueInput.setAttribute("id", "dueInput")
    formDueInput.setAttribute("name", "dueDate")
    formElementDue.append(formDueLabel, formDueInput)

    // form submit button container
    const formElementSubmit = document.createElement("div")
    formElementSubmit.classList.toggle("formElement")
    overlayForm.appendChild(formElementSubmit)
    // submit button 
    const formSubmitButton = document.createElement("button")
    formSubmitButton.setAttribute("onclick", `${toggleForm()}`)
    formSubmitButton.setAttribute("type", "button")
    formSubmitButton.setAttribute("id", "submit")
    formElementSubmit.appendChild(formSubmitButton)
    // append the entire form container to the body when called
    document.getElementsByTagName("body")[0].appendChild(form)
    console.log("todoForm function is firing")
    // NEED TO CHANGE PROJECT AND PRIORITY INPUTS TO DROPDOWNS, AND CODE THE SUBMIT BUTTON
}

// function to toggle class that brings up a new todo form
function toggleForm(){
    document.body.classList.toggle("activeForm")
}
// function to call when create a new Todo form button clicked, after completing the form
function addTodo(name, project, priority, dueDate){
    name = document.querySelector("#newName").value;
    project = document.querySelector("#newProject").value;
    priority = document.querySelector("newPriority").value;
    dueDate = document.querySelector("#newDueDate").value;
    let newToto = new Todo(name,project,priority,dueDate)
}

export {
    todoForm,
    toggleForm
}
