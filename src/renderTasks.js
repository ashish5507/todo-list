import { Project } from "./classLogic";
import removeTask from "./removeTask";
function renderTasks(project) {
    const mainContent = document.querySelector(".content"); 
    mainContent.innerHTML = ""; 

    project.todos.forEach((task, index) => {
        const dateObj = new Date(task.dueDate);
        const formattedDate = dateObj.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card", task.priority); 

        //add title
        const taskTitle = document.createElement("p");
        taskTitle.textContent = task.title;
        taskTitle.classList.add("taskTitle");

        //add description
        const taskDesc = document.createElement("p");
        taskDesc.innerText = task.description;
        taskDesc.classList.add("taskDesc");

        //due date
        const dueDate = document.createElement("p");
        dueDate.textContent = `Due Date: ${task.dueDate}`;
        dueDate.classList.add("taskDueDate");
        dueDate.textContent = `Due 📅 ${formattedDate}`;

        //priority
        const priorityIcon = document.createElement("span");
        priorityIcon.classList.add("priority-indicator");
        const icons = { lowp: "🟢", modp: "🟡", highp: "🔴" };
        priorityIcon.textContent = icons[task.priority] || "⚪";

        //delete button
        const rm = document.createElement("button");
        rm.setAttribute("type","button");
        rm.textContent = "remove task";
        rm.classList.add("removeTaskButton");

        const contentDiv = document.createElement("div");
        const removeDiv = document.createElement("div");
        contentDiv.classList.add("taskDescDiv");
        removeDiv.classList.add("removeTaskDiv");

        contentDiv.appendChild(taskTitle);
        contentDiv.appendChild(taskDesc);
        contentDiv.appendChild(dueDate);
        contentDiv.appendChild(priorityIcon);
        removeDiv.appendChild(rm);
        
        taskCard.appendChild(contentDiv);
        taskCard.appendChild(removeDiv);
        mainContent.appendChild(taskCard);

        rm.addEventListener("click",()=>{
            removeTask(project,task);
        })
    });
}

export default renderTasks;