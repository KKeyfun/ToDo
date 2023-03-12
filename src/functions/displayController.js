import makeElement from './makeElement';
import append from './append';

function display(form, lists, activeList) { // displays respective modal
  document.querySelector('.modalBg').style.display = 'flex';
  if (form === 'add') {
    document.querySelector('.addTaskModal').style.display = 'flex';
  } else if (form === 'edit') {
    document.querySelector('.editTaskModal').style.display = 'flex';
  }

  const dropdown = document.querySelector('.listSelectDropdown');
  if (dropdown.children.length !== lists.length) {
    while (dropdown.firstChild) {
      dropdown.removeChild(dropdown.firstChild);
    }
    lists.forEach((list) => {
      const aList = makeElement('option', '', list.listName);
      aList.setAttribute('data-id', list.id);
      append(dropdown, aList);
    });
  }
  dropdown.selectedIndex = lists.map((elem) => elem.id).indexOf(activeList.id);// defaults list select to current active list
}

function changeActiveList(activeList, hidePanel) { // change content area text, display respective list tasks
  if (hidePanel) { // Hide info panel when changing lists
    document.querySelector('.infoPanelContainer').style.display = 'none';
  }
  const taskList = document.querySelector('.checklist');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  document.querySelector('.contentHeader').textContent = activeList.listName;
  const tasks = activeList.tasks.map((elem) => elem.taskContainer);
  if (tasks.length > 0) {
    append(taskList, tasks);
  }
}

function closeModal(form) {
  document.querySelector('.modalBg').style.display = 'none';
  document.querySelector('.addTaskModal').style.display = 'none';
  document.querySelector('.editTaskModal').style.display = 'none';
  form.reset();
}

function updateInfoPanel(task) {
  const header = document.querySelector('.infoPanelHeader');
  header.textContent = task.task;
  const prevPrio = header.className.split(' ');
  header.classList.remove(prevPrio[2]);
  header.classList.add(task.priority.toLowerCase());

  document.querySelector('.infoPanelBody').textContent = task.description;
  const due = document.querySelector('.infoPanelDueDate');
  if (task.dueDate) {
    due.textContent = `Due ${task.dueDate}`;
    due.style.padding = '.25em';
  } else {
    due.textContent = '';
    due.style.padding = '0';
  }
}

function togglePanel(activeTask) {
  const panel = document.querySelector('.infoPanelContainer');
  panel.style.display = activeTask ? 'block' : 'none';
}

function updateTaskCount(list) {
  const taskCounter = document.querySelector(`li[data-id="${list.id}"] > .taskCount`);
  const taskCount = list.tasks.reduce((acc, curr) => ((curr.completed) ? acc : acc + 1), 0);
  taskCounter.textContent = (taskCount === 0) ? '' : taskCount;
}

export {
  display, changeActiveList, closeModal, updateInfoPanel, togglePanel, updateTaskCount,
};
