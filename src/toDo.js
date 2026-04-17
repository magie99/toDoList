export default class ToDo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.id = crypto.randomUUID();
    }

    markComplete(){
        this.complete = true
    }


    //delete;
    //markComplete;
    //changeTitle;
    //changeDescription;
    //changeDueDate;
    //changePriority;
    //opendialog;
}