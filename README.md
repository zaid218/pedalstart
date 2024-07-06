
# Task Management Application

watch the live deployed website on :https://effortless-empanada-a3a5e6.netlify.app/

the backend is deployed on :https://pedalstart-3lsy.onrender.com/api

This repository contains a Task Management Application built with React.js for the front-end and Node.js with Express.js for the back-end.

## Features

- Display a list of tasks with options to add, view details, edit, and delete tasks.
- User authentication with JWT for secure login and signup.
- Responsive design using tailwind css for usability on desktop and mobile devices.
- RESTful API for CRUD operations on tasks.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v14 or above)
- MongoDB (Community Edition)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zaid218/pedalstart.git


bash
Copy code

git  clone https://github.com/zaid218/pedalstart.git

Navigate to the project directory:

Install dependencies for both the frontend and backend:


# Install server dependencies
cd backend

npm install

# Install client dependencies
cd frontend

npm install


#Create a .env file in the backend directory and add the following environment variables:



PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

Replace your_mongodb_connection_string with your MongoDB connection URI and your_jwt_secret with a secure string for JWT token signing.

#Running the Application

Start the backend server:


# From the backend directory
cd backend

npm run dev

The backend server will start running at http://localhost:5000.

Start the React client:


# From the frontend directory
cd frontend

npm start

The React client will open in your default web browser at http://localhost:3000.

Open http://localhost:3000 in your web browser to view the Task Management Application.

Usage
Register a new user or login with existing credentials.
Add, edit, view details, and delete tasks from the dashboard.
Logout to securely end the session.
Additional Notes
Ensure MongoDB is running before starting the backend server.
Modify environment variables in .env as per your configuration needs.
For production deployment, set up environment variables accordingly.
Credits
This project was developed by Mohd Zaid Khan.
