import { NoEmitOnErrorsPlugin } from "webpack";

export const display = (() => {
    const projectContainer = document.getElementById("project-container");
    const renderProject = (project) => {
        projectContainer.innerHTML = "";
        const newProject = createElement("div", "project");
        projectContainer.appendChild(newProject);
        for (const item of project.list) {
            const newItem = createElement("div", "toDoItem")
            newItem.appendChild(createElement("h4", "", item.title));
        }
    };
  })();

 const createElement = (tag, className, text = "") => {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    if (text) el.textContent = text;
    return el;
};
