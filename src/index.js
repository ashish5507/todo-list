import createDefaultLayout from "./layout";
import contentForm from "./mainForm";
import "./styles.css"
import createForm from "./projectform";

createDefaultLayout();
const addProjectButton = document.querySelector(".add-btn");
if(addProjectButton){
    addProjectButton.addEventListener("click",createForm);
}
