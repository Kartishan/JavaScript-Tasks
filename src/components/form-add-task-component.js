import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';

function createFormAddTaskComponentTemplate() {
    return (
        `<form>
            <h2>Новая задача</h2>
            <input class="addTaskInput" placeholder="Название задачи..."/>
            <button class="addTaskButton">🞣 Добавить</button>
        </form>`
      );
}

export class FormAddTaskComponent extends AbstractComponent {
    getTemplate() {
        return createFormAddTaskComponentTemplate();
    }
}