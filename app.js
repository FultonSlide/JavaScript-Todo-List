const todoList = document.querySelector('.todos');
const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const msg = document.querySelector('.completed');

//Generate List Item Html Template
const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    todoList.innerHTML += html;
};

//Hides Todos that don't match what the user searches
const filterTodos = (term) => {
    const noneMatchedTodos = Array.from(todoList.children).filter((todo) => !todo.textContent.includes(term));
    const matchedTodos =Array.from(todoList.children).filter((todo) => todo.textContent.includes(term));

    noneMatchedTodos.forEach((todo) => todo.classList.add('filtered'));
    matchedTodos.forEach((todo) => todo.classList.remove('filtered'));
};

//Add Todos submit handler
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = e.target.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//Delete Todos Click handler
todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//Search handler
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});