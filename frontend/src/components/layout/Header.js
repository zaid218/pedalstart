import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../shared/LogoutButton';

const Header = () => {
    const { token } = useSelector((state) => state.auth);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl">Task Manager</Link>
                <nav className="hidden md:flex">
                    {token ? (
                        <LogoutButton />
                    ) : (
                        <>
                            <Link to="/login" className="mr-4">Login</Link>
                            <Link to="/signup" className="mr-4">Sign Up</Link>
                        </>
                    )}
                </nav>
                <button className="md:hidden" onClick={handleMobileMenuToggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-gray-700 p-4">
                    {token ? (
                        <LogoutButton />
                    ) : (
                        <>
                            <Link to="/login" className="block mb-2">Login</Link>
                            <Link to="/signup" className="block">Sign Up</Link>
                        </>
                    )}
                </nav>
            )}
        </header>
    );
};

export default Header;
