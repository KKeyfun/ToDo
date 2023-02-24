import append from './append';
import makeElement from './makeElement';
import { newList } from './listFunctions';

function initialLoad() {
  // todo - finish functionality
  const modalBg = makeElement('div', 'modalBg');
  const modalContainer = makeElement('div', 'modalContainer');

  // const addModal = createAddTaskModal();
  //   const editModal = createEditTaskModal();

  // append(modalContainer, [addModal, editModal]);
  append(modalBg, modalContainer);

  const headerContainer = makeElement('div', 'headerContainer');
  const header = makeElement('div', 'header', 'To Do');
  append(headerContainer, header);

  const sidebarContainer = makeElement('div', 'sidebarContainer');
  const sidebarHeader = makeElement('div', 'sidebarHeader', 'Your Lists');
  const sidebar = makeElement('ul', 'sidebar');
  const addListButton = makeElement('button', 'addListButton', '+');

  addListButton.addEventListener('click', newList);

  append(sidebar, addListButton);
  append(sidebarContainer, [sidebarHeader, sidebar]);

  const contentContainer = makeElement('div', 'contentContainer');

  const contentHeader = makeElement('div', 'contentHeader', 'LIST NAME HERE');// todo - change name to current list's name

  const content = makeElement('div', 'content');
  const checklistContainer = makeElement('div', 'checklistContainer');
  const checklist = makeElement('ol', 'checklist');
  append(checklistContainer, checklist);
  append(content, checklistContainer);
  append(contentContainer, [contentHeader, content]);
  // checklistitems

  const footerContainer = makeElement('div', 'footerContainer');
  const url = makeElement('a', '', 'Github');// todo - fix after finding new icon
  url.href = '';// todo - get github icon from different source
  const image = makeElement('img', 'githubUrl');
  const footer = makeElement('a', 'footer');
  footer.href = 'https:github.com/KKeyfun';
  append(footer, image);
  append(footerContainer, [footer, url]);
  append(document.querySelector('body'), [modalBg, headerContainer, sidebarContainer, contentContainer, footerContainer]);
}

function createAddTaskModal() {
  const addTaskModal = makeElement('div', 'addTaskModal');
  const newTaskForm = makeElement('form', 'newTaskForm');

  const newTaskHeader = makeElement('div', 'newTaskHeader', 'New Task');
  const newTaskNameLabel = makeElement('label', 'label', 'Task Name');

  const newTaskCancelButton = makeElement('button', 'newTaskCancelButton', 'Cancel');
  // newTaskCancelButton.addEventListener('click',function(){ newTaskCancel() });

  const newTaskName = makeElement('input');
  newTaskName.setAttribute('type', 'text');

  const listSelectLabel = makeElement('label', 'label', 'List');
  const listSelectDropdown = makeElement('select', 'listSelectDropdown');// dynamically add lists later

  const newTaskDescriptionLabel = makeElement('label', 'label', 'Description');
  const newTaskDescription = makeElement('input');// todo - should be textarea
  newTaskDescription.setAttribute('type', 'text');

  const newTaskDueDateLabel = makeElement('label', 'label', 'Due Date');
  const newTaskDueDate = makeElement('input');// todo - calendar widget
  //   newTaskDescription.setAttribute('type', 'text');

  const newTaskPriorityLabel = makeElement('label', 'label', 'Task Priority: ');
  const newTaskPriority = makeElement('select');
  append(newTaskPriority, [makeElement('option', '', 'High'), makeElement('option', '', 'Moderate'), makeElement('option', '', 'Low')]);

  const newTaskAddButton = makeElement('button', 'newTaskAddButton', 'Add Task');

  append(addTaskModal, []);
  return addTaskModal;
}

function createEditTaskModal() {
  const editTaskModal = makeElement('div', 'editTaskModal');

  const editTaskTitle = makeElement('div');// todo - needs to know which task it's editing, this might need to go into the task functions

  append(editTaskModal, []);
  return editTaskModal;
}

export default initialLoad;
