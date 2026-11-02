const API_URL = "http://localhost:3000/tasks";

// Get the HTML elements
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");
const apiStatus = document.getElementById("api-status");

// Fetch tasks from the backend
async function getTasks() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const tasks = await response.json();

    console.log("Tasks received from backend:", tasks);

    displayTasks(tasks);

    apiStatus.textContent = "Connected to server";
  } catch (error) {
    console.error("Error connecting to backend:", error);
    apiStatus.textContent = "Unable to connect to server";
  }
}
// Add a new task
async function addTask(title) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to add task");
    }

    // Refresh the task list
    getTasks();
  } catch (error) {
    console.error("Error adding task:", error);
    alert(error.message);
  }
}

async function updateTask(id, completed) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: completed,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to update task");
    }

    getTasks();
  } catch (error) {
    console.error("Error updating task:", error);
    alert(error.message);
  }
}

async function deleteTask(id) {
  // Ask for confirmation before deleting
  const confirmDelete = confirm("Are you sure you want to delete this task?");

  if (!confirmDelete) {
    return;
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to delete task");
    }

    // Refresh the task list
    getTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
    alert(error.message);
  }
}

// Listen for form submission
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (title === "") {
    alert("Please enter a task title.");
    return;
  }

  addTask(title);

  taskInput.value = "";
});

// Display tasks on the webpage

function displayTasks(tasks) {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item";

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    if (task.completed) {
      title.classList.add("completed");
    }

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Undo" : "Complete";
    completeButton.className = "complete-btn";

    completeButton.addEventListener("click", () => {
      updateTask(task.id, !task.completed);
    });

    li.appendChild(title);
    li.appendChild(completeButton);
    // Create a Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

// Load tasks when the page opens
getTasks();
