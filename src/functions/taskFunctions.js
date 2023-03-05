import makeElement from './makeElement';
import append from './append';
// import { lists, activeList } from './listFunctions';
import { generateId, checkIfIdExists } from './idFunctions';

function createTask(task, description, dueDate, priority) {
  // const changeValue = (value, newValue) => {
  //   // call displaycontroller for the form
  // };
  // probably wont use
  return {
    task, description, dueDate, priority, changeValue,
  };
}

function addTask(list, task, taskDescription, priority, dueDate) {
  const newTask = createTask(task, taskDescription, priority, dueDate);
  list.tasks.push(newTask);

  const taskContainer = makeElement('li', 'taskContainer');
  const header = makeElement('div', 'taskHeader', task);
  const description = makeElement('div', 'taskDescription', taskDescription);
  // let taskPriority = makeElement('div','taskPriority',taskPriority);
  // change so priority has weight, maybe in another function
  const due = makeElement('div', 'taskDueDate', dueDate);

  append(taskContainer, [header, description, due]);
  append(list, taskContainer);// should put on appropriate location depending on priority
}

function newTask() {
//   if(everythingworks) {
//     const newTask = createTask(task,description,duedate,priority);
//   }
  // grab values from the forms
}
