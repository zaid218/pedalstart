import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../shared/LogoutButton';

const Header = () => {
    const { token } = useSelector((state) => state.auth);

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl">Task Manager</Link>
                <nav>
                    {token ? (
                        // If user is logged in, show LogoutButton
                        <LogoutButton />
                    ) : (
                        // If user is not logged in, show Login and Signup links
                        <>
                            <Link to="/login" className="mr-4">Login</Link>
                            <Link to="/signup" className="mr-4">Sign Up</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
