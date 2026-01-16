import renderProjects from "./renderProjects";
import createSidebar from "./sidebar";
function createContent(){
    const root = document.querySelector("#root");
    const main = document.createElement("main");
    main.classList.add("content");
    root.appendChild(main);
    
    renderProjects();
}

export default createContent;