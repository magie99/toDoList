import projectManager from "./projectManager.js";
import ToDo from "./toDo.js";
import Project from "./projects.js";
const storage = (() => {
    //get all projects 
    const load = () =>{
        const storedProjects = localStorage.getItem("projects");
        if (storedProjects){
            const rawProjects = JSON.parse(storedProjects);
            for (const project of rawProjects){
                const list = project.list;
                const newProject = projectManager.addProject(project.title);  
                for (const item of list){
                    const newToDo = new ToDo(item.title, item.description, item.dueDate, item.priority, item.notes);
                    newProject.addToDo(newToDo);
                }
            }
        }
    }
    //safe projects
    const safe = () =>{
            localStorage.setItem("projects", JSON.stringify(projectManager.getAllProjects()))
        }
    return{
        load,
        safe,
    }
})();

export default storage;