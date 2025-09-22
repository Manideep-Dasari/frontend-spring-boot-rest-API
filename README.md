# 🌐 Task 8: Frontend Integration with Spring Boot REST API

## 📝 Description
This project demonstrates a simple **task manager** web application where you can:
- View tasks (GET request)
- Add new tasks (POST request)
- Update the UI dynamically without page reload
It connects a Spring Boot REST API backend with a HTML/CSS/JavaScript frontend using the Fetch API.

---

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript (Fetch API, DOM manipulation)
-**Backend:** Spring Boot REST API (Java)
- **Tools:** VSCode / IntelliJ / Maven / Postman
- Live Server for frontend testing

---

## 📁 Repo Structure
```bash
Task_8/
│
├── src/
│   ├── java/bhub/Task8/Task_8/
│   │   ├── Task8Application.java
│   │   ├── controller/Task8Controller.java
│   │   ├── model/Task8Model.java
|   |   ├── frontend/
|   |   |   ├── index.html
|   |   |   ├── style.css
|   |   |   └── script.js
│   └── pom.xml
```

---

## ⚡ Features
- **View tasks dynamically** from the backend
- **Add tasks** using a simple form
- **Instant UI updates** without page reload
- **Cross-Origin requests handled** with `@CrossOrigin` in Spring Boot

---

## 🚀 Setup Instructions
## 1. Backend (Spring Boot)
   1. Open `java/bhub/Task8/Task_8/` in Eclipse or VSCode
   2. Build and run:
   ```bash
   mvn spring-boot:run
   ```
   3. API runs at: `http://localhost:8080/tasks`
   4. Test endpoints using Postman:
      - `GET /tasks` → returns all tasks
      - `POST /tasks` → add a task, body example:
      ```json
      {
      "name": "Learn Java"
      }
      ```
## 2. Frontend (HTML/CSS/JS)
   1. Open `frontend/index.html` directly in a browser or use Live Server        (VSCode extension)
   2. Make sure the backend is running at **localhost:8080**
   3. Add a task → it appears immediately in the task list
   4. Refresh page → tasks persist while backend is running
      
