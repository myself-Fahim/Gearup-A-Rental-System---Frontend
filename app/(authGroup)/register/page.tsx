import React from 'react';
import RegisterForm from '../_components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center px-4'>
            <div className='border space-y-5 p-10 w-full shadow-sm rounded-sm'>
                <div className='space-y-3 mb-6'>
                    <h1 className='text-center text-2xl font-bold'>Create Account</h1>
                </div>
                <RegisterForm></RegisterForm>

            </div>
        </div>
    );
};

export default RegisterPage;