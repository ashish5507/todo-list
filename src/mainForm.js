import { activeProject } from "./classLogic";
import { Todo } from "./classLogic";
import renderTasks from "./renderTasks";

function contentForm(){
    const root = document.querySelector("#root");

    //create form element
    const form = document.createElement("form");
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Task Details";
    form.classList.add("content-form");
    fieldset.appendChild(legend);
    fieldset.classList.add("content-form-fieldset");

    //create name input and label 
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("content-form-name-div");
    const formNameInput = document.createElement("input");
    const formNameInputLabel = document.createElement("label");
    formNameInput.id = "formNameInput";
    formNameInputLabel.setAttribute("for","formNameInput");
    formNameInputLabel.textContent = "Task: ";
    nameDiv.appendChild(formNameInputLabel);
    nameDiv.appendChild(formNameInput);
    formNameInput.required = true;
    
    //create description label and textarea
    const description = document.createElement("div");
    description.classList.add("content-form-description");
    const descText = document.createElement("textarea");
    const descLabel = document.createElement("label");
    descText.id = "description";
    descLabel.setAttribute("for","description");
    descLabel.textContent = "Description";
    description.appendChild(descLabel);
    description.appendChild(descText);
    descText.required = true;


    //create date time
    const dateTime = document.createElement("div");
    dateTime.classList.add("content-form-time");
    const calender = document.createElement("input");
    calender.type = "datetime-local";
    const Clabel = document.createElement("label");
    Clabel.textContent = "Due Date:"
    calender.id = "dateTime";
    Clabel.setAttribute("for","calender");
    dateTime.appendChild(Clabel);
    dateTime.appendChild(calender);
    calender.require = true;

    //Priority
    const priority = document.createElement("div");
    priority.classList.add("content-form-priority");
    const low = document.createElement("input");
    const moderate = document.createElement("input");
    const high = document.createElement("input");

    const priorityFieldset = document.createElement("fieldset");
    priorityFieldset.classList.add("priorityFieldset");
    const priorityLegend = document.createElement("legend");
    priorityFieldset.appendChild(priorityLegend);
    priorityLegend.textContent = "Priority"
    low.type = "radio";
    moderate.type = "radio";
    high.type = "radio";
    low.id = "lowp";
    moderate.id = "modp";
    high.id = "highp";

    low.name = "priority_setting";
    moderate.name = "priority_setting";
    high.name = "priority_setting";

    const divL = document.createElement("div");
    const divM = document.createElement("div");
    const divH = document.createElement("div");
    const lowL = document.createElement("label");
    const modL = document.createElement("label");
    const highL = document.createElement("label");
    lowL.textContent = "Low";
    modL.textContent = "Moderate";
    highL.textContent = "High";
    

    lowL.setAttribute("for","low");
    modL.setAttribute("for","mod");
    highL.setAttribute("for","high");

    divL.appendChild(low);
    divL.appendChild(lowL);
    divM.appendChild(moderate);
    divM.appendChild(modL);
    divH.appendChild(high);
    divH.appendChild(highL);

    priorityFieldset.appendChild(divL);
    priorityFieldset.appendChild(divM);
    priorityFieldset.appendChild(divH);
    priority.appendChild(priorityFieldset);

    //submit 
    const smt = document.createElement("div");
    smt.classList.add("content-form-submit");
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.classList.add("btn","main-btn");
    btn.textContent = "submit";
    smt.appendChild(btn);

    fieldset.appendChild(nameDiv);
    fieldset.appendChild(description);
    fieldset.appendChild(dateTime);
    fieldset.appendChild(priority);
    fieldset.appendChild(smt);

    form.appendChild(fieldset);
    root.appendChild(form);

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const checkedPriority = form.querySelector('input[name="priority_setting"]:checked');
        const priorityValue = checkedPriority ? checkedPriority.id : "lowp";

        const newTask = new Todo(formNameInput.value,descText.value,calender.value,priorityValue);
        activeProject.todos.push(newTask);
        form.remove();
        renderTasks(activeProject);
    })

}

export default contentForm;