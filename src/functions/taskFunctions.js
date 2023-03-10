import makeElement from './makeElement';
import append from './append';
import { activeList, lists } from './listFunctions';
import generateId from './idFunctions';
import {
  closeModal, display, updateInfoPanel, togglePanel,
} from './displayController';
import getAsset from './assets';

let activeTask = null;

function createTask(task, description, dueDate, priority, completed, list, taskContainer) {
  const id = generateId(list);

  return {
    task, description, dueDate, priority, completed, id, taskContainer,
  };
}

const priority = {
  Low: 'low',
  Moderate: 'moderate',
  High: 'high',
};

function addTask() {
  const form = document.querySelector('.newTaskForm');
  const taskName = document.querySelector('.newTaskName').value;
  const selectedListIndex = document.querySelector('.listSelectDropdown').selectedIndex; //
  const taskDescription = document.querySelector('.newTaskDescription').value;
  const taskDueDate = document.querySelector('.newTaskDueDate').value;
  const taskPriority = document.querySelector('.newTaskPriority').value;
  // console.log(taskName + selectedList + taskDescription + taskDueDate + taskPriority);

  // console.log(selectedList);
  // todo - add to tasklist container
  // const newTask = createTask(task, taskDescription, priority, dueDate);
  // list.tasks.push(newTask);

  const taskContainer = makeElement('li', 'taskContainer');
  const checkbox = makeElement('input');
  checkbox.setAttribute('type', 'checkbox');

  // taskContainer.addEventListener('click','')

  taskContainer.classList.add(priority[taskPriority]);// for styling a task base on priority

  taskContainer.addEventListener('click', () => {
    changeActiveTask(taskContainer);
  });

  const name = makeElement('div', 'taskName', taskName);
  // const description = makeElement('div', 'taskDescription', taskDescription);
  // let taskPriority = makeElement('div','taskPriority',taskPriority);
  // change so priority has weight, maybe in another function
  const due = makeElement('div', 'taskDueDate');
  // NOTE - for the more details modal just take info from the task object
  // NOTE - for the priority styling do the same
  // buttons add icon
  const taskButtonContainer = makeElement('div', 'taskButtonContainer');
  const editTaskButton = makeElement('button', 'editTaskButton');
  // testing
  append(editTaskButton, getAsset('edit'));
  // testing
  const deleteTaskButton = makeElement('button', 'deleteTaskButton');
  // testing
  append(deleteTaskButton, getAsset('delete'));
  // testing
  append(taskButtonContainer, [editTaskButton, deleteTaskButton]);
  // buttons
  // duedate
  if (taskDueDate) {
    dateString(due, taskDueDate);
  }
  // duedate
  append(taskContainer, [checkbox, name, due, taskButtonContainer]);
  const selectedList = lists[selectedListIndex];
  // selectedList.addTaskToList(createTask(taskName, taskDescription, taskDueDate, taskPriority, false, selectedList.tasks, taskContainer));
  const task = createTask(taskName, taskDescription, taskDueDate, taskPriority, false, selectedList.tasks, taskContainer);
  selectedList.addTaskToList(task);// testing task variable
  // testing below

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      this.parentElement.classList.add('checked');
      task.completed = true;
    } else {
      this.parentElement.classList.remove('checked');
      task.completed = false;
    }
  });

  checkbox.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  editTaskButton.addEventListener('click', (event) => { // needs to find which task is clicked
    event.stopPropagation();
    // const selectedTask = activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];

    // TESTING TASK VARIABLE
    // activeTask = selectedTask;
    // console.log(activeList.tasks);
    // console.log(selectedTask);
    // document.querySelector('.editTaskTitle').value = selectedTask.task;
    // document.querySelector('.editTaskDescription').value = selectedTask.description;
    // document.querySelector('.editDueDate').value = selectedTask.dueDate;
    // document.querySelector('.editPriority').value = selectedTask.priority;

    activeTask = task;
    document.querySelector('.editTaskTitle').value = activeTask.task;
    document.querySelector('.editTaskDescription').value = activeTask.description;
    document.querySelector('.editDueDate').value = activeTask.dueDate;
    document.querySelector('.editPriority').value = activeTask.priority;
    // TESTING TASK VARIABLE

    // editTask(editTaskHeader.value, editTaskDescription.value, editDueDate.value, editPriority.value);

    display('edit', lists, activeList);
    // taskName =
  });

  deleteTaskButton.addEventListener('click', (event) => {
    event.stopPropagation();
    deleteTask(taskContainer);
  });
  // // priority testing make sure this works when changing active task
  // const header = document.querySelector('.infoPanelHeader');
  // // header.classList.remove(priority[activeTask.priority]);
  // const classes = header.className.split(' ');
  // if (classes.length > 2) {
  //   header.classList.remove(classes[2]);
  // }
  // header.classList.add(priority[taskPriority]);
  // // priority testing

  closeModal(form);
}

function deleteTask(taskContainer) {
  // event.stopPropagation();
  // const taskId = activeList.tasks[activeList.tasks.length - 1].id;
  const selected = activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];
  console.log(selected);
  activeList.removeTaskFromList(selected.id);
  taskContainer.remove();

  if (selected === activeTask) { // testing
    activeTask = null;
    togglePanel();
  }
}

function changeActiveTask(taskContainer) {
  const t = activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];
  activeTask = t;
  togglePanel(activeTask);
  updateInfoPanel(t);

  // testing
  const header = document.querySelector('.infoPanelHeader');
  const classes = header.className.split(' ');

  header.classList.remove(classes[2]);

  header.classList.add(priority[t.priority]);
}

function editTask() {
  // let editedTask =// document.querySelector('.saveEdit');

  // should also update the list display to reflect changes
  // document.querySelector('.saveEdit').addEventListener('click',);
  const prio = document.querySelector('.editPriority').value;
  if (prio !== activeTask.priority) {
    const infoPanel = document.querySelector('.infoPanelHeader');
    infoPanel.classList.remove(priority[activeTask.priority]);
    infoPanel.classList.add(priority[prio]);

    activeTask.taskContainer.classList.remove(priority[activeTask.priority]);
    activeTask.priority = prio;
    activeTask.taskContainer.classList.add(priority[activeTask.priority]);
  }
  activeTask.task = document.querySelector('.editTaskTitle').value;
  activeTask.description = document.querySelector('.editTaskDescription').value;
  activeTask.dueDate = document.querySelector('.editDueDate').value;

  const taskElement = activeTask.taskContainer.children;
  taskElement[1].textContent = activeTask.task;

  if (activeTask.dueDate) {
    // taskElement[2].dueDate =
    dateString(taskElement[2], activeTask.dueDate);
  }
  updateInfoPanel(activeTask);
  console.log(lists);
}

function dateString(due, taskDueDate) {
  console.log(due, taskDueDate);
  const currentDate = new Date();
  const tempDue = new Date(`${taskDueDate} 00:00:00`);
  let daysFromDue = (tempDue - currentDate) / (1000 * 3600 * 24);
  if (daysFromDue > -1 && daysFromDue < 1) {
    daysFromDue = Math.floor((tempDue - currentDate) / (1000 * 3600));
    due.textContent = (daysFromDue >= 0) ? `Due in ${daysFromDue} hour(s)` : `Due ${daysFromDue * -1} hour(s) ago`;
  } else {
    due.textContent = (daysFromDue >= 0) ? `Due in ${Math.floor(daysFromDue)} day(s)` : `Due ${Math.floor(daysFromDue * -1)} day(s) ago`;
  }
}

export { addTask, editTask };
