import Task from "./Task";

class TaskList {
    id: number;
    name: string;
    tasks: Task[] | undefined;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

}