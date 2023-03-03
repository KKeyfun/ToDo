function makeElement(type, className, content) {
  const elem = document.createElement(type);
  if (className) {
    if (typeof (className) === 'object') {
      className.forEach((el) => {
        elem.classList.add(el);
      });
    } else { elem.classList.add(className); }
  }
  if (content) {
    elem.textContent = content;
  }
  return elem;
}

export default makeElement;
