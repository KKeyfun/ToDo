function generateId(list) {
  let id = Math.floor(Math.random() * 1000000);
  while (checkIfIdExists(list, id)) {
    id = Math.floor(Math.random() * 1000000);
  }
  return id;
}

function checkIfIdExists(list, id) {
  if (list.length === 0) {
    return false;
  }
  let exists = false;
  list.forEach((elem) => {
    if (elem.id === id) {
      exists = true;
    }
  });
  return exists;
}

export default generateId;
