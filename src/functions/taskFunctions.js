import makeElement from './makeElement';
import append from './append';
import { activeList, lists } from './listFunctions';
import generateId from './idFunctions';
import {
  closeModal, display, updateInfoPanel, togglePanel, updateTaskCount,
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
  const selectedListIndex = document.querySelector('.listSelectDropdown').selectedIndex;
  const taskDescription = document.querySelector('.newTaskDescription').value;
  const taskDueDate = document.querySelector('.newTaskDueDate').value;
  const taskPriority = document.querySelector('.newTaskPriority').value;

  const taskContainer = makeElement('li', 'taskContainer');
  const checkbox = makeElement('input');
  checkbox.setAttribute('type', 'checkbox');

  taskContainer.classList.add(priority[taskPriority]);// for styling a task based on priority

  taskContainer.addEventListener('click', () => {
    changeActiveTask(taskContainer);
  });

  const name = makeElement('div', 'taskName', taskName);
  const due = makeElement('div', 'taskDueDate');
  const taskButtonContainer = makeElement('div', 'taskButtonContainer');

  const editTaskButton = makeElement('button', 'editTaskButton');
  append(editTaskButton, getAsset('edit'));

  const deleteTaskButton = makeElement('button', 'deleteTaskButton');
  append(deleteTaskButton, getAsset('delete'));
  append(taskButtonContainer, [editTaskButton, deleteTaskButton]);

  if (taskDueDate) { // Displays remaining/overdue time if date is set
    dateString(due, taskDueDate);
  }

  append(taskContainer, [checkbox, name, due, taskButtonContainer]);

  const selectedList = lists[selectedListIndex];
  const task = createTask(taskName, taskDescription, taskDueDate, taskPriority, false, selectedList.tasks, taskContainer);
  selectedList.addTaskToList(task);

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      this.parentElement.classList.add('checked');
      task.completed = true;
    } else {
      this.parentElement.classList.remove('checked');
      task.completed = false;
    }

    updateInfoPanel(activeTask);
    updateTaskCount(selectedList);
  });

  checkbox.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  editTaskButton.addEventListener('click', (event) => {
    event.stopPropagation();
    activeTask = task;
    document.querySelector('.editTaskTitle').value = activeTask.task;
    document.querySelector('.editTaskDescription').value = activeTask.description;
    document.querySelector('.editDueDate').value = activeTask.dueDate;
    document.querySelector('.editPriority').value = activeTask.priority;

    display('edit', lists, activeList);
  });

  deleteTaskButton.addEventListener('click', (event) => {
    event.stopPropagation();
    deleteTask(taskContainer);
  });
  updateTaskCount(selectedList);
  closeModal(form);
}

function deleteTask(taskContainer) {
  const selected = activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];
  activeList.removeTaskFromList(selected.id);
  taskContainer.remove();

  if (selected === activeTask) {
    activeTask = null;
    togglePanel();
  }
  updateTaskCount(activeList);
}

function changeActiveTask(taskContainer) {
  const t = activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];
  activeTask = t;
  togglePanel(activeTask);
  updateInfoPanel(t);

  const header = document.querySelector('.infoPanelHeader');
  const classes = header.className.split(' ');

  header.classList.remove(classes[2]);

  header.classList.add(priority[t.priority]);
}

function editTask() {
  const prio = document.querySelector('.editPriority').value;
  if (prio !== activeTask.priority) {
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
    dateString(taskElement[2], activeTask.dueDate);
  }
  updateInfoPanel(activeTask);
  // console.log(lists);
}

function dateString(due, taskDueDate) {
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
