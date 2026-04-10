import "./styles.css";
import ToDo from "./toDo.js";
import Project from "./projects.js";
import display from "./display.js";
import interaction from "./interaction.js";

const defaultProject = new Project("default");
interaction.changeCurrentProject(defaultProject);
interaction.addEventListeners();