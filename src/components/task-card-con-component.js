import { StatusLabel } from '../const.js';
import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';

function createCardCon(status) {
    return (
        `<div id="cardList">
            <h2 class="taskCardHeader taskCardHeader${status}">${StatusLabel[status]}</h2>
        </div>`
      );
}

export class CreateCardCon extends AbstractComponent{
    #status = null;

    constructor({status}){
        super();
        this.#status = status;
    }
      
    getTemplate() {
        return createCardCon(this.#status);
    }
}