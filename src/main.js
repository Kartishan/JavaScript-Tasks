import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import {render, RenderPosition} from './render.js';
import { TaskMainCon } from './components/Task-main-con.js';
import { CreateCardCon } from './components/task-card-con-component.js';
import { TasksService } from './TaskService.js';
import { Status } from './const.js';
import { CardComponent } from './components/task-card-component.js';
import { ClearBtn } from './components/clearBtn-component.js';


const bodyContainer = document.getElementById('bodyApp');
const addTaskContainer = document.querySelector('.addTaskCon');
const taskMainContainer =  document.querySelector('.addTaskCon');
const taskService = new TasksService();

let result = Object.keys(Status).map((key) => [key, Status[key]]);
console.log(result);

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), addTaskContainer, RenderPosition.BEFOREEND);
render(new TaskMainCon(), taskMainContainer, RenderPosition.AFTEREND);

let i = 0;
const cardListContainer = document.querySelector('.taskCardCon');
while (i<4){
    const listComponent = new CreateCardCon({status: result[i][1]});
    render(listComponent, cardListContainer, RenderPosition.BEFOREEND);
    let tasks = taskService.getTasksByStatus(result[i][1]);
    console.log(tasks);
    tasks.forEach(task => {
        render(new CardComponent({id: task.id, title: task.title, status: task.status}), listComponent.getElement());
    });
    if (i==3){
        render(new ClearBtn(), listComponent.getElement(), RenderPosition.BEFOREEND);
    }

    i++;
}