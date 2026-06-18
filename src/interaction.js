import ToDo from "./toDo.js";
import Project from "./projects.js";
import display from "./display.js";
import projectManager from "./projectManager.js";

const interaction = (() => {
    
    const addEventListeners = () => {
        const cancelBtn = document.getElementById("cancelBtn");
        const addToDoForm = document.getElementById("addToDoForm");
        const addToDoDialog = document.getElementById("addToDo-dialog");
        const toDoContainer = document.getElementById("to-do-container");
        const more = document.getElementById("moreDialog");
        const addProjectBtn = document.getElementById("newProjectBtn");
        const addProjectDialog = document.getElementById("addProjectDialog");
        const projectList = document.getElementById("project-list");
        const addProjectForm = document.getElementById("addProjectForm")

        window.addEventListener('click', (e) => {
            if (e.target.closest(".editIcon")) return; 
            
            if (more.open && !more.contains(e.target)) {
                more.close();
            }
        });

        document.addEventListener("click", function(e) {
            if (e.target.classList.contains("btn-cancel")) {
                const dialog = e.target.closest("dialog");
                const form = e.target.closest("form");
                if (dialog) dialog.close();
                if (form) form.reset();
            }
        });

        addProjectForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            const newProject = projectManager.addProject(data.title);
            projectManager.changeCurrentProject(newProject);
            addProjectDialog.close();
            addProjectForm.reset();
            display.renderProjectList();
            display.renderProject(projectManager.getCurrentProject());
        });

        more.addEventListener('click', (e) => {
            const moreDelete = e.target.closest("#moreDelete");
            const moreEdit = e.target.closest("#moreEdit");
            const moreDetails = e.target.closest("#moreDetails");
            const item = projectManager.getCurrentProject().list.find(item => item.id == more.dataset.activeTodoId);
            
            if(moreDelete){
                projectManager.getCurrentProject().removeToDo(item);
                display.renderProject(projectManager.getCurrentProject());
                more.close();
            }

            if(moreEdit){
                more.close()
                Object.keys(item).forEach(key => {
                    if (addToDoForm.elements[key]) {
                        addToDoForm.elements[key].value = item[key];
                    }
                });
                addToDoForm.dataset.editId = item.id
                addToDoDialog.showModal();
            }
        });

        addToDoForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            if (addToDoForm.dataset.editId){
                const item = projectManager.getCurrentProject().list.find(item => item.id == addToDoForm.dataset.editId);
                item.update(data.title, data.description, data.dueDate, data.priority, data.notes);
                delete addToDoForm.dataset.editId
            
            }
            else{
                const newToDo = new ToDo(data.title, data.description, data.dueDate, data.priority, data.notes)
                projectManager.getCurrentProject().addToDo(newToDo);
            }
            
            addToDoDialog.close();
            addToDoForm.reset();
            display.renderProject(projectManager.getCurrentProject());
        });

        toDoContainer.addEventListener('click', (e) => {
            const checkbox = e.target.closest(".checkbox");
            const editIcon = e.target.closest(".editIcon");
            const toDoElement = e.target.closest(".toDoItem");
            const collaps = e.target.closest(".collapsicon");
            const notes = toDoElement.querySelector(".notes");
            
            if (!toDoElement){
                return;
            }

            const item = projectManager.getCurrentProject().list.find(item => item.id == e.target.closest(".toDoItem").dataset.id);

            if (checkbox){
                item.markComplete();
                display.renderProject(projectManager.getCurrentProject());
            }

            if (editIcon){
                e.stopPropagation()
                var rect = editIcon.getBoundingClientRect();
                more.show();
                more.style.margin = '0';
                more.style.position = 'absolute'; 
                more.style.top = `${rect.bottom + window.scrollY}px`;
                more.style.left = `${rect.left + window.scrollX}px`;
                more.dataset.activeTodoId = toDoElement.dataset.id;
            }

            if (collaps){
                    notes.classList.toggle("notesHidden");
            }
        });

        addToDoDialog.addEventListener("close", () => {          
            delete addToDoForm.dataset.editId; 
        });

        projectList.addEventListener('click', (e) => {
            e.preventDefault()
            const projectLink = e.target.closest("a");
            const trash = e.target.closest("svg");
            const target = projectManager.getAllProjects().find(item => item.title == e.target.closest("div").dataset.projectTitle); 
            if (projectLink){
                projectManager.changeCurrentProject(target);
                display.renderProject(target);
            }
            if (trash){
                projectManager.removeProject(target);
                const nextproject = projectManager.getAllProjects().at(-1);
                if (nextproject){
                    projectManager.changeCurrentProject(nextproject);
                    display.renderProject(nextproject);
                }
                else{
                    display.clearProjectView();
                }
                display.renderProjectList();
            }
            else{
                return;
            }  
        });

    }   

    return{
        addEventListeners,
    };
})();

export default interaction;