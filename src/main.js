import { HeaderComponent } from './components/header-component.js';
import { FormAddTaskComponent } from './components/form-add-task-component.js';
import { render, RenderPosition } from './render.js';
import { TaskMainCon } from './components/Task-main-con.js';
import { CreateCardCon } from './components/task-card-con-component.js';
import { TasksService } from './TaskService.js';
import { Status } from './const.js';
import { CardComponent } from './components/task-card-component.js';
import { ClearBtn } from './components/clear-btn-component.js';
import { CardStubComponent } from './components/task-stub-card-component.js';


const bodyContainer = document.getElementById('bodyApp');
const addTaskContainer = document.querySelector('.addTaskCon');
const taskMainContainer = document.querySelector('.addTaskCon');
const taskService = new TasksService();

const statuses = Object.values(Status);


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(taskService), addTaskContainer, RenderPosition.BEFOREEND);
render(new TaskMainCon(), taskMainContainer, RenderPosition.AFTEREND);


function renderTask(task, container) {
    const taskComponent = new CardComponent({ id: task.id, title: task.title, status: task.status });
    render(taskComponent, container);
}

function renderList(cardListContainer, status) {
    const listComponent = new CreateCardCon(status, taskService);
    render(listComponent, cardListContainer);
    return listComponent;
}

const cardListContainer = document.querySelector('.taskCardCon');
let disabledBtn=false;
if (taskService.getTasks().length < 1)
    disabledBtn = true;

function renderAllTasks(){
    for (const status of statuses) {
        const listComponent = renderList(cardListContainer, status);
        const tasks = taskService.getTasksByStatus(status);
        if (tasks.length < 1){
            render(new CardStubComponent(),listComponent.getElement());
        }
    
        tasks.forEach(task => {
            renderTask(task, listComponent.getElement())
        });
        if (status === Status.BASKET) {
            render(new ClearBtn(taskService, disabledBtn), listComponent.getElement());
        }
    }
}
renderAllTasks();
