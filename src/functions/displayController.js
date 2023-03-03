// displays tasks according to the matching list
// import lists
function display(form) {
  document.querySelector('.modalBg').style.display = 'flex';
  if (form === 'add') {
    document.querySelector('.addTaskModal').style.display = 'flex';
  } else if (form === 'edit') {
    document.querySelector('.editTaskModal').style.display = 'flex';
  }
  // modalcontainer display:flex
}

function changeActiveList() {

}

function closeModal(event) {
  event.preventDefault();

  // activeModal
}

export { display, changeActiveList, closeModal };
