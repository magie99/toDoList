import "./styles.css";
import ToDo from "./toDo.js";
import Project from "./projects.js";
import display from "./display.js";
import interaction from "./interaction.js";
import projectManager from "./projectManager.js";
import storage from "./storage.js";

storage.load();
const defaultProject = projectManager.addProject("default");
projectManager.changeCurrentProject(defaultProject);
display.renderProjectList();
interaction.addEventListeners();