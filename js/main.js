const taskInput = document.getElementById("task-input");
const addBtn = document.querySelector(".add-btn");
const allTasksTodoContainer = document.querySelector(
  ".all-tasks-todo-container",
);
const amountOfTasks = document.querySelector(".amount-of-tasks");
const amountOfDoneTasks = document.querySelector(".amount-of-done-tasks");
const listOfTasks = document.querySelector(".list-of-tasks");
const doneTasksContainer = document.querySelector(".done-tasks-container");
const doneTasksList = document.querySelector(".done-tasks-list");

let newOne = JSON.parse(localStorage.getItem("arrayY")) || [];
amountOfTasks.textContent = newOne.length;
console.log(newOne);
// displaying

function displayingList() {
  listOfTasks.innerHTML = "";
  newOne.forEach((element, index) => {
    listOfTasks.innerHTML += `<li class="todo-list-item" id=${index}>${element}<span><img src="images/tick.svg" alt="Tick button" data-id=${index} class="tick-btn"><img src="images/delete.svg" alt="Delete button" class="delete-btn" data-id=${index}></span></li>`;
    taskInput.value = "";
  });
  localStorage.setItem("arrayY", JSON.stringify(newOne));
  amountOfTasks.textContent = newOne.length;
}
displayingList();
addBtn.addEventListener("click", () => {
  addNewElement();
});
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewElement();
  }
});

function addNewElement() {
  if (taskInput.value.trim() !== "") {
    newOne.push(taskInput.value);
    displayingList();
  }
}

const deleteBtns = document.getElementsByClassName("delete-btn");

listOfTasks.addEventListener("click", (item) => {
  if (item.target.classList.contains("delete-btn")) {
    let index = item.target.dataset.id;
    newOne.splice(index, 1);
    console.log(newOne);
    displayingList();
  }
});

let arrayForDoneTasks =
  JSON.parse(localStorage.getItem("arrayForDoneTasks")) || [];
console.log(arrayForDoneTasks);

function displayingListOfDoneItems() {
  doneTasksList.innerHTML = "";
  arrayForDoneTasks.forEach((element, index) => {
    doneTasksList.innerHTML += `<li class="done-task-item" id=${index}>${element}<span><img src="images/restart.svg" alt="Restart button" class="restart-btn" data-id=${index}></span></li>`;
    taskInput.value = "";
  });

  localStorage.setItem("arrayForDoneTasks", JSON.stringify(arrayForDoneTasks));
  amountOfDoneTasks.textContent = arrayForDoneTasks.length;
}
displayingListOfDoneItems();
listOfTasks.addEventListener("click", (item) => {
  if (item.target.classList.contains("tick-btn")) {
    console.log(item.target.dataset.id);
    let index = item.target.dataset.id;
    let doneItem = newOne.splice(index, 1);
    arrayForDoneTasks.push(doneItem[0]);
    displayingListOfDoneItems();
    displayingList();
  } else {
    console.log(false);
  }
});

doneTasksList.addEventListener("click", (btn) => {
  if (btn.target.classList.contains("restart-btn")) {
    console.log(btn.target.dataset.id);
    let index = btn.target.dataset.id;
    let restartItem = arrayForDoneTasks.splice(index, 1);
    newOne.push(restartItem[0]);
    displayingListOfDoneItems();
    displayingList();
  }
});
