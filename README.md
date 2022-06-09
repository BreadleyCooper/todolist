# ToDo App

A todo app to create a list of ToDos and associated projects

## Description


This project is built using vanilla JS, CSS and HTML. The entire project is rendered using DOM maniuplation, the only HTML is the boilerplate.
This project is intended to demonstrate my knowledge of object creation and OOP. It also demonstrates my knowledge of webpack and ES6 modules.

### Challenges and Problems encountered

Form validaion was an issue as I was running the ToggleForm() function to bring up and remove an overlay form for entering the todo and project details. To implement form validation I had to include a validation check using an if statement before running the functions to close the form on submission. This was tricky to solve as I assumed it was an issue with the way I was adding the <input> attributes using JS, but it was an error in function execution order.

Filtering ToDos was challenging. I ran into issues with the array.filter method that I am yet to solve. *This is WIP and I am currently still working on the filtering logic

### What could be improved

I would like to improve the rendering logic for the ToDos. Currently, when you click on a filter (by project, dueDate etc), the script to render the filtered ToDos is a copy of the script to render unfiltered todos but instead it is looping through the filtered[] array. This means my project is not "dry". This could be improved by creating a renderToDos function that gets called on the unfiltered, or filtered array. I did try to implement this but couldn't get it working so far. I'm not sure why it didn't work, but I'm hoping to have that working in the final version.

In the final version, I intend to implement more modules to tidy up the code and make it more readable.

## Getting Started

### Dependencies

* For previewing the live version - none
* To download and run the code - webpack




## Authors


Jordan Ulmer  
Twitter [@JordanDoesCode](https://twitter.com/JordanDoesCode?s=09)

## Version History

* 0.1
    * Initial Release

## License

None

## Acknowledgments

This was coded fully from scratch, my learning is guided by [The Odin Project.](https://github.com/TheOdinProject) 
