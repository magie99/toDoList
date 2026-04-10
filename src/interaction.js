import ToDo from "./toDo.js";
import Project from "./projects.js";
import display from "./display.js";

const interaction = (() => {
    let currentProject;

    const changeCurrentProject = (project) =>{
        currentProject = project;
    }

    const addEventListeners = () => {
        const cancelBtn = document.getElementById("cancelBtn");
        const addToDoForm = document.getElementById("addToDoForm");
        const addToDoDialog = document.getElementById("addToDo-dialog");

        addToDoForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;
            const newToDo = new ToDo(title, description, dueDate, priority)
            currentProject.addToDo(newToDo);
            addToDoDialog.close();
            addToDoForm.reset();
            console.log(currentProject);
            display.renderProject(currentProject);
        });

        cancelBtn.addEventListener('click', () => {
        addToDoDialog.close();
        addToDoForm.reset();
        });


    }   
    return{
        addEventListeners,
        changeCurrentProject
    };
})();

export default interaction;