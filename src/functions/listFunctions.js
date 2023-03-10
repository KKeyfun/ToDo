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

// adds a new list with edit + delete buttons to the sidebar
const addList = (listName, container) => {
  const listItem = makeElement('div', null, listName);

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

  activeList = lists[lists.length - 1];
  activeList.toggleActive();
  if (lists.length > 0) {
    document.querySelector('.contentHeader').style.display = 'block';
  }
  changeActiveList(activeList, true);
  // todo - need to remove with the list swap fxn, need to remove previous active
  // move to displaycontroller, changeActiveList(list,container)

  const buttonOverlay = makeElement('div', 'buttonOverlay');
  const editButton = makeElement('button', 'editButton');
  // testing
  // const editImg = makeElement('img');
  // editImg.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOSAxM3Y2YzAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xdi02YzAtLjU1Mi40NDgtMSAxLTFzMSAuNDQ4IDEgMXptNy0xYy0uNTUyIDAtMSAuNDQ4LTEgMXY2YzAgLjU1Mi40NDggMSAxIDFzMS0uNDQ4IDEtMXYtNmMwLS41NTItLjQ0OC0xLTEtMXptLTQgMGMtLjU1MiAwLTEgLjQ0OC0xIDF2NmMwIC41NTIuNDQ4IDEgMSAxczEtLjQ0OCAxLTF2LTZjMC0uNTUyLS40NDgtMS0xLTF6bTQuMzMzLTguNjIzYy0uODgyLS4xODQtMS4zNzMtMS40MDktMS4xODktMi4yOTFsLTUuMjAzLTEuMDg2Yy0uMTg0Ljg4My0xLjEyMyAxLjgxLTIuMDA0IDEuNjI1bC01LjUyOC0xLjA5OS0uNDA5IDEuOTU4IDE5LjU5MSA0LjA5OS40MDktMS45NTgtNS42NjctMS4yNDh6bTQuNjY3IDQuNjIzdjE2aC0xOHYtMTZoMTh6bS0yIDE0di0xMmgtMTR2MTJoMTR6Ii8+PC9zdmc+';
  append(editButton, getAsset('edit'));
  // testiong
  const deleteButton = makeElement('button', 'deleteButton');
  // testing
  append(deleteButton, getAsset('delete'));
  // testing

  editButton.addEventListener('click', (event) => { // shows text field to edit list name, hides label and save/delete buttons
    event.stopPropagation(); // todo - need to fix for the save button
    buttonOverlay.style.display = 'none';
    listItem.style.display = 'none';
    container.children[0].style.display = 'flex';
    container.firstChild.firstChild.focus(); // maybe replace all children[0] with firstchild?
  });
  deleteButton.addEventListener('click', (event) => {
    deleteList(container, event);
    if (lists.length === 0) {
      document.querySelector('.contentHeader').style.display = 'none';
    }
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
    // testing
    append(saveListName, getAsset('save'));
    // testing
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

      // // testing
      // const taskListContainer = makeElement('div','taskListContainer');
      // const taskList = makeElement('ul','taskList');
      // append(taskListContainer,taskList);
      // // add reference to the list object task
      // // testing

      addList(lName, sidebarItemContainer);
      console.log(lists);
      listNameContainer.style.display = 'none';
      // listName.style.display = 'none';
      // saveListName.style.display = 'none';
      // console.log(sidebarItemContainer)
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
