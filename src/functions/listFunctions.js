import makeElement from './makeElement';
import append from './append';

let lists = [];
let activeList = null;
let addingList = false;

function createList(listName) {
  const tasks = [];
  return { listName, tasks };
  // should be pushed to a global lists array
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
  lists = lists.filter((elem) => elem.listName !== list.children[1].textContent);

  // TODO adjust task display if active list is deleted
  list.parentElement.removeChild(list);
}

// adds a new list with edit + delete buttons to the sidebar
const addList = (listName, container) => {
  const listItem = makeElement('div', null, listName);
  lists.push(createList(listName));

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

  append(buttonOverlay, [editButton, deleteButton]);
  append(container, [listItem, buttonOverlay]);
  activeList = lists[lists.length - 1];
};

function newList() { // Creates a text field to create a new list
  if (!addingList) {
    addingList = true;
    const sidebar = document.querySelector('.sidebar');
    const sidebarItemContainer = makeElement('li', 'sidebarItemContainer');

    // add functionality
    const listNameContainer = makeElement('div', 'listNameContainer');
    const listName = makeElement('input', 'listNameField');
    listName.setAttribute('type', 'text');
    const saveListName = makeElement('button', 'saveButton');
    append(listNameContainer, [listName, saveListName]);
    append(sidebarItemContainer, listNameContainer);

    sidebar.insertBefore(sidebarItemContainer, document.querySelector('.addListButton'));
    saveListName.addEventListener('click', function add() {
      addingList = false;
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
  }
}

// function createModal(){//needs access to lists, creates tasks
//     const addTaskModal = makeElement('div', 'addTaskModal');
//     const newForm = makeElement('form', 'newTaskForm');
//     const listSelect = makeElement('select','listSelectDropdown');//when new list is created, add an option too this

//     const newTaskHeader = makeElement('div', 'newTaskHeader', 'New Task');
//     const newTaskName = makeElement('input');
//     newTaskName.setAttribute('type', 'text');
//     const newTaskDescription = makeElement('input');
//     newTaskDescription.setAttribute('type', 'text');
//     const newTaskPriority = makeElement('select');
//     append(newTaskPriority, [makeElement('option', '', 'High'), makeElement('option', '', 'Moderate'), makeElement('option', '', 'Low')]);

//     const editTaskModal = makeElement('div', 'editTaskModal');
//     const modalContainer = document.querySelector('.modalContainer');
//     const modalBg = document.querySelector('.modalBg');
//     append(modalContainer, [addTaskModal, editTaskModal]);
//     append(modalBg, modalContainer);
// }

export { newList, lists, activeList };
