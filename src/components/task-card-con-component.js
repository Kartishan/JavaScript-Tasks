import {createElement} from '../render.js';

function createCardCon() {
    return (
        `<div id="cardList">
            <h2 class="taskCardHeader taskCardHeaderInProccess">В процессе</h2>
        </div>`
      );
}

export class CreateCardCon {
    getTemplate() {
        return createCardCon();
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