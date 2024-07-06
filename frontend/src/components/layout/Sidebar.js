import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const isAuthenticated = useSelector((state) => state.auth.token !== null);

    return (
        <aside className="w-64 bg-gray-100 p-4">
            <nav>
                <ul>
                    <li className="mb-2">
                        <Link to="/" className="text-gray-700">Tasks</Link>
                    </li>
                    {isAuthenticated ? (
                        <li className="mb-2">
                            <Link to="/tasks/new" className="text-gray-700">Create Task</Link>
                        </li>
                    ) : (
                        <li className="mb-2">
                            <Link to="/login" className="text-gray-700">Create Task</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
