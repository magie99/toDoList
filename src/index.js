import "./styles.css";
import ToDo from "./toDo.js";
import Project from "./projects.js";
import display from "./display.js";

const defaultProject = new Project("default");
const newtodo = new ToDo("title goes here", "description goes here", "due date goes here", "priority goes here");

console.log(defaultProject);

defaultProject.addToDo(newtodo);


console.log(defaultProject);