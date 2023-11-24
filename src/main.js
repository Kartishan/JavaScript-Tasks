import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import {render, RenderPosition} from './render.js';
import { TaskMainCon } from './components/Task-main-con.js';
import { CreateCardCon } from './components/task-card-con-component.js';
import { CreateTask } from './components/task-component.js';


const bodyContainer = document.getElementById('bodyApp');
const addTaskContainer = document.querySelector('.addTaskCon');
const taskMainContainer =  document.querySelector('.addTaskCon');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), addTaskContainer, RenderPosition.BEFOREEND);
render(new TaskMainCon(), taskMainContainer, RenderPosition.AFTEREND);
const cardListContainer = document.querySelector('.taskCardCon');
let i = 0;
while (i<4){
    render(new CreateCardCon(), cardListContainer, RenderPosition.AFTERBEGIN,);
    const task = document.getElementById('cardList');
    render(new CreateTask(), task, RenderPosition.BEFOREEND);
    render(new CreateTask(), task, RenderPosition.BEFOREEND);
    render(new CreateTask(), task, RenderPosition.BEFOREEND);
    i++;
}