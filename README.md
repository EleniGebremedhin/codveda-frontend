# TaskFlow – Task Management System

TaskFlow is a web-based Task Management System developed as part of my **Codveda Technologies Full Stack Web Development Internship**.

The application allows users to manage their daily tasks through a simple and interactive interface connected to a REST API built with Node.js and Express.js.

## Features

- **Create Tasks:** Add new tasks.
- **View Tasks:** Retrieve and display tasks from the backend.
- **Update Tasks:** Mark tasks as completed or undo completion.
- **Delete Tasks:** Remove tasks.
- **Task Filtering:** Filter tasks by All, Pending, and Completed.
- **Search:** Search tasks by title.
- **Task Statistics:** Display total, completed, and pending task counts.
- **Dark Mode:** Switch between light and dark themes.
- **Responsive Design:** Adapt the interface to different screen sizes.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- REST API
- Git and GitHub

## Project Structure

```text
codveda-frontend/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    └── app.js
```

## Backend Integration

The frontend communicates with a REST API developed using Node.js and Express.js.

Backend repository: [codveda-rest-api](https://github.com/EleniGebremedhin/codveda-rest-api)

API endpoint:

`http://localhost:3000/tasks`

The application uses the following HTTP methods:

| Method | Purpose        |
| ------ | -------------- |
| GET    | Retrieve tasks |
| POST   | Create a task  |
| PUT    | Update a task  |
| DELETE | Delete a task  |

## How to Run the Project

### 1. Start the Backend

Clone the backend repository:

```bash
git clone https://github.com/EleniGebremedhin/codveda-rest-api.git
```

Navigate into the folder:

```bash
cd codveda-rest-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The backend runs at:

`http://localhost:3000`

### 2. Run the Frontend

Clone the frontend repository:

```bash
git clone https://github.com/EleniGebremedhin/codveda-frontend.git
```

Open the project folder in Visual Studio Code.

Run `index.html` using the Live Server extension.

Make sure the backend server is running before using the frontend.

## Note

The backend currently uses in-memory storage. Tasks are reset when the server restarts.

## Internship

Developed as part of the **Codveda Technologies Full Stack Web Development Internship**.
