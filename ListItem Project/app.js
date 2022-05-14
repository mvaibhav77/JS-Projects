// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const cross = document.querySelector('.delete-item secondary-content')

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove list item
  taskList.addEventListener('click', delTask);
  // Clear all items
  clearBtn.addEventListener('click', clearItems);
  //filter items
  filter.addEventListener('keyup', filterItems);
}
//Get tasks
function getTasks(){
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  })

}


// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }else{
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // add to local storage
  addToStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
  }
}

// Remove Task
function delTask(e){
  if(e.target.className==='fa fa-remove'){
    e.target.parentElement.parentElement.remove();
  }
  // Remove from LS
  removeTaskFromLocalStorage(e.target.parentElement.parentElement);
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem){
  let tasks;

  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent===task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks))
}


//Clear items
function clearItems(e){
  taskList.innerHTML='';
  console.log(e.target)

  // clear from local storage
  localStorage.clear();

}

//filter items
function filterItems(e){

  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display='block';
      }else{
        task.style.display='none';
      }
    }
  );
  console.log('hello')
}

// Add to storage
function addToStorage(task){
  let tasks;

  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Del from storage
 function delItem(e){
   
 }
// localStorage.clear()