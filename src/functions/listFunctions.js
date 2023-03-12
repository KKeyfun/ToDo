import makeElement from './makeElement';
import append from './append';
import generateId from './idFunctions';
import { changeActiveList } from './displayController';
import getAsset from './assets';

let lists = []; // lists and their sidebar containers
let activeList = null;
let addingList = false;

function createList(listName, container) { // Create List Object
  const tasks = [];
  const id = generateId(lists);

  const addTaskToList = function (task) {
    this.tasks.push(task);
    if (activeList.id === id) { // If adding task to active list, update the display
      changeActiveList(activeList);
    }
  };

  const removeTaskFromList = function (taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  };

  const toggleActive = () => {
    container.classList.toggle('active');
  };

  return {
    listName, tasks, id, addTaskToList, removeTaskFromList, container, toggleActive,
  };
}

function modifyListName(list) {
  const listName = list.children[0].children[0].value;
  list.children[1].textContent = listName;
  list.children[1].style.display = 'block';
  list.children[2].style.display = 'flex';
  list.children[0].style.display = 'none';

  const index = lists.map((elem) => elem.id).indexOf(+list.getAttribute('data-id'));
  lists[index].listName = listName;
  if (list === activeList.container) {
    changeActiveList(activeList);
  }
}

function deleteList(list, event) {
  lists = lists.filter((elem) => elem.container !== list);

  event.stopPropagation();
  list.parentElement.removeChild(list);
  toggleAddTaskButton();

  if (list === activeList.container && lists.length > 0) {
    activeList = lists[0];
    activeList.toggleActive();
    changeActiveList(activeList, true);
  } else if (lists.length === 1) {
    activeList = null;
    document.querySelector('.contentContainer').style.display = 'none';
  }
}

const addList = (listName, container) => { // adds a new list with edit + delete buttons to the sidebar
  const listItem = makeElement('div', null, listName);
  const taskCount = makeElement('div', 'taskCount');

  container.addEventListener('click', () => {
    if (container !== activeList.container) {
      activeList.toggleActive();
      activeList = lists[lists.map((elem) => elem.container).indexOf(container)];
      activeList.toggleActive();
      changeActiveList(activeList, true);
    }
  });
  lists.push(createList(listName, container));// Creates a new list object with reference to its container in the sidebar
  container.setAttribute('data-id', lists[lists.length - 1].id);

  if (lists.length > 1) {
    activeList.toggleActive(); // removes 'active' class from previously active list
  }

  activeList = lists[lists.length - 1];// changes activelist to the new list
  activeList.toggleActive();
  if (lists.length > 0) { // displays tasklist header if at least 1 list exists
    document.querySelector('.contentHeader').style.display = 'block';
  }
  changeActiveList(activeList, true);

  const buttonOverlay = makeElement('div', 'buttonOverlay');
  const editButton = makeElement('button', 'editButton');
  append(editButton, getAsset('edit'));

  const deleteButton = makeElement('button', 'deleteButton');
  append(deleteButton, getAsset('delete'));

  editButton.addEventListener('click', (event) => { // shows text field to edit list name, hides label and save/delete buttons
    event.stopPropagation();
    buttonOverlay.style.display = 'none';
    listItem.style.display = 'none';
    taskCount.style.display = 'none';
    container.children[0].style.display = 'flex';
    container.firstChild.firstChild.focus();
  });

  deleteButton.addEventListener('click', (event) => {
    deleteList(container, event);
    if (lists.length === 0) {
      document.querySelector('.contentHeader').style.display = 'none';
    }
  });

  append(buttonOverlay, [editButton, deleteButton]);
  append(container, [listItem, taskCount, buttonOverlay]);
  activeList = lists[lists.length - 1];
  toggleAddTaskButton();
};

function newListInput() { // Creates a text field to create a new list
  if (!addingList) {
    addingList = true;
    const sidebar = document.querySelector('.sidebar');
    const sidebarItemContainer = makeElement('li', 'sidebarItemContainer');

    const listNameContainer = makeElement('div', 'listNameContainer');
    const listName = makeElement('input', 'listNameField');
    listName.setAttribute('type', 'text');

    const saveListName = makeElement('button', 'saveButton');
    append(saveListName, getAsset('save'));
    append(listNameContainer, [listName, saveListName]);
    append(sidebarItemContainer, listNameContainer);

    sidebar.insertBefore(sidebarItemContainer, document.querySelector('.addListButton'));
    saveListName.addEventListener('click', function add() {
      addingList = false; // to prevent duplicate new list input forms
      let lName = 'New List';
      if (listName.value) {
        lName = listName.value;
      } else {
        listName.value = lName;
      }

      addList(lName, sidebarItemContainer);
      // console.log(lists);
      listNameContainer.style.display = 'none';
      saveListName.removeEventListener('click', add);
      saveListName.addEventListener('click', () => {
        modifyListName(sidebarItemContainer);
      });
    });
    listName.focus();
  }
}

function toggleAddTaskButton() {
  const addTask = document.querySelector('.addTaskButton');
  if (lists.length) {
    addTask.style.display = 'block';
  } else {
    addTask.style.display = 'none';
  }
}

export { newListInput, lists, activeList };
