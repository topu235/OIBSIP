document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        input.value = '';
    }
});

function addTask(taskText) {
    const todoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}