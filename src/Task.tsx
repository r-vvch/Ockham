class Task {
    id: number;
    name: string;
    isDone: boolean;

    constructor(id: number, name: string) {
        this.id = id
        this.name = name;
        this.isDone = false;
    }

    rename = (newName: string) => {
        this.name = newName;
    }

    setCompletion = () => {
        this.isDone = true;
    }


}

export default Task;