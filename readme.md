# Task Management System - React JS and Node.js

## Introduction

This repository contains the solution for the Tech Lead - Frontend and Backend Development assignment. The goal is to create a simple task management system with user authentication, task CRUD operations, and state management using React JS for the frontend and Node.js with Express for the backend.

## `Frontend Development (React JS)`

### Features

- User authentication (sign up, login).
- Add, edit, and delete tasks.
- State management using React Context.

### Instructions to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/dipakgupta12/task-management-app.git
   ```
2. Navigate to the frontend directory:

   ```bash
   cd task-management-app/frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. Open your browser and visit http://localhost:3000.

### `Backend Development (Node.js with Express)`

### Features

- Node.js server using Express.
- RESTful API endpoints for user authentication and task - management.
- JWT-based authentication.
- MySQL database for storing task data.

### Instructions to Run Locally

1. Ensure you have Node.js and MySQL installed on your machine.

2. Navigate to the backend directory.
   ```bash
   cd task-management-app/backend
   ```
3. Install dependencies.

   ```bash
   npm install
   ```

4. Set up MySQL database and update the database configuration in config.js.

5. Run the server:
   ```bash
   npm start
   ```
6. The server will run based on env file on http://localhost:8080 or http://localhost:8081.

## `Run application with docker`

#### Both the frontend and backend applications are dockerized.

### Instructions to Run with Docker

1. Install Docker on your machine.
2. Navigate to the root directory:
   ```bash
   cd task-management-app
   ```
3. Build the Docker images
    ```bash
    docker-compose build
    ```
4. Run the Docker containers.
    ```bash
    docker-compose up
    ```
Frontend: http://localhost:3000

Backend: http://localhost:8080