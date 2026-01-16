import { projectLists , setActiveProject} from "./classLogic";
import renderHeader from "./renderHeading";
import renderTasks from "./renderTasks";
function renderProjects(){
    const projectsLayout = document.querySelector(".projects");
    projectsLayout.innerHTML = "";
    projectLists.forEach((project,index) => {
    const ProjectButton = document.createElement("button");
    ProjectButton.classList.add("btn","default-btn"); 
    ProjectButton.textContent = project.name;
    ProjectButton.type = "button";
    ProjectButton.width = "10px";

    ProjectButton.addEventListener("click",() =>{
        setActiveProject(project);
        renderHeader(project);
        renderTasks(project);
        
    })
    projectsLayout.appendChild(ProjectButton);
    })
}

export default renderProjects;