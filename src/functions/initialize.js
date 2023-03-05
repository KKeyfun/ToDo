import append from './append';
import makeElement from './makeElement';
import { newListInput } from './listFunctions';
import { display } from './displayController';

function initialLoad() {
  // todo - finish functionality
  const modalBg = makeElement('div', 'modalBg');
  // todo - stop propogation when hiding modal and bg
  const modalContainer = makeElement('div', 'modalContainer');

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

  const contentHeader = makeElement('div', ['header', 'contentHeader'], 'LIST NAME HERE');// todo - change name to current list's name

  const content = makeElement('div', 'content');
  const checklistContainer = makeElement('div', 'checklistContainer');
  const checklist = makeElement('ol', 'checklist');

  const newTaskButton = makeElement('button', 'addTaskButton', '+');
  newTaskButton.addEventListener('click', () => { display('add'); });

  append(checklistContainer, checklist);
  append(content, checklistContainer);
  append(contentContainer, [contentHeader, content, newTaskButton]);
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

  const uList = makeElement('ul');

  const listItemA = makeElement('li');
  const newTaskHeader = makeElement('div', ['header', 'newTaskHeader'], 'New Task');
  //   const newTaskCancelButton = makeElement('button', 'newTaskCancelButton', 'Cancel');
  const newTaskCancelButton = makeElement('button', 'modalCornerButton', 'Cancel');
  newTaskCancelButton.addEventListener('click', () => {
    closeModal();// import from displaycontroller
  });
  append(listItemA, [newTaskHeader, newTaskCancelButton]);

  const listItemB = makeElement('li');
  const newTaskName = makeElement('input');
  newTaskName.setAttribute('type', 'text');
  const newTaskNameLabel = makeElement('label', 'label', 'Task Name: ');
  append(listItemB, [newTaskNameLabel, newTaskName]);

  const listItemC = makeElement('li');
  const listSelectLabel = makeElement('label', 'label', 'List: ');
  const listSelectDropdown = makeElement('select', 'listSelectDropdown');// dynamically add lists later
  append(listItemC, [listSelectLabel, listSelectDropdown]); // Use index from lists, ID might be hard

  const listItemD = makeElement('li');
  const newTaskDescriptionLabel = makeElement('label', 'label', 'Description: ');
  const newTaskDescription = makeElement('textarea');
  newTaskDescription.setAttribute('rows', '3');
  //   newTaskDescription
  append(listItemD, [newTaskDescriptionLabel, newTaskDescription]);

  const listItemE = makeElement('li');
  const newTaskDueDateLabel = makeElement('label', 'label', 'Due Date: ');
  const newTaskDueDate = makeElement('input');// todo - calendar widget
  newTaskDueDate.setAttribute('type', 'date');
  newTaskDueDate.setAttribute('min', '2023-01-01');
  append(listItemE, [newTaskDueDateLabel, newTaskDueDate]);

  const listItemF = makeElement('li');
  const newTaskPriorityLabel = makeElement('label', 'label', 'Task Priority: ');
  const newTaskPriority = makeElement('select');
  append(newTaskPriority, [makeElement('option', '', 'Low'), makeElement('option', '', 'Moderate'), makeElement('option', '', 'High')]);
  append(listItemF, [newTaskPriorityLabel, newTaskPriority]);

  const listItemG = makeElement('li');
  const newTaskAddButton = makeElement('button', 'newTaskAddButton', 'Add Task');
  newTaskAddButton.addEventListener('click', () => {
  // call create list function
    addTask();
  });

  append(listItemG, newTaskAddButton);

  append(uList, [listItemA, listItemB, listItemC, listItemD, listItemE, listItemF, listItemG]);
  append(newTaskForm, uList);

  append(addTaskModal, [newTaskForm]);
  return addTaskModal;
}

function createEditTaskModal() {
  // todo - all buttons need override
  const editTaskModal = makeElement('div', 'editTaskModal');// may need a wrapper
  const editTaskForm = makeElement('form', 'editTaskForm');

  const uList = makeElement('ul');

  const listItemA = makeElement('li');
  const editTaskHeader = makeElement('div', ['header', 'editTaskHeader'], 'Edit Task');
  const deleteTaskButton = makeElement('button', 'modalCornerButton', 'Delete Task');// todo - garbage bin icon
  append(listItemA, [editTaskHeader, deleteTaskButton]);

  // TODO, this needs to go into task list
  const listItemB = makeElement('li');
  const editTaskTitleLabel = makeElement('label', 'label', 'Task Title: ');
  const editTaskTitle = makeElement('input', 'editTaskTitle');// todo - needs to know which task it's editing, this might need to go into the task functions
  append(listItemB, [editTaskTitleLabel, editTaskTitle]);

  const listItemC = makeElement('li');
  const editTaskDescriptionLabel = makeElement('label', 'label', 'Task Description: ');
  const editTaskDescription = makeElement('input', 'editTaskDescription');
  append(listItemC, [editTaskDescriptionLabel, editTaskDescription]);

  const listItemD = makeElement('li');
  const editDueDateLabel = makeElement('label', 'label', 'Due Date: ');
  const editDueDate = makeElement('input', 'editDueDate');// todo - calendar widget
  editDueDate.setAttribute('type', 'date');// todo - dynamic value
  editDueDate.setAttribute('min', '2023-01-01');
  append(listItemD, [editDueDateLabel, editDueDate]);

  const listItemE = makeElement('li');
  const editPriorityLabel = makeElement('label', 'label', 'Priority: ');
  const editPriority = makeElement('select');
  append(editPriority, [makeElement('option', '', 'Low'), makeElement('option', '', 'Moderate'), makeElement('option', '', 'High')]);
  // todo - change default value
  append(listItemE, [editPriorityLabel, editPriority]);

  const listItemF = makeElement('li');
  const saveEdit = makeElement('button', 'saveEdit', 'Save Changes');// todo - Save icon
  const cancelEdit = makeElement('button', 'cancelEdit', 'Cancel');
  append(listItemF, [saveEdit, cancelEdit]);

  append(uList, [listItemA, listItemB, listItemC, listItemD, listItemE, listItemF]);
  append(editTaskForm, uList);
  append(editTaskModal, [editTaskForm]);

  return editTaskModal;
}

function createInfoModal() {

}

export default initialLoad;
