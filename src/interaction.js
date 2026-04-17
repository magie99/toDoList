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
        const toDoContainer = document.getElementById("to-do-container")
        const more = document.getElementById("moreDialog")

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

        toDoContainer.addEventListener('click', (e) => {
            const checkbox = e.target.closest(".checkbox");
            const editIcon = e.target.closest(".editIcon");
            const item = currentProject.list.find(item => item.id == e.target.closest(".toDoItem").dataset.id);
            const more = document.getElementById("moreDialog")

            if (checkbox){
                item.markComplete();
                display.renderProject(currentProject);
            }

            if (editIcon){
                const rect = editIcon.getBoundingClientRect();
                more.showModal();
                more.style.margin = '0';
                more.style.position = 'absolute'; 
                more.style.top = `${rect.bottom + window.scrollY}px`;
                more.style.left = `${rect.left + window.scrollX}px`;
            }
            if (more.open && !more.contains(e.target)){
            more.close();
            }
            
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