import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { gapi } from 'gapi-script';

function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Sign out from Google
        const auth2 = gapi.auth2.getAuthInstance();
        if (auth2 != null) {
            auth2.signOut().then(() => {
                auth2.disconnect();
                console.log('User signed out from Google');
                logout();
                navigate('/login');
            });
        }
    }, [logout, navigate]);

    return (
        <div className="min-h-screen bg-gray-600 flex items-center justify-center">
            <p className="text-white text-xl">Logging out...</p>
        </div>
    );
}

export default Logout;

