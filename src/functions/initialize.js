import append from './append';
import makeElement from './makeElement';
import { newListInput, lists, activeList } from './listFunctions';
import { closeModal, display } from './displayController';
import { addTask, editTask } from './taskFunctions';
import getAsset from './assets';

function initialLoad() {
  const modalBg = makeElement('div', 'modalBg');
  modalBg.addEventListener('click', () => {
    if (document.querySelector('.modalContainer').firstChild.style.display === 'flex') {
      closeModal(document.querySelector('.newTaskForm'));
    } else {
      closeModal(document.querySelector('.editTaskForm'));
    }
  });
  const modalContainer = makeElement('div', 'modalContainer');
  modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  const addModal = createAddTaskModal();
  const editModal = createEditTaskModal();

  append(modalContainer, [addModal, editModal]);
  append(modalBg, modalContainer);

  const headerContainer = makeElement('div', 'headerContainer');
  const header = makeElement('div', ['header', 'pageHeader'], 'To Do');
  append(headerContainer, header);

  const sidebarContainer = makeElement('div', 'sidebarContainer');
  const sidebarHeader = makeElement('div', ['header', 'sidebarHeader'], 'Your Lists');
  const sidebar = makeElement('ul', 'sidebar');
  const addListButton = makeElement('button', 'addListButton', '+');

  addListButton.addEventListener('click', newListInput);

  append(sidebar, addListButton);
  append(sidebarContainer, [sidebarHeader, sidebar]);

  const contentContainer = makeElement('div', 'contentContainer');

  const tasklistContainer = makeElement('div', 'tasklistContainer');
  const contentHeader = makeElement('div', ['header', 'contentHeader']);

  const content = makeElement('div', 'content');
  const checklistContainer = makeElement('div', 'checklistContainer');
  const checklist = makeElement('ol', 'checklist');

  const infoPanel = createInfoPanel();

  const newTaskButton = makeElement('button', 'addTaskButton', '+');
  newTaskButton.addEventListener('click', () => {
    display('add', lists, activeList);
  });

  append(checklistContainer, checklist);
  append(content, checklistContainer);
  append(tasklistContainer, [contentHeader, content, newTaskButton]);
  append(contentContainer, [tasklistContainer, infoPanel]);

  const footerContainer = makeElement('div', 'footerContainer');
  const footer = makeElement('a', 'footer', 'Kkeyfun');
  footer.href = 'https:github.com/KKeyfun';
  append(footer, getAsset('github'));
  append(footerContainer, footer);
  append(document.querySelector('body'), [modalBg, headerContainer, sidebarContainer, contentContainer, footerContainer]);
}

function createAddTaskModal() {
  const addTaskModal = makeElement('div', 'addTaskModal');
  const newTaskForm = makeElement('form', 'newTaskForm');

  const uList = makeElement('ul');

  const listItemA = makeElement('li');
  const newTaskHeader = makeElement('div', ['header', 'newTaskHeader'], 'New Task');
  const newTaskCancelButton = makeElement('button', 'modalCornerButton');
  append(newTaskCancelButton, getAsset('cancel'));
  newTaskCancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    closeModal(newTaskForm);
  });
  append(listItemA, [newTaskHeader, newTaskCancelButton]);

  const listItemB = makeElement('li');
  const newTaskName = makeElement('input', 'newTaskName');
  newTaskName.setAttribute('type', 'text');
  newTaskName.required = true;
  const newTaskNameLabel = makeElement('label', 'label', 'Task Name: ');
  append(listItemB, [newTaskNameLabel, newTaskName]);

  const listItemC = makeElement('li');
  const listSelectLabel = makeElement('label', 'label', 'List: ');
  const listSelectDropdown = makeElement('select', 'listSelectDropdown');
  append(listItemC, [listSelectLabel, listSelectDropdown]);

  const listItemD = makeElement('li');
  const newTaskDescriptionLabel = makeElement('label', 'label', 'Description: ');
  const newTaskDescription = makeElement('textarea', 'newTaskDescription');
  newTaskDescription.setAttribute('rows', '3');
  append(listItemD, [newTaskDescriptionLabel, newTaskDescription]);

  const listItemE = makeElement('li');
  const newTaskDueDateLabel = makeElement('label', 'label', 'Due Date: ');
  const newTaskDueDate = makeElement('input', 'newTaskDueDate');
  newTaskDueDate.setAttribute('type', 'date');
  newTaskDueDate.setAttribute('min', '2023-01-01');
  append(listItemE, [newTaskDueDateLabel, newTaskDueDate]);

  const listItemF = makeElement('li');
  const newTaskPriorityLabel = makeElement('label', 'label', 'Task Priority: ');
  const newTaskPriority = makeElement('select', 'newTaskPriority');
  append(newTaskPriority, [makeElement('option', '', 'Low'), makeElement('option', '', 'Moderate'), makeElement('option', '', 'High')]);
  append(listItemF, [newTaskPriorityLabel, newTaskPriority]);

  const listItemG = makeElement('li');
  const newTaskAddButton = makeElement('button', 'newTaskAddButton', 'Add Task');
  newTaskAddButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (newTaskName.checkValidity()) {
      newTaskName.style.border = '';
      addTask();
    } else {
      newTaskName.style.border = '2px solid red';
    }
  });

  append(listItemG, newTaskAddButton);

  append(uList, [listItemA, listItemB, listItemC, listItemD, listItemE, listItemF, listItemG]);
  append(newTaskForm, uList);

  append(addTaskModal, [newTaskForm]);
  return addTaskModal;
}

