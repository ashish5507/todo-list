import logo from "./images/todo_icon.png";
import renderProjects from "./renderProjects";
function createSidebar(){
    const root = document.querySelector("#root");
    const section = document.createElement("section");
    section.classList.add("sidebar");

    root.appendChild(section);

    //Sidebar Section
    const img = document.createElement("img");
    const icon_div = document.createElement("div");
    img.src = logo;
    img.style.height = "35px";
    img.style.width = "35px";
    icon_div.appendChild(img);
    const todo_text = document.createElement("p");
    todo_text.textContent = "Do It!!";
    icon_div.appendChild(todo_text);
    section.appendChild(icon_div);
    icon_div.classList.add("todo-icon");

    const projectDiv = document.createElement("div");
    const projectText = document.createElement("p");
    projectText.textContent = "Projects";
    const addProjectButton = document.createElement("button");
    addProjectButton.classList.add("btn","add-btn");
    addProjectButton.textContent = "Add";
    addProjectButton.style.type = "button"
    projectDiv.appendChild(projectText);
    projectDiv.appendChild(addProjectButton);
    section.appendChild(projectDiv);
    projectDiv.classList.add("project-div");

    const projectsLayout = document.createElement("div");
    section.appendChild(projectsLayout);
    projectsLayout.classList.add("projects");

    renderProjects();
}

export default createSidebar;