import ToDo from "./toDo.js";

export default class Project {
    constructor(title){
        this.title = title;
        this.list = [];
    }

    //delete;
    //changeTitle;
    addToDo(toDo){
        this.list.push(toDo)
    };

}