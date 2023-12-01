import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";

function createCardComponent(status, title) {
    return(
        `<p class="taskCardElement card${status}">${title}</p>`
    );
}

export class CardComponent extends AbstractComponent{
    #id = null;
    #status = null;
    #title = null;

    constructor({id, title, status}){
        super();
        this.#id = id;
        this.#status = status;
        this.#title = title;
        console.log(id, title, status);
    }
      

    getTemplate() {
        return createCardComponent(this.#status, this.#title);
    }
}