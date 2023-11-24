import {createElement} from '../render.js';


function createTask() {
    return (
        `<p class="taskCardElement cardBin">Сходить погулять</p>`
      );
}


export class CreateTask {
  getTemplate() {
    return createTask();
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