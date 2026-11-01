// A tiny to-do list for practicing with Claude Code.
// It has a deliberate bug: adding an item doesn't seem to work.

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const count = document.getElementById('count');

const todos = [];

function render() {
  list.innerHTML = '';
  for (const todo of todos) {
    const li = document.createElement('li');
    li.textContent = todo;
    list.appendChild(li);
  }
  count.textContent = `${todos.length} item${todos.length === 1 ? '' : 's'}`;
}

function addTodo(text) {
  todos.push(text);
  render();
}

form.addEventListener('submit', () => {
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = '';
});

render();
