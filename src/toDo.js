export default class ToDo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }

    delete;
    markComplete;
    changeTitle;
    changeDescription;
    changeDueDate;
    changePriority;
    opendialog;
}