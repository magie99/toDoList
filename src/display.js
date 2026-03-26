
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
            newItem.appendChild(createElement("h4", "", item.title));
            const details = createElement("div", "toDoItem")
            newItem.appendChild(createElement("div", "", item.priority));
            newItem.appendChild(createElement("div", "", item.dueDate));
            toDoContainer.appendChild(newItem)
        }
    };
    return {
        renderProject
    };
  })();

export default display