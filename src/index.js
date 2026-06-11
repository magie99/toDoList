import "./styles.css";
import ToDo from "./toDo.js";
import Project from "./projects.js";
import display from "./display.js";
import interaction from "./interaction.js";
import projectManager from "./projectManager.js";

const defaultProject = new Project("default");
projectmanager.changeCurrentProject(defaultProject);
interaction.addEventListeners();