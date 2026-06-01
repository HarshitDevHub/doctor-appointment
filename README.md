# Doctor Appointment Booking System

A premium, full-stack Doctor Appointment Booking platform built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This production-grade application features a responsive frontend, a comprehensive Admin Panel, and a robust REST API backend to manage doctor schedules, user appointments, and administrative controls seamlessly.

---

## 🚀 Features

### **User Panel**
* **Intuitive UI/UX:** Responsive design optimized for both mobile and desktop screens.
* **Doctor Discovery:** Browse doctors filtered by specialization and view their availability.
* **Appointment Management:** Securely book slots, view appointment history, and track status.

### **Admin & Doctor Dashboard**
* **Doctor Profiles:** Add, update, or manage doctor details, fees, and specializations.
* **Appointment Controls:** View all upcoming bookings, mark them as completed, or handle cancellations.
* **Data Overview:** Admin panel insights to track overall appointments and active doctors.

### **Backend Architecture**
* **RESTful API:** Clean separation of concerns with structured MVC pattern routes.
* **Database:** Scalable MongoDB schemas for handling users, doctors, and appointment data.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Deployment:** Configured for Vercel (`vercel.json`)

---

## 📂 Project Structure

```text
├── backend/          # Node.js & Express.js server, API routes, models
├── src/              # React.js frontend application (Vite setup)
├── public/           # Static assets
├── tailwind.config.js# Tailwind CSS styling configurations
└── vercel.json       # Deployment configurations




```
## ⚡ Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your local machine.

### 1. Clone the Repository

```bash
git clone [https://github.com/HarshitDevHub/doctor-appointment.git](https://github.com/HarshitDevHub/doctor-appointment.git)
cd doctor-appointment

```

### 2. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend

```


2. Install dependencies:
```bash
npm install

```


3. Create a `.env` file in the backend root and add your configuration environment variables (e.g., `MONGO_URI`, `PORT`).
4. Start the backend server:
```bash
npm start

```



### 3. Frontend Setup

1. Open a new terminal window and navigate to the project root:
```bash
cd ..

```


2. Install frontend dependencies:
```bash
npm install

```


3. Start the Vite development server:
```bash
npm run dev

```



---
