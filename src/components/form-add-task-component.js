import {createElement} from '../render.js';

function createFormAddTaskComponentTemplate() {
    return (
        `<form>
            <h2>Новая задача</h2>
            <input class="addTaskInput" placeholder="Название задачи..."/>
            <button class="addTaskButton">🞣 Добавить</button>
        </form>`
      );
}

export class FormAddTaskComponent {
    getTemplate() {
        return createFormAddTaskComponentTemplate();
    }
    getElement() {
        if (!this.element) {
        this.element = createElement(this.getTemplate());
    }

    return this.element;
    }

    removeElement() {
        this.element = null;
    }
}