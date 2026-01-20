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

function counter() {
  const counterOfTasks = document.getElementsByClassName("todo-list-item");
  amountOfTasks.textContent = Array.from(counterOfTasks).length;
  const counterOfDoneTasks = document.getElementsByClassName("done-task-item");
  amountOfDoneTasks.textContent = Array.from(counterOfDoneTasks).length;
}

addBtn.addEventListener("click", () => {
  if (taskInput.value !== "") {
    const todoListItem = document.createElement("li");
    todoListItem.classList.add("todo-list-item");
    listOfTasks.appendChild(todoListItem);
    todoListItem.textContent = taskInput.value.trim();
    taskInput.value = "";
    //--------------------------------------------
    const spanContainerForImgBtns = document.createElement("span");
    todoListItem.appendChild(spanContainerForImgBtns);
    //--------------------------------------------
    const tickBtn = document.createElement("img");
    tickBtn.src = "images/tick.svg";
    tickBtn.alt = "Tick button";
    tickBtn.classList.add("tick-btn");
    spanContainerForImgBtns.appendChild(tickBtn);
    //--------------------------------------------
    const deleteBtn = document.createElement("img");
    deleteBtn.src = "images/delete.svg";
    deleteBtn.alt = "Delete button";
    deleteBtn.classList.add("delete-btn");
    spanContainerForImgBtns.appendChild(deleteBtn);
    //--------------------------------------------
    counter();

    deleteBtn.addEventListener("click", () => {
      listOfTasks.removeChild(todoListItem);
      counter();
    });
    tickBtn.addEventListener("click", () => {
      const doneTaskItem = document.createElement("li");
      doneTasksList.appendChild(doneTaskItem);
      doneTaskItem.classList.add("done-task-item");
      //--------------------------------------------
      doneTaskItem.textContent = todoListItem.textContent;
      listOfTasks.removeChild(todoListItem);
      counter();
    });
  }
});
