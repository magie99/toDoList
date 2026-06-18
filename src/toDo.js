export default class ToDo {
    constructor(title, description, dueDate, priority, notes){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.notes = notes;
        this.id = crypto.randomUUID();
    }

    markComplete(){
        if (this.complete == false){
            this.complete = true
        }
        else{
            this.complete = false
        }
            
    }

    update(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    //delete;
    //markComplete;
    //changeTitle;
    //changeDescription;
    //changeDueDate;
    //changePriority;
    //opendialog;
}