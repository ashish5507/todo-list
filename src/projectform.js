import { Project, projectLists } from "./classLogic";
import renderHeader from "./renderHeading";
import renderProjects from "./renderProjects";
import renderTasks from "./renderTasks";
import { setActiveProject } from "./classLogic";

function createForm(){
    const root = document.querySelector("#root");

    //create form element
    const projectForm = document.createElement("form");
    projectForm.setAttribute("id","project-form");
    const fieldSet = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Project Description"
    fieldSet.appendChild(legend);
    projectForm.appendChild(fieldSet);
    fieldSet.setAttribute("id","project-field");

    //create a div for name field
    const nameField = document.createElement("div");
    nameField.classList.add("project-form-name-div");

    //create label and input element
    const projectNameLabel = document.createElement("label");
    const projectNameInput = document.createElement("input");
    projectNameInput.id = "projectName";
    projectNameLabel.setAttribute("for","projectName");
    projectNameLabel.textContent = "Name: ";
    projectNameInput.required = true;
    projectNameInput.placeholder = "Project Name";
    nameField.appendChild(projectNameLabel);
    nameField.appendChild(projectNameInput);
    fieldSet.appendChild(nameField);

    //create a submit button
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("submit-btn");
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("btn");
    submitBtn.textContent = "submit";
    btnDiv.appendChild(submitBtn);
    fieldSet.appendChild(btnDiv);
    root.appendChild(projectForm);

    projectForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const newProjectName = projectNameInput.value;
        const newProject = new Project(newProjectName);
        setActiveProject(newProject);
        projectLists.push(newProject);
        projectForm.remove();
        renderProjects();
        renderHeader(newProject);
        renderTasks(newProject);
    })
}

export default createForm;