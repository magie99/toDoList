import "./styles.css";
import ToDo from "./toDo.js";
import Project from "./projects.js";
import display from "./display.js";
import interaction from "./interaction.js";
import projectManager from "./projectManager.js";
import storage from "./storage.js";

if (!localStorage.getItem("firstload")) {      
    localStorage.setItem("firstload", "false");
    const defaultProject = projectManager.addProject("default");
    projectManager.changeCurrentProject(defaultProject);
} 
else {
    storage.load();
    const currentProject = projectManager.getAllProjects().at(-1);
    if (currentProject){
        projectManager.changeCurrentProject(currentProject);
        display.renderProject(currentProject);
    }
    else{
        display.clearProjectView();
    }
    
}
display.renderProjectList();
interaction.addEventListeners();