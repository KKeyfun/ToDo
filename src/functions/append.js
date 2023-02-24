function append(parent, child) {
  if (child.length) {
    child.forEach((elem) => {
      parent.appendChild(elem);
    });
  } else {
    parent.appendChild(child);
  }
}

export default append;
