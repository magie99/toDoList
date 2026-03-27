
const display = (() => {

    const createElement = (tag, className, text = "") => {
        const el = document.createElement(tag);
        if (className) el.classList.add(className);
        if (text) el.textContent = text;
        return el;
    };

    const toDoContainer = document.getElementById("to-do-container");
    const renderProject = (project) => {
        toDoContainer.innerHTML = "";
        for (const item of project.list) {
            const newItem = createElement("div", "toDoItem")
            newItem.appendChild(createElement("div", "", item.title));
            const details = createElement("div", "toDoItemDetails")
            details.appendChild(createElement("div", "", `priority: ${item.priority}`));
            details.appendChild(createElement("div", "", `due: ${item.dueDate}`));
            newItem.appendChild(details);
            toDoContainer.appendChild(newItem);
        }
    };
    return {
        renderProject
    };
  })();

export default display