import { Todo } from '../todos/models/todo.model';

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('piedra del Alma'),
        new Todo('piedra del Infinito'),
        new Todo('piedra del Tiempo'),
        new Todo('piedra del Fuerza'),
        new Todo('piedra de la Realidad')
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('InitStore');
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    const actions = {
        [Filters.All]: () => [...state.todos],
        [Filters.Completed]: () => state.todos.filter(todo => todo.done),
        [Filters.Pending]: () => state.todos.filter(todos => !todos.done),
    };
    if (!actions[filter]) throw new Error(`Option ${filter} is not valid`);
    return actions[filter]();
}

const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos = [...state.todos, new Todo(description)];
    saveStateToLocalStorage();
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
    );
    saveStateToLocalStorage();
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    initStore,
    loadStore,
    deleteCompleted,
    deleteTodo,
    getTodos,
    getCurrentFilter,
    setFilter,
    toggleTodo,
}