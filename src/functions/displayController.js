import makeElement from './makeElement';
import append from './append';

function display(form, lists, activeList) {
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
  document.querySelector('.infoPanelHeader').textContent = task.task;
  document.querySelector('.infoPanelBody').textContent = task.description;
  if (task.dueDate) {
    document.querySelector('.infoPanelDueDate').textContent = `Due ${task.dueDate}`;// make sure worky
  } else {
    document.querySelector('.infoPanelDueDate').textContent = '';
  }
}

function togglePanel(activeTask) {
  const panel = document.querySelector('.infoPanelContainer');
  panel.style.display = activeTask ? 'block' : 'none';
}

export {
  display, changeActiveList, closeModal, updateInfoPanel, togglePanel,
};
