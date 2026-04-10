
const display = (() => {

    const createElement = (tag, className, text = "") => {
        const el = document.createElement(tag);
        if (className) el.classList.add(className);
        if (text) el.textContent = text;
        return el;
    };

    const renderToDo = (item) => {
            const checkboxIcon = createElement("div");
            checkboxIcon.innerHTML = '<svg class="checkbox" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><title>checkbox-blank-circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>'
            const editIcon = createElement("div");
            editIcon.innerHTML = '<svg class="editIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>'
            const newItem = createElement("div", "toDoItem");
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
            renderToDo(item)
        }
    };

    //const openEditModal = (toDoItem)
    return {
        renderProject
    };
  })();

export default display