// Retrieve tasks from local storage and display them
document.addEventListener("DOMContentLoaded", () => {
    displayTasks();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const tasks = getTasks();
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    displayTasks();
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");

        const taskText = document.createTextNode(task);
        taskItem.appendChild(taskText);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => deleteTask(index);

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}
