let projectArray = []//push the project name of when a new todo is made in here
let todoArray = [] //push each todo object into this array to list them easier

// factory function for new Todo objects
function Todo (name, project, priority, dueDate) {
    this.name = name;
    this.project = project;
    this.priority = priority;
    this.dueDate = dueDate;
    this.pushTodo = function() {
        todoArray.push(this)
        console.log(todoArray)
    }
    this.pushProject = function() {
        projectArray.push(this.project)
        console.log(projectArray)
    }
}


export default Todo 
export {
    projectArray,
    todoArray
};