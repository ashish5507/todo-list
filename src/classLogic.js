export class Todo{
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
};

export class Project{
    constructor(name){
        this.name = name;
        this.todos = [];
    }
    
    addTodo(todo){
        this.todos.push(todo);
    }
};

export const projectLists = [];
const defaultProject = new Project("Default Project");
projectLists.push(defaultProject);
export let activeProject = projectLists[0];
export function setActiveProject(project){
    activeProject = project;
}