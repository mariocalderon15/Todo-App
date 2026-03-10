import todoStore, {Filters} from '../store/todo.store';
import html from './app.html?raw';
import { Todo } from './models/todo.model';
import { renderTodos, renderPending } from './models/use-cases';


const ElementsIDS = {
    borrarCompletado: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */


export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementsIDS.TodoList, todos);
        updatePendingCount();
    }
    
    const updatePendingCount = () =>{
        renderPending(ElementsIDS.PendingCountLabel);
    }

    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();


    const newDescriptionInput = document.querySelector(ElementsIDS.NewTodoInput);
    const todoListUl = document.querySelector(ElementsIDS.TodoList);
    const clearCompletedBtn = document.querySelector(ElementsIDS.borrarCompletado);
    const filtersLis = document.querySelectorAll(ElementsIDS.TodoFilters);


    newDescriptionInput.addEventListener('keydown', ({ key, target }) => {
        if (key !== 'Enter') return;
        const description = target.value.trim();
        if (!description) return;

        todoStore.addTodo(description);
        displayTodos();
        target.value = '';
    });

    todoListUl.addEventListener('click', ({ target }) => {
        if (!target.classList.contains('toggle')) return; // solo checkboxes

        const element = target.closest('[data-id]');
        if (!element) return;

        const todoId = element.getAttribute('data-id');
        todoStore.toggleTodo(todoId); // cambia done
        displayTodos(); // vuelve a renderizar
    });

    todoListUl.addEventListener('click', ({ target }) => {
        if (!target.classList.contains('destroy')) return;

        const li = target.closest('[data-id');
        if (!li) return;

        const todoId = li.getAttribute('data-id');
        todoStore.deleteTodo(todoId); // cambia done
        displayTodos(); // vuelve a renderizar
    });

    clearCompletedBtn.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    })


    filtersLis.forEach( element =>{

        element.addEventListener('click', (element)=>{

            filtersLis.forEach(el => el.classList.remove('selected') );
            element.target.classList.add('selected');

            switch( element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                     case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                     case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos();
        });
    })
}