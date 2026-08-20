import React from 'react';
import LoginForm from '../_components/LoginFormClient';

const LoginPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center px-4'>
            <div className='border space-y-5 p-7 w-full shadow-sm rounded-sm'>
                <div className='space-y-3 mb-6'>
                    <h1 className='text-center text-3xl font-bold'>Welcome Back!</h1>
                    <p className='text-gray-500 text-sm text-center'>Provide your credentials to login your account</p>
                </div>

                <LoginForm></LoginForm>

            </div>
        </div>
    );
};

export default LoginPage;