// displays tasks according to the matching list
// import lists

import { activeList, lists } from './listFunctions';
import makeElement from './makeElement';
import append from './append';

// should import activelist
function display(form) {
  document.querySelector('.modalBg').style.display = 'flex';
  if (form === 'add') {
    document.querySelector('.addTaskModal').style.display = 'flex';
  } else if (form === 'edit') {
    document.querySelector('.editTaskModal').style.display = 'flex';
  }

  const dropdown = document.querySelector('.listSelectDropdown');
  lists.forEach((list) => {
    const aList = makeElement('option', '', list.listName);
    aList.setAttribute('data-id', list.id);
    append(dropdown, aList);
  });
  dropdown.selectedIndex = lists.map((elem) => elem.id).indexOf(activeList.id);// defaults list select to current active list
}

function changeActiveList() { // changes title of content area, displays tasks for active list
  document.querySelector('.contentHeader').textContent = activeList.listName;
}

function closeModal(event) {
  event.preventDefault();

  // activeModal
}

export { display, changeActiveList, closeModal };
