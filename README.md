# 🌍 TripPlanner

TripPlanner is a full-stack web application that helps people plan trips together. Instead of managing everything through chats, users can create trips, invite friends using a unique trip code, organize tasks, and keep track of everything related to the trip in one place.

This project was built to improve my understanding of full-stack web development while solving a real-world problem of collaborative trip planning.

---

## ✨ Features

- User Authentication
- Create a new trip
- Join an existing trip using a Trip Code
- View all joined trips
- Create and manage trip tasks
- Filter tasks based on their status
- Responsive and clean user interface
- Secure backend APIs with authentication

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 📂 Project Structure

```
TripPlanner/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── context/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone <repository-link>
```

### Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Create Environment Variables

Create a `.env` file inside the server folder.

Example

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Project

Start Backend

```bash
cd server
npm run dev
```

Start Frontend

```bash
cd client
npm run dev
```

---

## 📸 Main Functionalities

### User Authentication
Users can register and log in securely using JWT authentication.

### Create Trip
Users can create a trip by providing details like:
- Trip Name
- Destination
- Start Date
- End Date
- Budget
- Number of Travelers

A unique Trip Code is generated automatically.

### Join Trip
Users can join an existing trip by entering the Trip Code shared by another member.

### Trip Dashboard
Users can view all the trips they are part of from a single dashboard.

### Task Management
Each trip has its own task list where members can:
- Add tasks
- Mark tasks as completed
- View pending tasks
- Filter tasks

---

## 💡 Why I Built This Project

Whenever friends plan a trip, the planning usually happens in different chats, making it difficult to keep track of expenses, tasks, and trip details.

TripPlanner brings everything together in one place, making collaboration much easier and more organized.

---

## 📚 What I Learned

While building this project, I learned:

- Building REST APIs using Express.js
- JWT Authentication
- MongoDB schema design
- React Context API
- State management
- API integration using Axios
- Full-stack project structure
- Error handling and debugging
- Working with protected routes

---

## 🔮 Future Improvements

Some features I plan to add in the future:

- Expense Tracker
- Real-time Chat
- Trip Image Gallery
- Weather Information
- Maps Integration
- Notifications
- AI-based Trip Recommendations
- Role-based permissions (Admin & Members)

---

## 👨‍💻 Author

**Yashita Gupta**

Final Year B.Tech Student

This project was built as part of my full-stack web development journey and to strengthen my practical development skills.

---

⭐ If you found this project useful, feel free to give it a star!