import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Header() {
    const { isLoggedIn, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="bg-gray-800 flex">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="text-center sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</Link>
                                {isLoggedIn && isLoggedIn ? (
                                    <>
                                        <Link to="/dash" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</Link>
                                        <Link to="/logout" onClick={handleLogout} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Logout</Link>
                                    </>
                                ) : (
                                    <Link to="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;

