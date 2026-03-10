import { Todo } from "../todo.model"
import { createTodoHTML } from "./create-todo-html";



/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */


export const renderTodos = (elementId, todos = []) => {
    const element = document.querySelector(elementId);
    if (!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = ''; // limpia previos <li>

    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });
}



