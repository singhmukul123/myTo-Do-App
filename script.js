const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="complete-button">Complete</button>
      <button class="delete-button">Delete</button>
    `;
    pendingTasksList.appendChild(listItem);
    taskInput.value = '';
    attachTaskButtons(listItem);
  }
});

function attachTaskButtons(listItem) {
  const completeButton = listItem.querySelector('.complete-button');
  const deleteButton = listItem.querySelector('.delete-button');

  completeButton.addEventListener('click', () => {
    listItem.classList.toggle('completed');
    completedTasksList.appendChild(listItem);
    listItem.removeChild(completeButton);
  });

  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });
}
