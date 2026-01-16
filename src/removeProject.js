import { setActiveProject, projectLists } from "./classLogic";
import renderHeader from "./renderHeading";
import renderProjects from "./renderProjects";
import renderTasks from "./renderTasks";

function removeProject(project) {
    const index = projectLists.indexOf(project);
    if (index > -1) {
        projectLists.splice(index, 1);
    }

    const newActive = projectLists.length > 0 ? projectLists[0] : null;
    setActiveProject(newActive);

    renderProjects();

    if (newActive) {
        renderHeader(newActive);
        renderTasks(newActive);
    } else {
        const header = document.querySelector(".header");
        const content = document.querySelector(".content");
        
        header.innerHTML = "<div class='div-header'><p class='heading'>No Projects Left</p></div>";
        content.innerHTML = "<p>Click '+ Project' in the sidebar to get started!</p>";
    }
}

export default removeProject;