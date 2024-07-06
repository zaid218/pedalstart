import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token'); // Remove token from localStorage
        navigate('/login'); // Redirect to homepage after logout
    };

    return (
        <button onClick={handleLogout} className="text-white">Logout</button>
    );
};

export default LogoutButton;
