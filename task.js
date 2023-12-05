
const taskInput = document.getElementById('taskInput');
const TaskList = document.getElementById('TaskList');

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Done</button>
    `;

    TaskList.appendChild(listItem);

    taskInput.value = '';
  }
}


function removeTask(button) {
  const listItem = button.parentElement;
  TaskList.removeChild(listItem);
}
