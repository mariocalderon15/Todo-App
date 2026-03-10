export const createTodoHTML = (todo) => {
    const { done, description, id} = todo;

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" id="todo-${id}" ${done ? 'checked' : ''}>
            <label for="todo-${id}">${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" id="edit-${id}" name="edit-${id}" value="${description}">
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);

    if (done) liElement.classList.add('completed');

    return liElement;
};