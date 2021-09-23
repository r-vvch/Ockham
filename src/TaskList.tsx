import Task from "./Task";
import { Checkbox } from 'antd';

class TaskList {
    id: number;
    name: string;
    tasks: Task[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.tasks = [];
    }

    visualise = () => {
        return(
            this.tasks.map(task =>
                <>
                    <Checkbox>{task.name}</Checkbox><br />
                </>
            ))
    }
}

export default TaskList;