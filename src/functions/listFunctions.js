import makeElement from './makeElement';
import append from './append';
import { generateId, checkIfIdExists } from './idFunctions';
import { changeActiveList } from './displayController';

let lists = []; // lists and their sidebar containers
let activeList = null;
let addingList = false;

function createList(listName, container) { // Create List Object
  let tasks = [];
  let id = generateId();

  while (checkIfIdExists(lists, id)) {
    id = generateId();
  }

  const addTaskToList = (task) => {
    // call task function
    tasks.push(task);
  };

  const removeTaskFromList = (task) => {
    tasks = tasks.filter((elem) => elem.id !== task.id);
    // todo - create ids for tasks
  };

  const toggleActive = () => {
    container.classList.toggle('active'); // old list
    // should be calling displaycontroller to show proper list of tasks
  };

  return {
    listName, tasks, id, addTaskToList, removeTaskFromList, container, toggleActive,
  };
}

function modifyListName(list) {
  const listName = list.children[0].children[0].value;
  // should hide the original stuff
  // list.children[1].style.display = 'none';
  // list.children[2].style.display = 'none';

  // hide the text field then redisplay the rest
  const previousValue = list.children[1].textContent;
  list.children[1].textContent = listName;
  list.children[1].style.display = 'block';
  list.children[2].style.display = 'flex';
  list.children[0].style.display = 'none';

  // let textField = list.children[0];
  // textField.style.display = 'flex';
  // let temp = lists.filter(elem => elem.name !== list.textContent);
  // finds list in the list array to edit the name
  // temp[0].taskName = listName;
  const index = lists.findIndex((elem) => elem.listName === previousValue);
  lists[index].listName = listName;
  // change to a text field
}

function deleteList(list) {
  lists = lists.filter((elem) => elem.id !== list.children[1].getAttribute('data-id'));

  // TODO adjust task display if active list is deleted
  list.parentElement.removeChild(list);
  toggleAddTaskButton();
}

// adds a new list with edit + delete buttons to the sidebar
const addList = (listName, container) => {
  const listItem = makeElement('div', null, listName);
  // lists.push(createList(listName));

  container.addEventListener('click', () => {
    event.stopPropagation();
    activeList.toggleActive();
    // activeList = lists.map((elem) => elem.id).indexOf(this.getAttribute('data-id'));
    activeList.toggleActive();
    changeActiveList();
  });
  lists.push(createList(listName, container));// Creates a new list object with reference to its container in the sidebar
  container.setAttribute('data-id', lists[lists.length - 1].id);

  if (lists.length > 1) { // ensure at least 1 list exists
    activeList.toggleActive(); // removes 'active' class from previously active list
  }
  // todo - also need to set first list to active if deleting active list
  activeList = lists[lists.length - 1];// maybe use id instead, right now is the entire list object, though constant lookup is bad
  activeList.toggleActive();
  // todo - need to remove with the list swap fxn, need to remove previous active
  // move to displaycontroller, changeActiveList(list,container)

  const buttonOverlay = makeElement('div', 'buttonOverlay');
  const editButton = makeElement('button', 'editButton', 'edit');
  const deleteButton = makeElement('button', 'deleteButton', 'del');

  editButton.addEventListener('click', () => { // shows text field to edit list name, hides label and save/delete buttons
    buttonOverlay.style.display = 'none';
    listItem.style.display = 'none';
    container.children[0].style.display = 'flex';
  });
  deleteButton.addEventListener('click', () => {
    deleteList(container);
  });
  // todo - add a remaining tasks counter
  append(buttonOverlay, [editButton, deleteButton]);
  append(container, [listItem, buttonOverlay]);
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
    append(listNameContainer, [listName, saveListName]);
    append(sidebarItemContainer, listNameContainer);

    sidebar.insertBefore(sidebarItemContainer, document.querySelector('.addListButton'));
    saveListName.addEventListener('click', function add() {
      addingList = false; // to prevent duplicate new list input forms
      let lName = 'New List';
      if (listName.value) {
        lName = listName.value;
      }
      addList(lName, sidebarItemContainer);
      console.log(lists);
      listNameContainer.style.display = 'none';
      // listName.style.display = 'none';
      // saveListName.style.display = 'none';
      // console.log(sidebarItemContainer)
      saveListName.removeEventListener('click', add);
      saveListName.addEventListener('click', () => { modifyListName(sidebarItemContainer); });
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
