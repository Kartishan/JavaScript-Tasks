import { Status, StatusLabel } from '../const.js';
import {RenderPosition, createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';
import { CardComponent } from './task-card-component.js';
import { render } from '../render.js';
import { ClearBtn } from './clear-btn-component.js';
import { CardStubComponent } from './task-stub-card-component.js';

function createCardCon(status) {
    return (
        `<div id="cardList" class="list">
            <h2 class="taskCardHeader taskCardHeader${status}">${StatusLabel[status]}</h2>
        </div>`
      );
}

export class CreateCardCon extends AbstractComponent{
    #status = null;
    #taskService=null;
    #tasks= null;

    constructor(status, taskService){
        super();
        this.#status = status;
        this.#taskService=taskService;
        this.#tasks = taskService.getTasksByStatus(status);
        window.addEventListener("create-task", ()=> this.#reRenderTasks(this.#status,  this.#taskService));
    }
    
    #reRenderTasks(status, taskService){
        this.#tasks = this.#taskService.getTasksByStatus(this.#status);
        this.#removeTasks();
        let disabledBtn=false;
        if (this.#taskService.getTasks().length < 1)
            disabledBtn = true;
        if ( this.#tasks.length < 1){
            render(new CardStubComponent(),this.getElement());
        }
        this.#tasks.forEach(task => {
            const taskComponent = new CardComponent({ id: task.id, title: task.title, status: task.status });
            render(taskComponent, this.getElement(), RenderPosition.BEFOREEND);
        });
        if (status === Status.BASKET){
            render(new ClearBtn(taskService, disabledBtn), this.getElement());
        }
    }
    
    #removeTasks() {
        const childElements = Array.from(this.getElement().children);
        childElements.forEach(childElement => {
            if (!childElement.matches('.taskCardHeader')) {
                childElement.remove();
            }
        });
    }
    
    getTemplate() {
        return createCardCon(this.#status);
    }
}