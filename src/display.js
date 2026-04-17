
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
            details.appendChild(createElement("div", "", `priority: ${item.priority}`));
            details.appendChild(createElement("div", "", `due: ${item.dueDate}`));
            toDoItemContent.appendChild(details);
            newItem.appendChild(toDoItemContent);
            newItem.appendChild(editIcon);
            toDoContainer.appendChild(newItem);
            newItem.dataset.id = item.id;
    };
    
    const toDoContainer = document.getElementById("to-do-container");

    const renderProject = (project) => {
        toDoContainer.innerHTML = "";
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

    //const openEditModal = (toDoItem)
    return {
        renderProject
    };
  })();

export default display