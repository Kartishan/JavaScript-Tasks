import { createElement } from '../render.js';
import { TasksService } from '../TaskService.js';
import { AbstractComponent } from './AbstractComponent.js';

function createFormAddTaskComponentTemplate() {
    return (
        `<form>
            <h2>Новая задача</h2>
            <input id="add-task" class="addTaskInput" placeholder="Название задачи..." required/>
            <button class="addTaskButton" type="submit">🞣 Добавить</button>
        </form>`
    );
}

export class FormAddTaskComponent extends AbstractComponent {
    #taskService = null;

    constructor(taskService){
        super();
        this.#taskService = taskService;
        this.getElement().addEventListener(`submit`, this.formSubmitHandler.bind(this));
    }

    getTemplate() {
        return createFormAddTaskComponentTemplate();
    }
    
    formSubmitHandler(evt) {
        evt.preventDefault();
        const inputElement = this.getElement().querySelector(`#add-task`);
        const title = inputElement.value.trim();
        this.#taskService.create({ title });
        inputElement.value = ``;
    }
}
