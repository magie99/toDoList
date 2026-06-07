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
        const toDoContainer = document.getElementById("to-do-container");
        const more = document.getElementById("moreDialog");

        window.addEventListener('click', (e) => {
            if (e.target.closest(".editIcon")) return; 
            
            if (more.open && !more.contains(e.target)) {
                more.close();
            }
        });

        more.addEventListener('click', (e) => {
            const moreDelete = e.target.closest("#moreDelete");
            const moreEdit = e.target.closest("#moreEdit");
            const moreDetails = e.target.closest("#moreDetails");
            const item = currentProject.list.find(item => item.id == more.dataset.activeTodoId);
            
            if(moreDelete){
                currentProject.removeToDo(item);
                display.renderProject(currentProject);
                more.close();
            }

            if(moreEdit){
                more.close()
                document.getElementById("title").value = item.title;
                document.getElementById("description").value = item.description;
                document.getElementById("dueDate").value = item.dueDate;
                document.getElementById("priority").value = item.priority;
                addToDoForm.dataset.editId = item.id
                addToDoDialog.showModal();
            }
        });

        addToDoForm.addEventListener("submit", function (e) {
            e.preventDefault(); display.renderProject(currentProject);
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;

            if (addToDoForm.dataset.editId){
                const item = currentProject.list.find(item => item.id == addToDoForm.dataset.editId);
                item.update(title, description, dueDate, priority);
                delete addToDoForm.dataset.editId
            
            }
            else{
                const newToDo = new ToDo(title, description, dueDate, priority)
                currentProject.addToDo(newToDo);
            }
            
            addToDoDialog.close();
            addToDoForm.reset();
            display.renderProject(currentProject);
        });

        toDoContainer.addEventListener('click', (e) => {
            const checkbox = e.target.closest(".checkbox");
            const editIcon = e.target.closest(".editIcon");
            const toDoElement = e.target.closest(".toDoItem");
            
            if (!toDoElement){
                return;
            }

            const item = currentProject.list.find(item => item.id == e.target.closest(".toDoItem").dataset.id);

            if (checkbox){
                item.markComplete();
                display.renderProject(currentProject);
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