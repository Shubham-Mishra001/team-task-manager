# Team Task Manager (Full-Stack)

A full-stack Team Task Manager web application where users can create projects, assign tasks, and track task progress with role-based access.

---

# 🚀 Features

## Authentication
- User Signup
- User Login
- JWT Authentication
- Password Hashing

## Project Management
- Create Projects
- View Projects

## Task Management
- Create Tasks
- Assign Tasks
- Update Task Status
- Track Progress

## Dashboard
- Total Tasks
- Completed Tasks
- Pending Tasks

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js

## Database
- MySQL

## Authentication
- JWT (JSON Web Token)
- bcryptjs

---

# 📁 Project Structure

```bash
team-task-manager/
│
├── client/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/team-task-manager.git
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🗄️ Database Setup

Create MySQL database:

```sql
CREATE DATABASE task_manager;
USE task_manager;
```

---

# Create Tables

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('admin','member') DEFAULT 'member'
);

CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT
);

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    status ENUM('pending','in-progress','completed') DEFAULT 'pending',
    due_date DATE,
    project_id INT,
    assigned_to INT
);
```

---

# 🔐 Environment Variables

Create `.env` inside server folder:

```env
JWT_SECRET=taskmanagersecret
PORT=5000
```

---

# 📌 API Endpoints

## Auth APIs

```bash
POST /api/auth/register
POST /api/auth/login
```

## Project APIs

```bash
GET /api/projects
POST /api/projects
```

## Task APIs

```bash
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
```

---

# 📸 Screenshots

## Login Page
- User login interface

## Dashboard
- Task statistics dashboard

## Project Management
- Create and manage projects

## Task Management
- Create tasks and update status

---

# 🌐 Deployment

## Frontend
- Vercel

## Backend
- Railway

---

# 👨‍💻 Author

Shubham Mishra

---

# 📄 License

This project is developed for assessment and learning purposes.
