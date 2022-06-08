let projectArray = ["gardening"]//push the project name of when a new todo is made in here
let todoArray = [] //push each todo object into this array to list them easier
let filtered = [] //initialising an empty array for filtering todos

// factory function for new Todo objects
function Todo (name, project, priority, dueDate) {
    this.name = name;
    this.project = project;
    this.priority = priority;
    this.dueDate = dueDate;
    this.pushTodo = function() {
        todoArray.push(this)
    }
}


export default Todo 
export {
    projectArray,
    todoArray,
    filtered
};