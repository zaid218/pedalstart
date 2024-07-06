import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import TaskList from './components/dashboard/TaskList';
import TaskDetail from './components/dashboard/TaskDetail';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import { Provider } from 'react-redux';
import store from './redux/store'; // Assuming store import from your redux setup
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/tasks/:taskId" element={<TaskDetail />} />
              <Route path="/tasks/:taskId/edit" element={<TaskDetail />} />
              {/* Add a catch-all route for unmatched paths */}
              <Route path="*" element={<div>404: Not Found</div>} />
            </Routes>
          </main>
        </div>
        <Footer className="mt-auto" /> {/* Footer fixed to bottom */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
