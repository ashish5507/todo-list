import { Project } from "./classLogic"
import renderTasks from "./renderTasks";
function removeTask(project,task){
    const index = project.todos.indexOf(task);
    if (index > -1) {
        project.todos.splice(index, 1);
    }

    renderTasks(project);
}

export default removeTask;