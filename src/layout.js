import logo from "./images/todo_icon.png";
import createSidebar from "./sidebar";
import createHeader from "./header";
import createContent from "./content";
import {Project,projectLists} from "./classLogic";
import createForm from "./projectform";
function createDefaultLayout(){
    createSidebar();
    createHeader();
    createContent();
};
export default createDefaultLayout;
