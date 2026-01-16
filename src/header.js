import logo from "./images/todo_icon.png";
import createSidebar from "./sidebar";
import contentForm from "./mainForm";
import removeProject from "./removeProject";
function createHeader(){
    const root = document.querySelector("#root");
    const header = document.createElement("header");
    header.classList.add("header");
    root.appendChild(header);

    const divHeader = document.createElement("div");
    divHeader.classList.add("div-header");
    const heading = document.createElement("p");
    heading.textContent = "Default Project";
    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("btn","task-btn");
    addTaskButton.textContent = "+tasks";

    addTaskButton.addEventListener("click", contentForm);
    divHeader.appendChild(heading);
    divHeader.appendChild(addTaskButton);
    header.appendChild(divHeader);
    heading.classList.add("heading");
}

export default createHeader;