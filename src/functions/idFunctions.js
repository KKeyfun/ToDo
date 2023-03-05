function generateId() {
  return Math.floor(Math.random() * 1000000);
}

function checkIfIdExists(list, id) {
  let exists = false;
  list.forEach((elem) => {
    if (elem.id === id) {
      exists = true;
    }
  });
  return exists;
}

export { generateId, checkIfIdExists };
