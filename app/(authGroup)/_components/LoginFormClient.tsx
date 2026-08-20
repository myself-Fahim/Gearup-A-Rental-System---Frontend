"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';
import { loginAction } from '../_actions/authAction';

const LoginForm = () => {
    return (
        <div>
            <form action={loginAction}>

                <Card className='p-5 '>
                    <div>
                        <label htmlFor="">Email</label>
                        <Input className='mt-1 py-4' name='email' type='email' placeholder='Enter your email' required></Input>
                    </div>

                    <div className='mb-3'>
                        <label>Password</label>
                        <Input className='mt-1 py-4' name='password' type='password' placeholder='Enter your password' required></Input>
                    </div>

                    <Button type='submit' variant={"default"} size={"lg"}>Login</Button>
                </Card>

            </form>

        </div>
    );
};

export default LoginForm;