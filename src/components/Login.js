import React from 'react';
import { GoogleLoginButton } from './GoogleAuth';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
        login();
        navigate('/');
    };

    const onFailure = (res) => {
        console.log("Login Failed res:", res);
    };

    return (
        <div className='flex min-h-screen bg-gray-600'>
            <div className='flex max-w-3xl mx-auto justify-center mt-12'>
                <div className='flex gap-2 bg-transparent h-11 items-center justify-center py-2 px-4 rounded'>
                    <GoogleLoginButton onSuccess={onSuccess} onFailure={onFailure} />
                </div>
            </div>
        </div>
    );
}

export default Login;
