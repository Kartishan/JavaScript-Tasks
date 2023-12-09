import { Status } from "./const.js";
import { tasks } from "./mock/task.js";

export class TasksService {
    #boardTasks = tasks;
    
    getTasksByStatus(status){
        const tasksStatus = this.#boardTasks.filter(function(task) {
            return task.status == status;
        });
        return(tasksStatus)
    }
    
    create({id='', title, status = Status.BACKLOG}) {
        id = this.generateId();
        this.#boardTasks.push({id, title, status});
        window.dispatchEvent(new CustomEvent("create-task"));
    }

    deleteAll(){
        const filteredTasks = this.#boardTasks.filter(task => task.status !== 'bin');
        this.#boardTasks = filteredTasks;
    }

    getTasks(){
        return this.#boardTasks;
    }
    generateId(){
        return crypto.randomUUID();
    }
}