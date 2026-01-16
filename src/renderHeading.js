import contentForm from "./mainForm";
import removeProject from "./removeProject";
function renderHeader(project){
    const header = document.querySelector(".header");
    header.innerHTML = "";

    const divHeader = document.createElement("div");
    divHeader.classList.add("div-header");
    const heading = document.createElement("p");
    heading.textContent = project.name;
    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("btn","task-btn");
    addTaskButton.textContent = "+tasks";
    const removeProjectButton = document.createElement("button");
    removeProjectButton.setAttribute("type","button");
    removeProjectButton.textContent = "remove Project"
    removeProjectButton.classList.add("removeProjectButton");
    divHeader.appendChild(removeProjectButton);
    divHeader.appendChild(heading);
    divHeader.appendChild(addTaskButton);
    header.appendChild(divHeader);
    heading.classList.add("heading");

    addTaskButton.addEventListener("click",contentForm);
    removeProjectButton.addEventListener("click",()=>{
        removeProject(project);
    })

}

export default renderHeader;