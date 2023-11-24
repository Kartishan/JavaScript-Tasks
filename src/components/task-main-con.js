import {createElement} from '../render.js';


function createTaskMainCon() {
    return (
        `<section class="taskCardCon">     </section>`
      );
}


export class TaskMainCon {
  getTemplate() {
    return createTaskMainCon();
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