function createEditTaskModal() {
  const editTaskModal = makeElement('div', 'editTaskModal');
  const editTaskForm = makeElement('form', 'editTaskForm');

  const uList = makeElement('ul');

  const listItemA = makeElement('li');
  const editTaskHeader = makeElement('div', ['header', 'editTaskHeader'], 'Edit Task');
  append(listItemA, editTaskHeader);

  const listItemB = makeElement('li');
  const editTaskTitleLabel = makeElement('label', 'label', 'Task Title: ');
  const editTaskTitle = makeElement('input', 'editTaskTitle');
  editTaskTitle.required = true;
  append(listItemB, [editTaskTitleLabel, editTaskTitle]);

  const listItemC = makeElement('li');
  const editTaskDescriptionLabel = makeElement('label', 'label', 'Task Description: ');
  const editTaskDescription = makeElement('textarea', 'editTaskDescription');
  editTaskDescription.setAttribute('rows', '3');
  append(listItemC, [editTaskDescriptionLabel, editTaskDescription]);

  const listItemD = makeElement('li');
  const editDueDateLabel = makeElement('label', 'label', 'Due Date: ');
  const editDueDate = makeElement('input', 'editDueDate');
  editDueDate.setAttribute('type', 'date');
  editDueDate.setAttribute('min', '2023-01-01');
  append(listItemD, [editDueDateLabel, editDueDate]);

  const listItemE = makeElement('li');
  const editPriorityLabel = makeElement('label', 'label', 'Priority: ');
  const editPriority = makeElement('select', 'editPriority');
  append(editPriority, [makeElement('option', '', 'Low'), makeElement('option', '', 'Moderate'), makeElement('option', '', 'High')]);
  append(listItemE, [editPriorityLabel, editPriority]);

  const listItemF = makeElement('li');
  const saveEdit = makeElement('button', 'saveEdit', 'Save Changes');

  saveEdit.addEventListener('click', (event) => {
    event.preventDefault();
    if (editTaskTitle.checkValidity()) {
      editTaskTitle.style.border = '';
      editTask();
      closeModal(editTaskForm);
    } else {
      editTaskTitle.style.border = '2px solid red';
    }
  });
  const cancelEdit = makeElement('button', 'cancelEdit', 'Cancel');
  cancelEdit.addEventListener('click', (event) => {
    event.preventDefault();
    closeModal(editTaskForm);
  });
  append(listItemF, [saveEdit, cancelEdit]);

  append(uList, [listItemA, listItemB, listItemC, listItemD, listItemE, listItemF]);
  append(editTaskForm, uList);
  append(editTaskModal, [editTaskForm]);

  return editTaskModal;
}

function createInfoPanel() {
  const infoPanelContainer = makeElement('div', 'infoPanelContainer');
  const infoPanel = makeElement('div', 'infoPanel');
  const infoPanelHeader = makeElement('div', ['header', 'infoPanelHeader']);
  const infoPanelBody = makeElement('div', 'infoPanelBody');
  const infoPanelFooter = makeElement('div', 'infoPanelFooter');
  const infoPanelDueDate = makeElement('div', 'infoPanelDueDate');

  append(infoPanelFooter, infoPanelDueDate);
  append(infoPanel, [infoPanelHeader, infoPanelBody, infoPanelFooter]);
  append(infoPanelContainer, infoPanel);

  return infoPanelContainer;
}

export default initialLoad;
