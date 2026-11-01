const API_URL = "http://localhost:3000/tasks";

// Get tasks from the backend
async function getTasks() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const tasks = await response.json();

    console.log("Tasks received from backend:", tasks);
  } catch (error) {
    console.error("Error connecting to backend:", error);
  }
}

// Call the function
getTasks();
