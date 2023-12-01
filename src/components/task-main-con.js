import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';


function createTaskMainCon() {
    return (
        `<section class="taskCardCon">     </section>`
      );
}


export class TaskMainCon extends AbstractComponent{
  getTemplate() {
    return createTaskMainCon();
  }
}