// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  // Create a new list item
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  
  // Create a span for the task text
  const taskText = document.createElement('span');
  taskText.innerText = taskInput.value;
  
  // Create a button for removing the task
  const removeButton = document.createElement('button');
  removeButton.className = 'btn btn-danger btn-sm';
  removeButton.innerText = 'Remove';
  removeButton.onclick = function () {
    removeTask(listItem);
  };

  // Append the task text and remove button to the list item
  listItem.appendChild(taskText);
  listItem.appendChild(removeButton);
  
  // Add the new task to the list
  taskList.appendChild(listItem);
  
  // Clear the input field
  taskInput.value = '';
}

// Function to remove a task
function removeTask(taskItem) {
  taskItem.remove();
}
