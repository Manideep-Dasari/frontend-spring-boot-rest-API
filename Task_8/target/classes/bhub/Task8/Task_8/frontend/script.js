const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");

const API_URL = "http://localhost:8080/tasks";

// To Load tasks
async function loadTasks() {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    taskList.innerHTML = "";
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task.name;
      taskList.appendChild(li);
    });
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
}

// To Add new task
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newTask = { name: taskInput.value };

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
    });
    taskInput.value = "";
    loadTasks();
  } catch (error) {
    console.error("Error adding task:", error);
  }
});

loadTasks();
