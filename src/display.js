import projectManager from "./projectManager.js";
import Project from "./projects.js";

const display = (() => {

    const createElement = (tag, className, text = "") => {
        const el = document.createElement(tag);
        if (className) el.classList.add(className);
        if (text) el.textContent = text;
        return el;
    };

    const renderToDo = (item, complete) => {
            const newItem = createElement("div", "toDoItem");
            const checkboxIcon = createElement("div");
            if (complete === false){
                checkboxIcon.innerHTML = '<svg class="checkbox" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><title>checkbox-blank-circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>'
            }
            else{
                checkboxIcon.innerHTML = '<svg class="checkbox" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>'
                newItem.classList.add("checked");
            }
            const editIcon = createElement("div");
            editIcon.innerHTML = '<svg class="editIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>'
            newItem.appendChild(checkboxIcon);
            const toDoItemContent = createElement("div", "toDoItemContent");
            toDoItemContent.appendChild(createElement("div", "", item.title));
            const details = createElement("div", "toDoItemDetails")
            details.appendChild(createElement("div", "", `due: ${item.dueDate}`));
            toDoItemContent.appendChild(details);
            newItem.appendChild(toDoItemContent);
            newItem.appendChild(editIcon);
            toDoContainer.appendChild(newItem);
            newItem.dataset.id = item.id;
            if(item.priority < 4){
                newItem.classList.add("low-priority")
            }
            else if (item.priority < 7){
                newItem.classList.add("mid-priority")
            }
            else{
                newItem.classList.add("high-priority")
            }
            
    };
    
    const toDoContainer = document.getElementById("to-do-container");
    const projectHeader = document.getElementById("project-title");
    const addToDoBtn = document.getElementById("addToDoBtn")

    const renderProject = (project) => {
        addToDoBtn.style ="visibility: visible";
        toDoContainer.innerHTML = "";
        projectHeader.innerHTML = `${project.title}`;

        for (const item of project.list) {
            if (item.complete === false){
                renderToDo(item, false)
            }
        }
        for (const item of project.list) {
            if (item.complete === true){
                renderToDo(item, true)
            }
        }
    };

    const projectList = document.getElementById("project-list");

    const renderProjectList = () => {
        projectList.innerHTML = "";
        const projects = projectManager.getAllProjects();
        for (const project of projects){
            const newItem = createElement("div", "project")
            const newLink = createElement("a", "projectLink", project.title);
            const trash = createElement("span", "trash-icon");
            trash.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="height:20px" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`
            newLink.setAttribute("href", "#"); 
            newItem.dataset.projectTitle = project.title;
            newItem.appendChild(newLink);
            newItem.appendChild(trash); 
            projectList.appendChild(newItem);
        }
    }

    const clearProjectView= () => {
        addToDoBtn.style ="visibility: hidden";
        toDoContainer.innerHTML = "";
        projectHeader.innerHTML = "";
    }

    return {
        renderProjectList,
        renderProject,
        clearProjectView
    };
  })();

export default display